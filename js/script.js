window.addEventListener('DOMContentLoaded', () => {
   // eslint-disable-next-line strict
   'use strict';

   //Timer
   const countTimer = deadline => {

      const timerHours = document.querySelector('#timer-hours'),
         timerMinutes = document.querySelector('#timer-minutes'),
         timerSeconds = document.querySelector('#timer-seconds');

      const getTimeRemaining = () => {
         const dateStop = new Date(deadline),
            dateNow = new Date().getTime(),
            timerRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timerRemaining % 60),
            minutes = Math.floor((timerRemaining / 60) % 60),
            hours = Math.floor(timerRemaining / 60 / 60);
         // day = Math.floor(timerRemaining / 60 / 60 / 24);
         return { timerRemaining, hours, minutes, seconds };
      };
      const addZero = num => {
         if (num >= 0 && num <= 9) {
            return `0${num}`;
         } else {
            return num;
         }
      };
      const updateClock = () => {
         const timer = getTimeRemaining();
         if (timer.timerRemaining > 0) {
            timerHours.textContent = addZero(timer.hours);
            timerMinutes.textContent = addZero(timer.minutes);
            timerSeconds.textContent = addZero(timer.seconds);
         } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(idInterval);
         }
      };
      const idInterval = setInterval(updateClock, 1000);
      updateClock();
   };
   countTimer('19 july 2021');

   //Menu
   const toggleMenu = () => {

      const menu = document.querySelector('menu');

      document.body.addEventListener('click', event => {
         //event.preventDefault();
         const target = event.target;
         if (target.closest('.menu')) {
            menu.classList.add('active-menu');
         } else if (target.closest('menu')) {
            if (target.matches('.close-btn') || target.closest('li')) {
               menu.classList.remove('active-menu');
            }
         } else if (!target.closest('menu')) {
            menu.classList.remove('active-menu');
         }
      });
   };
   toggleMenu();

   //popup
   const togglePopUp = () => {
      const popup = document.querySelector('.popup'),
         popupBtn = document.querySelectorAll('.popup-btn'),
         popupСontent = document.querySelector('.popup-content');

      //animationPopUp
      let PopUpInterval,
         animate = false,
         count = 0;

      const PopUpAnimate = () => {
         const width = document.documentElement.clientWidth; //получаем ширину страницы
         PopUpInterval = requestAnimationFrame(PopUpAnimate);
         count += 1;
         if (count < 38 && width >= 768) {
            popupСontent.style.left = `${count}%`;
         } else {
            cancelAnimationFrame(PopUpInterval);
         }
      };
      // Отобразить PopUp и запустить анимацию
      popupBtn.forEach(elem => {
         elem.addEventListener('click', () => {
            popup.style.display = 'block';
            if (!animate) {
               PopUpInterval = requestAnimationFrame(PopUpAnimate);
               animate = true;
            } else {
               cancelAnimationFrame(PopUpInterval);
            }
         });
      });

      popup.addEventListener('click', event => {
         let target = event.target;
         if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
            cancelAnimationFrame(PopUpInterval);
            animate = false;
            count = 0;
         } else {
            target = target.closest('.popup-content');
            if (!target) {
               popup.style.display = 'none';
               cancelAnimationFrame(PopUpInterval);
               animate = false;
               count = 0;
            }
         }
      });
   };
   togglePopUp();

   //Scroll-smooth
   const scrolled = () => {

      const menuLinks = document.querySelectorAll('menu a:not(.close-btn'),
         mainLink = document.querySelector('main > a');

      const addScroll = item => {
         const blockID = item.getAttribute('href').substr(1);

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      };

      menuLinks.forEach(elem => {
         elem.addEventListener('click', event => {
            event.preventDefault();
            addScroll(elem);
         });
      });
      mainLink.addEventListener('click', event => {
         event.preventDefault();
         addScroll(mainLink);
      });
   };
   scrolled();

   //Tabs
   const tabs = () => {
      const tabHeader = document.querySelector('.service-header'),
         tab = tabHeader.querySelectorAll('.service-header-tab'),
         tabContant = document.querySelectorAll('.service-tab');

      const toggleTabContent = index => {
         for (let i = 0; i < tabContant.length; i++) {
            if (index === i) {
               tab[i].classList.add('active');
               tabContant[i].classList.remove('d-none');
            } else {
               tab[i].classList.remove('active');
               tabContant[i].classList.add('d-none');
            }
         }
      };

      tabHeader.addEventListener('click', event => {
         let target = event.target;
         target = target.closest('.service-header-tab');

         if (target) {
            tab.forEach((item, index) => {
               if (item === target) {
                  toggleTabContent(index);
               }
            });
         }
      });
   };
   tabs();

   //slider
   const addDots = () => {
      const portfolioDots = document.querySelector('.portfolio-dots'),
         slide = document.querySelectorAll('.portfolio-item');

      for (let i = 0; i <= slide.length - 1; i++) {
         const addLi = document.createElement('li');
         addLi.classList.add('dot');
         portfolioDots.append(addLi);
         if (i === 0) {
            addLi.classList.add('dot-active');
         }
      }
   };
   addDots();

   const slider = () => {
      const slide = document.querySelectorAll('.portfolio-item'),
         dot = document.querySelectorAll('.dot'),
         slider = document.querySelector('.portfolio-content');

      let currentSlide = 0,
         interval;

      const prevSlide = (elem, index, strClass) => {
         elem[index].classList.remove(strClass);
      };
      const nextSlide = (elem, index, strClass) => {
         elem[index].classList.add(strClass);
      };
      const autoPlaySlide = () => {
         prevSlide(slide, currentSlide, 'portfolio-item-active');
         prevSlide(dot, currentSlide, 'dot-active');
         currentSlide++;
         if (currentSlide >= slide.length) {
            currentSlide = 0;
         }
         nextSlide(slide, currentSlide, 'portfolio-item-active');
         nextSlide(dot, currentSlide, 'dot-active');
      };
      const startSlide = (time = 3000) => {
         interval = setInterval(autoPlaySlide, time);
      };
      const stopSlide = () => {
         clearInterval(interval);
      };

      slider.addEventListener('click', event => {
         event.preventDefault();
         const target = event.target;

         if (!target.matches('.portfolio-btn, .dot')) {
            return;
         }
         prevSlide(slide, currentSlide, 'portfolio-item-active');
         prevSlide(dot, currentSlide, 'dot-active');

         if (target.matches('#arrow-right')) {
            currentSlide++;
         } else if (target.matches('#arrow-left')) {
            currentSlide--;
         } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
               if (elem === target) {
                  currentSlide = index;
               }
            });
         }
         if (currentSlide >= slide.length) {
            currentSlide = 0;
         }
         if (currentSlide < 0) {
            currentSlide = slide.length - 1;
         }
         nextSlide(slide, currentSlide, 'portfolio-item-active');
         nextSlide(dot, currentSlide, 'dot-active');
      });
      slider.addEventListener('mouseover', event => {
         if (event.target.matches('.portfolio-btn, .dot') ||
            event.target.matches('.dot')) {
            stopSlide();
         }
      });
      slider.addEventListener('mouseout', event => {
         if (event.target.matches('.portfolio-btn, .dot') ||
            event.target.matches('.dot')) {
            startSlide(1500);
         }
      });
      startSlide(1500);
   };
   slider();

   //Our team image
   const ourTeamPhotoData = () => {
      const command = document.getElementById('command');
      let defaultImg = '';
      const changeImg = event => {
         const target = event.target;
         if (event.type === 'mouseover' && target.closest('img')) {
            defaultImg = target.src;
            target.src = target.dataset.img;
         } else if (event.type === 'mouseout' && target.closest('img')) {
            target.src = defaultImg;
         }
      };
      command.addEventListener('mouseover', changeImg);
      command.addEventListener('mouseout', changeImg);
   };
   ourTeamPhotoData();

   //Сheck input
   const checkInput = () => {
      //Calculator only allow numbers
      const inputOnlyNumbers = () => {
         const calcBlock = document.querySelector('.calc-block');
         calcBlock.addEventListener('input', event => {
            const target = event.target;
            if (target.value && (target.closest('.calc-square') ||
               target.closest('.calc-count') || target.closest('.calc-day'))) {
               target.value = target.value.replace(/\D/g, '');
            }
         });
      };
      inputOnlyNumbers();
      //checkForm for letters
      const inputOnlyString = () => {
         const footerInput = document.getElementById('form2'),
            mainInput = document.getElementById('form1'),
            popUpInput = document.getElementById('form3');
         const checkInput = (event, closeTarget) => {
            const target = event.target;
            if (target.value) {
               if (target.closest(`#form${closeTarget}-name`)) {
                  target.value = target.value.replace(/[^а-яё\s]/ig, '');
               } else if (target.closest(`#form${closeTarget}-email`)) {
                  target.value = target.value.replace(/[^a-z@_.!~*'-]/ig, '');
               } else if (target.closest(`#form${closeTarget}-phone`)) {
                  target.value = target.value.replace(/[^0-9+]/g, '');
               } else if (target.closest(`#form${closeTarget}-message`)) {
                  target.value = target.value.replace(/[^а-яё\s0-9.?!,:;()""-]/g, '');
               }
            } else {
               return;
            }
         };
         const focusOut = (event, closeTarget) => {
            const target = event.target;
            if (target.value) {
               target.value = target.value.replace(/(^[-\s]*|[-\s]*$)/g, '').replace(/-{2,}/g, '-').
                  replace(/\s{2,}/g, ' ');

               if (target.closest(`#form${closeTarget}-name`)) {
                  const inputNames = target.value.split(' ');
                  target.value = inputNames.map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
               }
            } else {
               return;
            }
         };

         footerInput.addEventListener('input', event => {
            checkInput(event, '2');
         });
         footerInput.addEventListener('blur', event => {
            focusOut(event, '2');
         }, true);
         mainInput.addEventListener('input', event => {
            checkInput(event, '1');
         });
         mainInput.addEventListener('blur', event => {
            focusOut(event, '1');
         }, true);
         popUpInput.addEventListener('input', event => {
            checkInput(event, '3');
         });
      };
      inputOnlyString();
   };
   checkInput();

   //Calculator
   const calc = (price = 100) => {
      const calcBlock = document.querySelector('.calc-block'),
         calcType = document.querySelector('.calc-type'),
         calcSquare = document.querySelector('.calc-square'),
         calcDay = document.querySelector('.calc-day'),
         calcCount = document.querySelector('.calc-count'),
         totalValue = document.getElementById('total');
      //Calculator Animate Total
      const countSum = () => {
         let total = 0,
            countValue = 1,
            dayValue = 1,
            totalInterval,
            animate = false,
            count = 0;

         const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

         if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
         }
         if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
         } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
         }
         // Animation total sum
         const totalAnimate = () => {
            totalInterval = requestAnimationFrame(totalAnimate);
            count += total / 20;
            if (count <= total) {
               totalValue.textContent = count;
            } else {
               cancelAnimationFrame(totalInterval);
            }
         };
         if (!animate && typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
            totalInterval = requestAnimationFrame(totalAnimate);
            animate = true;
         } else {
            cancelAnimationFrame(totalInterval);
            animate = false;
            count = 0;
            totalValue.textContent = 0;
         }
      };

      calcBlock.addEventListener('change', event => {
         const target = event.target;
         if (target.matches('select') || target.matches('input')) {
            countSum();
         }
      });
   };
   calc(100);

   //send-ajax-form
   const sendForm = () => {
      const errorMessage = 'Что-то пошло не так...',
         preload = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <rect x="19" y="29.5" width="12" height="41" fill="#40b5fd">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="17.199999999999996;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="65.60000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
      </rect>
      <rect x="44" y="29.5" width="12" height="41" fill="#74c4f5">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
      </rect>
      <rect x="69" y="29.5" width="12" height="41" fill="#9dd5f7">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
      </rect>
      `,
         successMessage = 'Спасибо! Мы скоро с вами свяжемся...';

      const form = document.getElementById('form1'),
         formFooter = document.getElementById('form2'),
         formPopup = document.getElementById('form3');

      const statusMessage = document.createElement('div');
      statusMessage.style.cssText = 'font-size: 2rem;';
      statusMessage.style.color = '#fff';

      const postData = body => new Promise((resolve, reject) => {
         const request = new XMLHttpRequest();
         request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
               return;
            }
            if (request.status === 200) {
               resolve(statusMessage.textContent = successMessage);
            } else {
               reject(request.status);
            }
         });
         request.open('POST', './server.php');
         request.setRequestHeader('Content-Type', 'application/json');
         request.send(JSON.stringify(body));
      });

      const addMessageForm = (event, form) => {
         event.preventDefault();
         const inputs = form.querySelectorAll('input');
         form.appendChild(statusMessage);
         statusMessage.innerHTML = preload;
         const formData = new FormData(form),
            body = {};

         formData.forEach((val, key) => {
            body[key] = val;
         });

         postData(body)
            .then(() => {
               inputs.forEach(item => item.value = '');
            })
            .catch(error => {
               statusMessage.textContent = errorMessage;
               inputs.forEach(item => item.value = '');
               console.error(error);
            });
      };
      form.addEventListener('submit', event => addMessageForm(event, form));
      formFooter.addEventListener('submit', event => addMessageForm(event, formFooter));
      formPopup.addEventListener('submit', event => addMessageForm(event, formPopup));
   };
   sendForm();

});
