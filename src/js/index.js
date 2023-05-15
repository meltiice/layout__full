import '../scss/style.scss';
import {readMore1, readMore2, readMore3} from './reedmoreObjects.js';
import {maskOptions, maskOptions2} from './imaskObjects.js';
import {menu, feedbackRequest, feedbackCall} from './openwindowObjects.js';
import {readmore} from './readmore.js';
import {swiper} from './swiper';
import {openWindow} from './openwindow';

console.log('1');
var element = document.querySelector("#phone1");
var mask = new IMask(element, maskOptions);
var element2 = document.querySelector("#email");
var mask2 = new IMask(element2, maskOptions2);
var element3 = document.querySelector("#phone2");
var mask3 = new IMask(element3, maskOptions);
console.log('2');
var readMoreParagrafListener = readmore(readMore1);
var readMoreBrandsListener = readmore(readMore2);
var readMoreDevicesListener = readmore(readMore3);
console.log('3');
let menuListener = openWindow(menu);
let feedbackRequestListener = openWindow(feedbackRequest);
let feedbackCallListener = openWindow(feedbackCall);
console.log('4');
console.log(25);
/*let div = document.querySelector( '#feedback-request');
document.addEventListener( 'click', (e) => {
	let withinBoundaries = e.composedPath().includes(div);
 
	if ( ! withinBoundaries ) {
		div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
	}
})/*
if(window.innerWidth <= 768) {
   swiper.enabled = true;
}
else {
   swiper.enabled = false;
   //swiper.disable();
   //swiper.allowSlideNext = false;
}
console.log("Swiper done");*/