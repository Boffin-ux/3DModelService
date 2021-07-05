(()=>{"use strict";var e=function(){document.body.style.cssText="",window.scroll({top:document.body.dataset.scrollY})};function t(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==o.return||o.return()}finally{if(l)throw c}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}const o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",o=document.querySelectorAll(e);function r(e){var t=e.keyCode,o=n,r=o.replace(/\D/g,""),a=this.value.replace(/\D/g,""),c=0,i=o.replace(/[_\d]/g,(function(e){return c<a.length?a.charAt(c++)||r.charAt(c):e}));-1!==(c=i.indexOf("_"))&&(i=i.slice(0,c));var l=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<8||t>47&&t<58)&&(this.value=i),"blur"===e.type&&this.value.length<8&&(this.value="")}var a,c=t(o);try{for(c.s();!(a=c.n()).done;){var i=a.value;i.addEventListener("input",r),i.addEventListener("focus",r),i.addEventListener("blur",r)}}catch(e){c.e(e)}finally{c.f()}};var r,a,c,i,l,u,s,d,m,f,v,p,h,y,g,E,b,w,x,L,S,q,k,A,I,C,B,_,D,M,T,F,R,$,N,z,Y,j,O;document.querySelector(".calc-block").addEventListener("input",(function(e){var t=e.target;t.value&&(t.closest(".calc-square")||t.closest(".calc-count")||t.closest(".calc-day"))&&(t.value=t.value.replace(/\D/g,""))})),$=document.getElementById("form2"),N=document.getElementById("form1"),z=document.getElementById("form3"),Y=function(e,t){var n=e.target;n.value&&(n.closest("#form".concat(t,"-name"))?n.value=n.value.replace(/[^а-яё\s]/gi,""):n.closest("#form".concat(t,"-email"))?n.value=n.value.replace(/[^a-z0-9@_.-]/gi,""):n.closest("#form".concat(t,"-phone"))?o("#form".concat(t,"-phone")):n.closest("#form".concat(t,"-message"))&&(n.value=n.value.replace(/[^а-яё\s0-9.?!,:;()""-]/g,"")))},j=function(e,t){e.target.closest("#form".concat(t,"-phone"))&&o("#form".concat(t,"-phone"))},O=function(e,t){var n=e.target;n.value&&!n.closest("#form".concat(t,"-phone"))&&(n.value=n.value.replace(/(^[-\s]*|[-\s]*$)/g,"").replace(/-{2,}/g,"-").replace(/\s{2,}/g," "))},$.addEventListener("focus",(function(e){j(e,"2")}),!0),N.addEventListener("focus",(function(e){j(e,"1")}),!0),z.addEventListener("focus",(function(e){j(e,"3")}),!0),$.addEventListener("input",(function(e){Y(e,"2")})),$.addEventListener("blur",(function(e){O(e,"2")}),!0),N.addEventListener("input",(function(e){Y(e,"1")})),N.addEventListener("blur",(function(e){O(e,"1")}),!0),z.addEventListener("input",(function(e){Y(e,"3")})),B="19 july 2021",_=document.querySelector("#timer-hours"),D=document.querySelector("#timer-minutes"),M=document.querySelector("#timer-seconds"),T=function(e){return e>=0&&e<=9?"0".concat(e):e},F=function(){var e,t,n,o=(e=(new Date(B)-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),{timerRemaining:e,hours:Math.floor(e/60/60),minutes:n,seconds:t});o.timerRemaining>0?(_.textContent=T(o.hours),D.textContent=T(o.minutes),M.textContent=T(o.seconds)):(_.textContent="00",D.textContent="00",M.textContent="00",clearInterval(R))},R=setInterval(F,1e3),F(),C=document.querySelector("menu"),document.body.addEventListener("click",(function(e){var t=e.target;t.closest(".menu")?C.classList.add("active-menu"):t.closest("menu")?(t.matches(".close-btn")||t.closest("li"))&&C.classList.remove("active-menu"):t.closest("menu")||C.classList.remove("active-menu")})),L=document.querySelector(".popup"),S=document.querySelectorAll(".popup-btn"),q=document.querySelector(".popup-content"),k=!1,A=0,I=function e(){var t=document.documentElement.clientWidth;x=requestAnimationFrame(e),(A+=1)<38&&t>=768?q.style.left="".concat(A,"%"):cancelAnimationFrame(x)},S.forEach((function(e){e.addEventListener("click",(function(){L.style.display="block",k?cancelAnimationFrame(x):(x=requestAnimationFrame(I),k=!0,function(){document.body.dataset.scrollY=window.scrollY;var e=window.innerWidth-document.body.offsetWidth;document.body.style.cssText="\n      position: fixed;\n      top: -".concat(window.scrollY,"px;\n      left: 0;\n      width: 100%;\n      overflow: hidden;\n      height: 100vh;\n      padding-right: ").concat(e,"px;\n   ")}())}))})),L.addEventListener("click",(function(t){var n=t.target;n.classList.contains("popup-close")?(L.style.display="none",cancelAnimationFrame(x),k=!1,A=0,e()):(n=n.closest(".popup-content"))||(L.style.display="none",cancelAnimationFrame(x),k=!1,A=0,e())})),E=document.querySelectorAll("menu a:not(.close-btn"),b=document.querySelector("main > a"),w=function(e){var t=e.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})},E.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),w(e)}))})),b.addEventListener("click",(function(e){e.preventDefault(),w(b)})),h=document.querySelector(".service-header"),y=h.querySelectorAll(".service-header-tab"),g=document.querySelectorAll(".service-tab"),h.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&y.forEach((function(e,n){e===t&&function(e){for(var t=0;t<g.length;t++)e===t?(y[t].classList.add("active"),g[t].classList.remove("d-none")):(y[t].classList.remove("active"),g[t].classList.add("d-none"))}(n)}))})),function(){for(var e=document.querySelector(".portfolio-dots"),t=document.querySelectorAll(".portfolio-item"),n=0;n<=t.length-1;n++){var o=document.createElement("li");o.classList.add("dot"),e.append(o),0===n&&o.classList.add("dot-active")}}(),l=document.querySelectorAll(".portfolio-item"),u=document.querySelectorAll(".dot"),s=document.querySelector(".portfolio-content"),d=0,m=function(e,t,n){e[t].classList.remove(n)},f=function(e,t,n){e[t].classList.add(n)},v=function(){m(l,d,"portfolio-item-active"),m(u,d,"dot-active"),++d>=l.length&&(d=0),f(l,d,"portfolio-item-active"),f(u,d,"dot-active")},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;i=setInterval(v,e)},s.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(m(l,d,"portfolio-item-active"),m(u,d,"dot-active"),t.matches("#arrow-right")?d++:t.matches("#arrow-left")?d--:t.matches(".dot")&&u.forEach((function(e,n){e===t&&(d=n)})),d>=l.length&&(d=0),d<0&&(d=l.length-1),f(l,d,"portfolio-item-active"),f(u,d,"dot-active"))})),s.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn, .dot")||e.target.matches(".dot"))&&clearInterval(i)})),s.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn, .dot")||e.target.matches(".dot"))&&p(1500)})),p(1500),r=document.getElementById("command"),a="",c=function(e){var t=e.target;"mouseover"===e.type&&t.closest("img")?(a=t.src,t.src=t.dataset.img):"mouseout"===e.type&&t.closest("img")&&(t.src=a)},r.addEventListener("mouseover",c),r.addEventListener("mouseout",c),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),c=document.getElementById("total"),i=function(){var t,i=0,l=1,u=1,s=!1,d=0,m=n.options[n.selectedIndex].value,f=+o.value;a.value>1&&(l+=(a.value-1)/10),r.value&&r.value<5?u*=2:r.value&&r.value<10&&(u*=1.5),!s&&m&&f?(i=e*m*f*l*u,t=requestAnimationFrame((function e(){t=requestAnimationFrame(e),(d+=i/20)<=i?c.textContent=d:cancelAnimationFrame(t)})),s=!0):(cancelAnimationFrame(t),s=!1,d=0,c.textContent=0)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}(100),function(){var e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),o=document.createElement("div");o.style.cssText="font-size: 2rem;",o.style.color="#fff";var r=function(e,t){e.preventDefault();var n,r=t.querySelectorAll("input");t.appendChild(o),o.innerHTML='\n      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n      <rect x="19" y="29.5" width="12" height="41" fill="#40b5fd">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="17.199999999999996;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="65.60000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>\n      </rect>\n      <rect x="44" y="29.5" width="12" height="41" fill="#74c4f5">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>\n      </rect>\n      <rect x="69" y="29.5" width="12" height="41" fill="#9dd5f7">\n         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>\n         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" \n         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>\n      </rect>\n      ',(n=new FormData(t),fetch("./server.php",{method:"POST",body:n})).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent="Спасибо! Мы скоро с вами свяжемся...",r.forEach((function(e){return e.value=""}))})).catch((function(e){o.textContent="Что-то пошло не так...",r.forEach((function(e){return e.value=""})),console.error(e)}))},a=function(e,t){return{email:new RegExp("^([a-z0-9-_.]{2,30}@[a-z]{2,10}.[a-z]{2,5})?$","i"),phone:new RegExp("^[0-9+() -]{8,18}$","i"),name:new RegExp("^[а-яё ]{2,}$","i"),message:new RegExp("[а-яё0-9.,:!?; -]","ig")}[t].test(e)},c=function(e,t,n){return e.value&&a(e.value,"phone")?t.value&&a(t.value,"name")?n.value&&a(n.value,"email")?(e.style.border="",t.style.border="",n.style.border="",!0):(n.style.border="2px solid red",!1):(t.style.border="2px solid red",!1):(e.style.border="2px solid red",!1)};e.addEventListener("submit",(function(t){var n=document.getElementById("form1-name"),a=document.getElementById("form1-email"),i=document.getElementById("form1-phone");c(i,n,a)?r(t,e):(e.appendChild(o),o.textContent="Введите корректное значение!",t.preventDefault())})),t.addEventListener("submit",(function(e){var n=document.getElementById("form2-name"),a=document.getElementById("form2-email"),i=document.getElementById("form2-phone");c(i,n,a)?r(e,t):(t.appendChild(o),o.textContent="Введите корректное значение!",e.preventDefault())})),n.addEventListener("submit",(function(e){var t=document.getElementById("form3-name"),a=document.getElementById("form3-email"),i=document.getElementById("form3-phone");c(i,t,a)?r(e,n):(n.appendChild(o),o.textContent="Введите корректное значение!",e.preventDefault())}))}()})();