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

export default scrolled;
