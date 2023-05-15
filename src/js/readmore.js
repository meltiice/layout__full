function readmore(object) {
   object.readMore.addEventListener('click', function (e) {
      e.preventDefault();
      object.container.classList.toggle(object.classWidth);
      object.readMore.classList.toggle(object.classRotate);
      object.count++;
      if (object.count % 2 === 1) {
         object.readMore.innerHTML = object.innerToggle;
      }
      else {
         object.readMore.innerHTML = object.innerStart;
      }
   });
   return object;
 }
 export {readmore};