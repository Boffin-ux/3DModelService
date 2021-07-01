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

export default ourTeamPhotoData;