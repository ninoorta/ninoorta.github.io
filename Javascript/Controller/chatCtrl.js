
controller.loadConversation = async function () {

    // 1. load data from firebase database

    let currentEmail = firebase.auth().currentUser.email

    let result = await firebase
        .firestore()
        .collection('Conversations')
        .where('users', 'array-contains', currentEmail)
        .get()

    let docs = result.docs
    let conversations = transformDocs(docs)
    // console.log(docs,conversations)


    // 2. save data to model
    model.saveConversations(conversations)

    if (conversations.length) {
        let currentConversation = conversations[0]
        model.saveCurrentConversation(currentConversation);
    }
    console.log(model)     // model.conversations = [],  currentConversastion = {...}


    // 3. display data
    view.showCurrentConversation()
    view.showListConversations()   //model.conversations >> #list-conversations

    // view.showListConversations()

    // Demo cách truy vấn database
    // demoQueryDatabase()


}

controller.setupDatabaseChange = function () {
    let currentEmail = firebase.auth().currentUser.email
    let isFirstRun = true

    firebase
        .firestore()
        .collection('Conversations')
        .where('users', 'array-contains', currentEmail)
        .onSnapshot(function (snapshot) {
            if (isFirstRun) {
                isFirstRun = false
                return
            }
            let docChanges = snapshot.docChanges()
            for (let docChange of docChanges) {
                if (docChange.type == 'modified') {
                    let doc = docChange.doc
                    let conversation = transformDoc(doc)

                    if (model.currentConversation
                        && model.currentConversation.id == conversation.id) {
                        model.saveCurrentConversation(conversation);
                        // console.log(model.currentConversation)
                        view.showCurrentConversation();
                    }

                    // docChange.type == 'added' => Thêm vào bảng -> hiển thị ra màn hình
                    // docChange.type == 'removed'

                    // console.log('old conversation',model.currentConversation)
                    // console.log('new conversation',conversation)
                }

                if (docChange.type == 'added') {
                    let conversation = transformDoc(docChange.doc)
                    // console.log(conversation);
                    model.updateConversation(conversation)
                    // add converastion to model.conversation
                    view.showListConversations()
                    // update conversation to view
                }
                if (docChange.type == 'removed') {
                    //   update model
                    //   update view
                    let conversation = transformDoc(docChange.doc)
                    
                    model.removeConversation(conversation)

                    if (model.isCurrentConversation(conversation)) {
                        if (model.hasMoreConversation()) {
                            // Nếu trong mảng còn phần tử thì đưa phần tử đầu tiên làm current conversation
                            model.saveCurrentConversation(model.conversations[0])
                        } else {
                            model.saveCurrentConversation(null)  /* Không còn phần tử nào thì cho bằng NULL */
                        }
                    }

                    view.showListConversations()
                    view.showCurrentConversation()

                }
            }


            // console.log(snapshot.docChanges())
            // console.log('database changed')

        })


}

controller.addMessage = async function (message) {
    // update message to collection
    if (model.currentConversation) {
        let currentId = model.currentConversation.id
        view.disable('add-message-btn')

        await firebase
            .firestore()
            .collection('Conversations')
            .doc(currentId)
            .update({
                messages: firebase.firestore.FieldValue.arrayUnion(message)
                // users: firebase.firestore.FieldValue.arrayRemove(email)
            })

        view.enable('add-message-btn')

        document.getElementById('message-input').value = ''

        console.log('added new message')
    }

}

controller.addConversation = async function (title, friendEmail) {
    view.disable('form-add-conversation-btn')
    try {
        let currentEmail = firebase.auth().currentUser.email
        let signInMethods = await firebase
            .auth()
            .fetchSignInMethodsForEmail(friendEmail)

        // Kiểm tra email 
        if (!signInMethods.length) {
            throw new Error('Friend email is not registered yet!')
        }
        if (friendEmail == currentEmail) {
            throw new Error('Do not enter your email!')
        }

        let conversation = {
            title: title,
            messages: [],
            users: [friendEmail, currentEmail],
            createdAt: new Date().toISOString()
        }

        await firebase
            .firestore()
            .collection('Conversations')
            .add(conversation)

        document.getElementById('friend-email-input').value = ''
        document.getElementById('title-input').value = ''

        console.log('added new conversation')
    }
    catch (error) {
        view.setText('title-error', error.message)
    }
    view.enable('form-add-conversation-btn')

}

controller.leaveCurrentConversation = async function () {
    // users: [email1, currentEmail]
    if (model.currentConversation) {
        let docId = model.currentConversation.id
        let currentEmail = firebase.auth().currentUser.email

        await firebase
            .firestore()
            .collection('Conversations')
            .doc(docId)
            .update({
                users: firebase.firestore.FieldValue.arrayRemove(currentEmail)
            })

        console.log('You have left a conversation')

    }

    //   delete user email --- update database
    //   update model
    //   update view 
}