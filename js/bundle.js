!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(2)},function(e,r,t){},function(e,r,t){"use strict";t.r(r);t(1);var n={readMore:document.querySelector("#readmore-screen1"),container:document.querySelector("#paragraf1"),count:0,innerStart:"Читать далее",innerToggle:"Скрыть",classWidth:"screen1--read",classRotate:"read-more--rotate"},o={readMore:document.querySelector("#readmore-screen2"),container:document.querySelector("#logos2"),count:0,innerStart:"Показать всё",innerToggle:"Скрыть",classWidth:"logos--read",classRotate:"read-more--rotate"},a={readMore:document.querySelector("#readmore-screen3"),container:document.querySelector("#logos3"),count:0,innerStart:"Показать всё",innerToggle:"Скрыть",classWidth:"logos--read--second-swiper",classRotate:"read-more--rotate"},c={mask:"+7(000)000-00-00",lazy:!0},u={area:"#menu",areaQuery:document.querySelector("#menu"),container:"#menu-container",open:[document.querySelector("#burger")],close:[document.querySelector("#burger-close")],openClass:"menu--open"},l={area:"#feedback-request",areaQuery:document.querySelector("#feedback-request"),container:"#feedback-request-container",open:[document.querySelector("#button-request"),document.querySelector("#header__message")],close:[document.querySelector("#request-close-button")],openClass:"feedback--active"},i={area:"#feedback-call",areaQuery:document.querySelector("#feedback-call"),container:"#feedback-call-container",open:[document.querySelector("#button-call"),document.querySelector("#header__call")],close:[document.querySelector("#call-close-button")],openClass:"feedback--active"};function s(e){return e.readMore.addEventListener("click",(function(r){r.preventDefault(),e.container.classList.toggle(e.classWidth),e.readMore.classList.toggle(e.classRotate),e.count++,e.count%2==1?e.readMore.innerHTML=e.innerToggle:e.readMore.innerHTML=e.innerStart})),e}new Swiper(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0},width:256,allowTouchMove:!0,breakpoints:{768:{allowTouchMove:!1}}});function d(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,r){if(!e)return;if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,r)}(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function y(e){window.addEventListener("click",(function(r){var t=r.target;!t.closest(e.container)&&t.closest(e.area)&&e.areaQuery.classList.remove(e.openClass)}));var r,t=d(e.open);try{for(t.s();!(r=t.n()).done;){r.value.addEventListener("click",(function(r){r.preventDefault(),e.areaQuery.classList.add(e.openClass)}))}}catch(e){t.e(e)}finally{t.f()}var n,o=d(e.close);try{for(o.s();!(n=o.n()).done;){n.value.addEventListener("click",(function(r){r.preventDefault(),e.areaQuery.classList.remove(e.openClass)}))}}catch(e){o.e(e)}finally{o.f()}return e}var m=document.querySelector("#phone1"),p=(new IMask(m,c),document.querySelector("#email")),b=(new IMask(p,{mask:function(e){return!!/^[a-z0-9_\.-]+$/.test(e)||(!!/^[a-z0-9_\.-]+@$/.test(e)||(!!/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(e)||(!!/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(e)||(!!/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(e)||(!!/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(e)||!!/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(e))))))},lazy:!0}),document.querySelector("#phone2"));new IMask(b,c),s(n),s(o),s(a),y(u),y(l),y(i)}]);
//# sourceMappingURL=bundle.js.map