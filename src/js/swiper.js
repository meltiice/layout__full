const swiper = new Swiper('.swiper-container', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   width: 256,
   allowTouchMove: true,
   breakpoints: {
    768: {
      allowTouchMove: false
    }
   }
})
export {swiper};