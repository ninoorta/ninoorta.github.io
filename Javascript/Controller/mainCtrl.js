//  save all business logic
const controller = {};

// -----------------------------------------------------------------------------------------------
// async function demoQueryDatabase() {
//     // common format: firebase.firestore().collection('name').{...}.command()

//     // 1. read      .get()
//     // getMany
//     let result = await firebase
//         .firestore()
//         .collection('Conversations')
//         // .where('users','array-contains', firebase.auth().currentUser.email)
//         .where('title', '==', 'First Conversation')
//         .get()
//     console.log("result get many", transformDocs(result.docs))

//     // getOne
//     let id = 'WVKQkOyBAR8oyErVw6rI'
//     let result2 = await firebase
//         .firestore()
//         .collection('Conversations')
//         .doc(id)
//         .get()

//     console.log("result get one", transformDoc(result2))
//     // 2. create    .add()
//     // let data = {
//     //     users: ["email1", "email2"],
//     //     messages: [],
//     //     title: "Demo conversation",
//     //     createdAt: new Date().toISOString()
//     // }

//     // let result3 = await firebase
//     // .firestore()
//     // .collection('Conversations')
//     // .add(data)
//     // console.log("result add", result3.id)

//     // RealTime update  on Snapshot90
//     // 3. update    .update()
//     let id2 = "9SoiovjcFkguPyr0t6X3"
//     let result4 = await firebase
//         .firestore()
//         .collection('Conversations')
//         .doc(id2)
//         .update({
//             // title: 'Updated title',
//             // test: 123456789,
//             users: firebase.firestore.FieldValue.arrayUnion('user3')
//         })
//     console.log("result update")
//     // 4. delete    .remove()
//     let id3 = 'veHsk3Z0ONoTvqK1XjsF'
//     await firebase
//         .firestore()
//         .collection('Conversations')
//         .doc(id3)
//         .delete()
//     console.log("result deleted")
// }

function transformDocs(docs) {
    let datas = []
    for (let doc of docs) {
        let data = doc.data()
        data.id = doc.id
        datas.push(data)
    }
    return datas
}

function transformDoc(doc) {
    let data = doc.data()
    data.id = doc.id
    return data
}