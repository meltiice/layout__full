import '../scss/style.scss';

console.log('Works!');
var count = 0;
var readmore = document.querySelector("#readmore");
var logos = document.querySelector("#logos");
console.log('Works2!');
readmore.addEventListener('click', function (e) {
   e.preventDefault();
   logos.classList.toggle('open-content--show');
   readmore.classList.toggle('read-more-rotate');
   count++;
   if (count % 2 === 1) {
      readmore.innerHTML = "Скрыть";
   }
   else {
      readmore.innerHTML = "Показать всё";
   }
});
console.log('Works3!');
const swiper = new Swiper('.swiper-container', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   enabled: true,
   width: 256
});
console.log('Works4!');

console.log(window.innerWidth); 
if(window.innerWidth <= 768) {
   swiper.enable();
}
else {
   swiper.disable();
}
console.log("Swiper done");

