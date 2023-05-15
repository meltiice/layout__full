/*READMORE*/
let readMore1 = {
   readMore: document.querySelector("#readmore-screen1"), 
   container: document.querySelector("#paragraf1"), 
   count: 0, 
   innerStart: "Читать далее", 
   innerToggle: "Скрыть", 
   classWidth: 'screen1--read', 
   classRotate: 'read-more--rotate'
}
let readMore2 = {
   readMore: document.querySelector("#readmore-screen2"), 
   container: document.querySelector("#logos2"), 
   count: 0, 
   innerStart: "Показать всё", 
   innerToggle: "Скрыть", 
   classWidth: 'logos--read', 
   classRotate: 'read-more--rotate'
}
let readMore3 = {
   readMore: document.querySelector("#readmore-screen3"), 
   container: document.querySelector("#logos3"), 
   count: 0, 
   innerStart: "Показать всё", 
   innerToggle: "Скрыть", 
   classWidth: 'logos--read', 
   classRotate: 'read-more--rotate'
}

export {readMore1, readMore2, readMore3};