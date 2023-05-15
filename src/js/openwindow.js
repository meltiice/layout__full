//import { sharing } from "webpack";

function openWindow (object){
   for (let button of object.open) {
      button.addEventListener('click', function (e) {
         e.preventDefault();
         object.container.classList.add(object.openClass);
      })
   }
   for (let button of object.close) {
      button.addEventListener('click', function (e) {
         e.preventDefault();
         object.container.classList.remove(object.openClass);
      })
   }
   return object;
}
export {openWindow};