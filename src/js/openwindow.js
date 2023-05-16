function openWindow (object){
   window.addEventListener('click', e => {
      let target = e.target 
      if (!target.closest(object.container) && target.closest(object.area)) 
         {
            object.areaQuery.classList.remove(object.openClass);
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