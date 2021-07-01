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

export default countTimer;
