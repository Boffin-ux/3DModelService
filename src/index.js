// eslint-disable-next-line strict
'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import scrolled from './modules/scrolled';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import ourTeamPhotoData from './modules/ourTeamPhotoData';
import checkInput from './modules/checkInput';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import SliderCarusel from './modules/sliderCarusel';

//Сheck input
checkInput();
//Timer
countTimer('07 july 2021');
//Menu
toggleMenu();
//popup
togglePopUp();
//Scroll-smooth
scrolled();
//Tabs
tabs();
//slider
addDots();
slider();
//Our team image
ourTeamPhotoData();
//Calculator
calc(100);
//send-ajax-form
sendForm();
// sliderCarusel
const carousel = new SliderCarusel({
   main: '.companies-wrapper',
   wrap: '.companies-hor',

   slidersToShow: 4,
   infinity: true,

   responsive: [{
      breakpoint: 1024,
      slidersToShow: 3
   },
   {
      breakpoint: 768,
      slidersToShow: 2
   },
   {
      breakpoint: 576,
      slidersToShow: 1
   },
   ]
});
carousel.init();

