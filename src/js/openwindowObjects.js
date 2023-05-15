let menu = {
   area: '#menu',
   areaQuery: document.querySelector("#menu"),
   container: '#menu-container',
   open: [document.querySelector("#burger")],
   close: [document.querySelector('#burger-close')],
   openClass: 'menu--open'
}

let feedbackRequest = {
   area: '#feedback-request',
   areaQuery: document.querySelector('#feedback-request'),
   container: '#feedback-request-container',
   open: [document.querySelector('#button-request'), document.querySelector('#header__message')],
   close: [document.querySelector('#request-close-button')],
   openClass: 'feedback--active'
}

let feedbackCall = {
   area: '#feedback-call',
   areaQuery: document.querySelector('#feedback-call'),
   container: '#feedback-call-container',
   open: [document.querySelector('#button-call'), document.querySelector('#header__call')],
   close: [document.querySelector('#call-close-button')],
   openClass: 'feedback--active'
}
 export {menu, feedbackRequest, feedbackCall};