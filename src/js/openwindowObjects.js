let menu = {
   container: document.querySelector("#menu"),
   open: [document.querySelector("#burger")],
   close: [document.querySelector('#burger-close')],
   openClass: 'menu__open'
}

let feedbackRequest = {
   container: document.querySelector('#feedback-request'),
   open: [document.querySelector('#button-request'), document.querySelector('#header__message')],
   close: [document.querySelector('#request-close-button')],
   openClass: 'feedback--active'
}

let feedbackCall = {
   container: document.querySelector('#feedback-call'),
   open: [document.querySelector('#button-call'), document.querySelector('#header__call')],
   close: [document.querySelector('#call-close-button')],
   openClass: 'feedback--active'
}
 export {menu, feedbackRequest, feedbackCall};