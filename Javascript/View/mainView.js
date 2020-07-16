// save all UI logic ( logic giao dien nguoi dung )
const view = {
    currentComponent: null   // Màn hình đang hiện ra
};


view.showComponents = function (name) {
    view.currentComponent = name;
    switch (name) {
        case 'register': {
            let app = document.getElementById('app');
            app.innerHTML = components.register;

            let link = document.getElementById('register-link');
            link.onclick = registerLinkClickHandler;

            let form = document.getElementById('form-register');
            form.onsubmit = formRegisterSubmitHandler;

            function registerLinkClickHandler() {
                view.showComponents('logIn');
            }

            function formRegisterSubmitHandler(event) {
                event.preventDefault();  // Chan su kien mac dinh  >> Khong gui thong tin len thanh dia chi

                // 1. get info
                let registerInfo = {
                    firstname: form.firstname.value,
                    lastname: form.lastname.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value
                }
                // 2. validate info
                // oninput

                // regex  

                // document.getElementById('firstname-error').innerText = '';
                // if(registerInfo.firstname){ 
                //     view.setText('firstname-error','');
                // }else{
                //     view.setText('firstname-error','Invalid firstname!');
                // }

                let validateResult = [
                    view.validate(registerInfo.firstname, 'firstname-error', 'Invalid firstname!'),
                    view.validate(registerInfo.lastname, 'lastname-error', 'Invalid lastname!'),
                    view.validate(registerInfo.email && registerInfo.email.includes('@'),
                        'email-error',
                        'Invalid Email!'
                    ),
                    view.validate(registerInfo.password && registerInfo.password.length >= 6,
                        'password-error',
                        'Invalid password!'
                    ),
                    view.validate(registerInfo.confirmPassword
                        && registerInfo.confirmPassword.length >= 6
                        && registerInfo.password == registerInfo.confirmPassword,
                        'confirm-password-error',
                        'Invalid confirm password!'
                    )
                ]

                console.log(validateResult);

                if (allPassed(validateResult)) {
                    //3. submit info
                    controller.register(registerInfo);
                }


                // Demo


                // 3. submit info (next session)
            }
            break;
        }

        case 'logIn': {
            let app = document.getElementById('app');
            app.innerHTML = components.logIn;

            let link = document.getElementById('log-in-link');
            link.onclick = logInLinkClickHandler;

            let form = document.getElementById('form-log-in')
            form.onsubmit = formLogInSubmitHandler;

            function logInLinkClickHandler() {
                view.showComponents('register');
            }

            function formLogInSubmitHandler(event) {
                event.preventDefault();

                let logInInfo = {
                    email: form.email.value,
                    password: form.password.value
                }

                let validateResult = [
                    view.validate(logInInfo.email && logInInfo.email.includes('@'),
                        'email-error',
                        'Invalid Email!'
                    ),
                    view.validate(logInInfo.password && logInInfo.password.length >= 6,
                        'password-error',
                        'Invalid Password!'
                    )
                ]

                if (allPassed(validateResult)) {
                    controller.logIn(logInInfo);
                }


            }

           
            break;
        }
        case 'chat': {
            let app = document.getElementById('app')
            app.innerHTML = components.nav + components.chat

            controller.loadConversation()
            controller.setupDatabaseChange()     // new message coming > update message to screen

            // let userEmail = firebase.auth().currentUser.email
            // document.getElementById('user-email').innerText = userEmail;

            view.setText('user-email', firebase.auth().currentUser.email)

            let signOutBtn = document.getElementById('sign-out-btn');
            // signOutBtn.onclick = function () {
            //     firebase.auth().signOut();
            // }
            signOutBtn.onclick = () => firebase.auth().signOut()

            let formAddMessage = document.getElementById('form-add-message');
            formAddMessage.onsubmit = formAddMessageSubmitHandler


            let formAddConversation = document.getElementById('form-add-conversation')
            formAddConversation.onsubmit = formAddConversationSubmitHandler




            function formAddMessageSubmitHandler(e) {
                e.preventDefault()

                let content = formAddMessage.message.value.trim()

                if (!content) {
                    return
                }

                // Code send message
                let message = {
                    content: content.trim(),
                    owner: firebase.auth().currentUser.email,
                    createdAt: new Date().toISOString()
                }

                controller.addMessage(message)

            }


            function formAddConversationSubmitHandler(e) {
                e.preventDefault();

                let title = formAddConversation.title.value
                let friendEmail = formAddConversation.friendEmail.value

                let validateResult = [
                    view.validate(title, 'title-error', 'Title required!'),
                    view.validate(friendEmail, 'friend-email-error', 'Friend email required!')
                ]

                // console.log(title, friendEmail)

                if (allPassed(validateResult)) {
                    controller.addConversation(title, friendEmail)
                }
            }
        }
    }
}


view.setText = function (id, text) {
    document.getElementById(id).innerText = text;
}

view.validate = function (condition, idErrorTag, messageError) {
    if (condition) {
        view.setText(idErrorTag, '');
        return true;
    } else {
        view.setText(idErrorTag, messageError);
        return false;
    }
}


// Khóa nút submit cho đến khi code kiểm tra chạy xong
view.disable = function (id) {
    document.getElementById(id).setAttribute('disabled', true);
}

view.enable = function (id) {
    document.getElementById(id).removeAttribute('disabled');
}

function allPassed(validateResult) {
    for (let result of validateResult) {
        if (!result) {
            return false;
        }
    }
    return true;
}


// regex password  ( Co it nhat 1 chu hoa va 1 so)