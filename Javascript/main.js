// // 1. event
// // window.onload = doSomething; 
// // window.onclick = doSomething;

// // function doSomething(event){
// //     console.log(event);
// // }

// // 2. DOM

// window.onload = init  // Chỉ xử lý một hàm
// // window.addEventListener('load',init); Thêm nhiều hàm xử lý vào cùng một sự kiện

// function init(){
//     // let forms = document.getElementsByClassName('form-header')
//     // // console.log(forms);  // [.form-header]
//     // let form = forms[0];


//     // form.onclick = function(){
//     //     console.log('click')
//     // }

//     // form.style.background = 'red';

//     // form.innerHTML = "New content";
// }

window.onload = init;

function init() {
   firebase.auth().onAuthStateChanged(function (user) {    // event nhớ trạng thái thay đổi 
      if (view.currentComponent == 'register') {
         return
      }
      if (user && user.emailVerified) {
         view.showComponents('chat')
      } else {
         if (view.currentComponent != 'logIn') {
            view.showComponents('register')
         }
      }
   })
}