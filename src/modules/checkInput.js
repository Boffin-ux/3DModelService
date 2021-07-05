import maskPhone from './maskPhone';

const checkInput = () => {
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

   const inputCheckIt = () => {
      const footerInput = document.getElementById('form2'),
         mainInput = document.getElementById('form1'),
         popUpInput = document.getElementById('form3');
      const checkInput = (event, closeTarget) => {
         const target = event.target;
         if (target.value) {
            if (target.closest(`#form${closeTarget}-name`)) {
               target.value = target.value.replace(/[^а-яё\s]/ig, '');
            } else if (target.closest(`#form${closeTarget}-email`)) {
               target.value = target.value.replace(/[^a-z0-9@_.-]/ig, '');
            } else if (target.closest(`#form${closeTarget}-phone`)) {
               maskPhone(`#form${closeTarget}-phone`);
            } else if (target.closest(`#form${closeTarget}-message`)) {
               target.value = target.value.replace(/[^а-яё\s0-9.?!,:;()""-]/g, '');
            }
         } else {
            return;
         }
      };
      const focusIn = (event, closeTarget) => {
         const target = event.target;
         if (target.closest(`#form${closeTarget}-phone`)) {
            maskPhone(`#form${closeTarget}-phone`);
         } else {
            return;
         }
      };
      const focusOut = (event, closeTarget) => {
         const target = event.target;
         if (target.value && !target.closest(`#form${closeTarget}-phone`)) {
            target.value = target.value.replace(/(^[-\s]*|[-\s]*$)/g, '').replace(/-{2,}/g, '-').
               replace(/\s{2,}/g, ' ');
         } else {
            return;
         }
      };

      footerInput.addEventListener('focus', event => {
         focusIn(event, '2');
      }, true);
      mainInput.addEventListener('focus', event => {
         focusIn(event, '1');
      }, true);
      popUpInput.addEventListener('focus', event => {
         focusIn(event, '3');
      }, true);
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
   inputCheckIt();
};

export default checkInput;
