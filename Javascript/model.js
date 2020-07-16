// save all datas
const model = {
    conversations: null,  // tất cả cuộc hội thoại của người dùng tham gia
    currentConversation: null,  // cuộc hội thoại người dùng đang chọn

};

model.saveConversations = function (conversations) {
    model.conversations = conversations;
}

model.saveCurrentConversation = function (conversation) {
    model.currentConversation = conversation;
}

model.updateConversation = function (conversation) {
    // 1. if conversation not yet exists in model >> add to model
    // 2. if conversation already exists in model.conversations >> replace old by new 
    let existedIndex = model.conversations.findIndex(function (c) {
        return c.id == conversation.id
    })
    if (existedIndex >= 0) {
        model.conversations[existedIndex] = conversation
    } else {
        model.conversations.unshift(conversation)      /*vất vào đầu mảng*/
    }
}

model.removeConversation = function (conversation) {
    // conversations = [{ id : 1}, { id : 2}, { id : 3}]
    // conversation { id :  2}

    if (model.conversations) {
        let index = model.conversations.findIndex(function (element) {
            return element.id == conversation.id
        })

        if (index >= 0) {
            model.conversations.splice(index, 1)
        }
    }


}

model.isCurrentConversation = function (conversation) {
    return model.currentConversation
        && model.currentConversation.id == conversation.id
}

model.hasMoreConversation = function () {
    return model.conversations.length
}

