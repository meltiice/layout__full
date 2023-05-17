import '../scss/style.scss';
import {readMore1, readMore2, readMore3} from './reedmoreObjects.js';
import {maskOptions, maskOptions2} from './imaskObjects.js';
import {menu, feedbackRequest, feedbackCall} from './openwindowObjects.js';
import {readmore} from './readmore.js';
import {swiper} from './swiper';
import {openWindow} from './openwindow';

var element = document.querySelector("#phone1");
var mask = new IMask(element, maskOptions);
var element2 = document.querySelector("#email");
var mask2 = new IMask(element2, maskOptions2);
var element3 = document.querySelector("#phone2");
var mask3 = new IMask(element3, maskOptions);

var readMoreParagrafListener = readmore(readMore1);
var readMoreBrandsListener = readmore(readMore2);
var readMoreDevicesListener = readmore(readMore3);

let menuListener = openWindow(menu);
let feedbackRequestListener = openWindow(feedbackRequest);
let feedbackCallListener = openWindow(feedbackCall);
