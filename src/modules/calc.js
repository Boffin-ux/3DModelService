const calc = (price = 100) => {
   const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');
   //Calculator Animate Total
   const countSum = () => {
      let total = 0,
         countValue = 1,
         dayValue = 1,
         totalInterval,
         animate = false,
         count = 0;

      const typeValue = calcType.options[calcType.selectedIndex].value,
         squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
         countValue += (calcCount.value - 1) / 10;
      }
      if (calcDay.value && calcDay.value < 5) {
         dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
         dayValue *= 1.5;
      }
      // Animation total sum
      const totalAnimate = () => {
         totalInterval = requestAnimationFrame(totalAnimate);
         count += total / 20;
         if (count <= total) {
            totalValue.textContent = Math.round(count);
         } else {
            cancelAnimationFrame(totalInterval);
         }
      };
      if (!animate && typeValue && squareValue) {
         total = price * typeValue * squareValue * countValue * dayValue;
         totalInterval = requestAnimationFrame(totalAnimate);
         animate = true;
      } else {
         cancelAnimationFrame(totalInterval);
         animate = false;
         count = 0;
         totalValue.textContent = 0;
         calcSquare.value = '';
         calcDay.value = '';
         calcCount.value = '';
      }
   };

   calcBlock.addEventListener('change', event => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')) {
         countSum();
      }
   });
};

export default calc;
