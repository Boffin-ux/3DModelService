import { disableScroll, enableScroll } from './blockScrolled';

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
            disableScroll();
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
         enableScroll();
      } else {
         target = target.closest('.popup-content');
         if (!target) {
            popup.style.display = 'none';
            cancelAnimationFrame(PopUpInterval);
            animate = false;
            count = 0;
            enableScroll();
         }
      }
   });
};

export default togglePopUp;
