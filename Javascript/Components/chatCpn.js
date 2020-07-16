components.chat = `
<section class="chat-container">
    <div class="aside-left">
                <div class="list-conversations" id="list-conversations">
                </div>
                <form class ="form-add-conversation" id="form-add-conversation">
                    <div class="input-wrapper">
                        <input type="email" name="friendEmail" id="friend-email-input" placeholder="Enter your friend email">
                        <div id="friend-email-error" class="message-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="title" id="title-input" placeholder="Conversation title">
                        <div id="title-error" class="message-error"></div>
                    </div>
                    <button type="submit" class="btn-icon" id="form-add-conversation-btn">
                        <i class="fas fa-plus"></i>
                    </button>
                </form>
    </div>
<div class="current-conversation">
    <div class="list-messages" id="list-messages">
    </div>
    <form class="form-add-message" id="form-add-message">
        <div class="input-wrapper">
            <input id='message-input' type="text" name="message" placeholder="Enter your message here">
        </div>
        <button type="submit" id="add-message-btn">Send</button>
    </form>
</div>
    <div class="aside-right">
                    <div class="detail-current-conversation" id="detail-current-conversation">
                        <div class="user-email">Email1@gmail.com</div>
                        <div class="user-email">Email2@gmail.com</div>
                        <div class="created-at">2019-12-27</div>
                    </div>

                    <div class="leave-current-conversation">
                        <button class="btn-icon" id="leave-current-conversation-btn">
                            <i class="fas fa-minus"></i >
                        </button>
                    </div>
    </div>
</section>
`;