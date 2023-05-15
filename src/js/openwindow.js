//import { sharing } from "webpack";

function openWindow (object){
   window.addEventListener('click', e => { // при клике в любом месте окна браузера
      let target = e.target // находим элемент, на котором был клик
      if (!target.closest(object.container) && target.closest(object.area)) 
         { // если этот элемент или его родительские элементы не окно навигации и не кнопка
            object.areaQuery.classList.remove(object.openClass) // то закрываем окно навигации, удаляя активный класс
         }
   })
   for (let button of object.open) {
      button.addEventListener('click', function (e) {
         e.preventDefault();
         object.areaQuery.classList.add(object.openClass);
      })
   }
   for (let button of object.close) {
      button.addEventListener('click', function (e) {
         e.preventDefault();
         object.areaQuery.classList.remove(object.openClass);
      })
   }
   return object;
}
export {openWindow};