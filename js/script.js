window.addEventListener('DOMContentLoaded', function () {
   'use strict';

   //Timer
   function countTimer(deadline) {

      const timerHours = document.querySelector('#timer-hours'),
         timerMinutes = document.querySelector('#timer-minutes'),
         timerSeconds = document.querySelector('#timer-seconds');

      function getTimeRemaining() {
         const dateStop = new Date(deadline),
            dateNow = new Date().getTime(),
            timerRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timerRemaining % 60),
            minutes = Math.floor((timerRemaining / 60) % 60),
            hours = Math.floor(timerRemaining / 60 / 60) % 24;
         // day = Math.floor(timerRemaining / 60 / 60 / 24);
         return { hours, minutes, seconds }
      }

      timerHours.textContent = hours;
      timerMinutes.textContent = minutes;
      timerSeconds.textContent = seconds;

   }

   // countTimer();
   setInterval(countTimer, 1000, '20 june 2021');

});