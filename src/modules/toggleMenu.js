const toggleMenu = () => {

   const menu = document.querySelector('menu');

   document.body.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('.menu')) {
         menu.classList.add('active-menu');
      } else if (target.closest('menu')) {
         if (target.matches('.close-btn') || target.closest('a')) {
            event.preventDefault();
            menu.classList.remove('active-menu');
         }
      } else if (!target.matches('.active-menu')) {
         menu.classList.remove('active-menu');
      }
   });
};

export default toggleMenu;
