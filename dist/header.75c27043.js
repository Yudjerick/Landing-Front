parcelRequire=function(e,t,n,r){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function c(n,r){if(!t[n]){if(!e[n]){var i="function"==typeof parcelRequire&&parcelRequire;if(!r&&i)return i(n,!0);if(o)return o(n,!0);if(u&&"string"==typeof n)return u(n);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}s.resolve=function(t){return e[n][1][t]||t},s.cache={};var l=t[n]=new c.Module(n);e[n][0].call(l.exports,s,l,l.exports,this)}return t[n].exports;function s(e){return c(s.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=t,c.parent=o,c.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]};for(var a=0;a<n.length;a++)try{c(n[a])}catch(e){i||(i=e)}if(n.length){var l=c(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd&&define((function(){return l}))}if(parcelRequire=c,i)throw i;return c}({N0LX:[function(e,t,n){window.addEventListener("scroll",(function(){(function(){c||new Promise((function(e){c=new Swiper(".staff__swiper",{spaceBetween:10,slidesPerView:"auto",freeMode:!0,loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:0,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:2200}),e()}));a||new Promise((function(e){a=new Swiper(".achievements__swiperParent",{slidesPerView:"auto",spaceBetween:15,pagination:{el:".achievements__swiperPagination",clickable:!0}}),e()}))})(),l||(new Promise((function(e){for(var t=Array.from(document.getElementsByClassName("equipment__content")[0].children),n=2;n<t.length;n++)t[n].setAttribute("hidden","true");e()})),l=!0),s(u);var e=o;(e=f(e))!==o&&d(e)}),{passive:!0});var r=Array.from(document.getElementById("pageContentParent").children),i=Array.from(document.getElementById("headerElements").children),o=0,u=document.getElementById("header"),c=void 0,a=void 0,l=!1;function s(e){window.scrollY>50?e.setAttribute("scroll","true"):e.setAttribute("scroll","false")}function f(e){for(var t=0;t<r.length;t++)window.scrollY+window.innerHeight/4*3>=r[t].offsetTop&&(e=t);return e}function d(e){i[o].setAttribute("active","false"),i[e].setAttribute("active","true"),o=e}new Promise((function(e){s(u),d(f(o)),e()}))},{}]},{},["N0LX"]);