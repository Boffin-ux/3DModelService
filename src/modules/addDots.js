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

export default addDots;