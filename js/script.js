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
            hours = Math.floor(timerRemaining / 60 / 60) % 24;
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

   countTimer('30 june 2021');

   //Menu
   const toggleMenu = () => {

      const btnMenu = document.querySelector('.menu'),
         menu = document.querySelector('menu'),
         closeBtn = document.querySelector('.close-btn'),
         menuItems = menu.querySelectorAll('ul>li');

      const handlerMenu = () => {
         menu.classList.toggle('active-menu');
      };

      btnMenu.addEventListener('click', handlerMenu);
      closeBtn.addEventListener('click', handlerMenu);
      menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

   };

   toggleMenu();

   //popup

   const togglePopUp = () => {
      const popup = document.querySelector('.popup'),
         popupBtn = document.querySelectorAll('.popup-btn'),
         popupClose = document.querySelector('.popup-close'),
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
      //Скрыть PopUp и отключить анимацию
      popupClose.addEventListener('click', () => {
         popup.style.display = 'none';
         cancelAnimationFrame(PopUpInterval);
         animate = false;
         count = 0;
      });


   };
   togglePopUp();


});