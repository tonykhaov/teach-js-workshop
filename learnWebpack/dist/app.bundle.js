!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var n=t(1),o=t.n(n);console.log("is 3 odd?",o()(3)),console.log("is 10 odd?",o()(10)),console.log("films",["Forrest Gump","The Big Short","Scarface","The Green Mile"]),console.log("tomHanksFilms",["Forrest Gump","The Green Mile"])},function(e,r,t){"use strict";
/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */const n=t(2);e.exports=function(e){const r=Math.abs(e);if(!n(r))throw new TypeError("expected a number");if(!Number.isInteger(r))throw new Error("expected an integer");if(!Number.isSafeInteger(r))throw new Error("value exceeds maximum safe integer");return r%2==1}},function(e,r,t){"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */e.exports=function(e){var r=+e;return r-r==0&&(r===e||"string"==typeof e&&(0!==r||""!==e.trim()))}}]);