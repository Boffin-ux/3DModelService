const checkInput = () => {
   //Calculator only allow numbers
   const inputOnlyNumbers = () => {
      const calcBlock = document.querySelector('.calc-block');
      calcBlock.addEventListener('input', event => {
         const target = event.target;
         if (target.value && (target.closest('.calc-square') ||
            target.closest('.calc-count') || target.closest('.calc-day'))) {
            target.value = target.value.replace(/\D/g, '');
         }
      });
   };
   inputOnlyNumbers();
   //checkForm for letters
   const inputOnlyString = () => {
      const footerInput = document.getElementById('form2'),
         mainInput = document.getElementById('form1'),
         popUpInput = document.getElementById('form3');
      const checkInput = (event, closeTarget) => {
         const target = event.target;
         if (target.value) {
            if (target.closest(`#form${closeTarget}-name`)) {
               target.value = target.value.replace(/[^а-яё\s]/ig, '');
            } else if (target.closest(`#form${closeTarget}-email`)) {
               target.value = target.value.replace(/[^a-z@_.!~*'-]/ig, '');
            } else if (target.closest(`#form${closeTarget}-phone`)) {
               target.value = target.value.replace(/[^0-9+]/g, '');
            } else if (target.closest(`#form${closeTarget}-message`)) {
               target.value = target.value.replace(/[^а-яё\s0-9.?!,:;()""-]/g, '');
            }
         } else {
            return;
         }
      };
      const focusOut = (event, closeTarget) => {
         const target = event.target;
         if (target.value) {
            target.value = target.value.replace(/(^[-\s]*|[-\s]*$)/g, '').replace(/-{2,}/g, '-').
               replace(/\s{2,}/g, ' ');

            if (target.closest(`#form${closeTarget}-name`)) {
               const inputNames = target.value.split(' ');
               target.value = inputNames.map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');
            }
         } else {
            return;
         }
      };

      footerInput.addEventListener('input', event => {
         checkInput(event, '2');
      });
      footerInput.addEventListener('blur', event => {
         focusOut(event, '2');
      }, true);
      mainInput.addEventListener('input', event => {
         checkInput(event, '1');
      });
      mainInput.addEventListener('blur', event => {
         focusOut(event, '1');
      }, true);
      popUpInput.addEventListener('input', event => {
         checkInput(event, '3');
      });
   };
   inputOnlyString();
};

export default checkInput;