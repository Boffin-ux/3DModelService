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
         menu = document.querySelector('menu');

      document.body.addEventListener('click', event => {
         event.preventDefault();
         const target = event.target;
         if (target === btnMenu || target.parentNode === btnMenu) {
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

      const addScroll = (item) => {
         const blockID = item.getAttribute('href').substr(1);

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      };

      menuLinks.forEach(elem => {
         elem.addEventListener('click', (event) => {
            event.preventDefault();
            addScroll(elem);
         });
      });
      mainLink.addEventListener('click', (event) => {
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

      for (let i = 0; i <= slide.length; i++) {
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
         let target = event.target;

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
});

