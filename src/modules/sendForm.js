const sendForm = () => {
   const errorMessage = 'Что-то пошло не так...',
      preload = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <rect x="19" y="29.5" width="12" height="41" fill="#40b5fd">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="17.199999999999996;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="65.60000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
      </rect>
      <rect x="44" y="29.5" width="12" height="41" fill="#74c4f5">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
      </rect>
      <rect x="69" y="29.5" width="12" height="41" fill="#9dd5f7">
         <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="20.274999999999995;29.5;29.5" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
         <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" 
         values="59.45000000000001;41;41" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
      </rect>
      `,
      successMessage = 'Спасибо! Мы скоро с вами свяжемся...';

   const form = document.getElementById('form1'),
      formFooter = document.getElementById('form2'),
      formPopup = document.getElementById('form3');

   const statusMessage = document.createElement('div');
   statusMessage.style.cssText = 'font-size: 2rem;';
   statusMessage.style.color = '#fff';

   const postData = formData => fetch('./server.php', {
      method: 'POST',
      body: formData,
   });

   const addMessageForm = (event, form) => {
      event.preventDefault();
      const inputs = form.querySelectorAll('input');
      form.appendChild(statusMessage);
      statusMessage.innerHTML = preload;
      const formData = new FormData(form);

      postData(formData)
         .then(response => {
            if (response.status !== 200) {
               throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
            inputs.forEach(item => item.value = '');
         })
         .catch(error => {
            statusMessage.textContent = errorMessage;
            inputs.forEach(item => item.value = '');
            console.error(error);
         });
   };

   const checkValid = (str, pattern) => {
      const patterns = {
         email: new RegExp('^([a-z0-9\-_.]{2,30}@[a-z]{2,10}\.[a-z]{2,5})?$', 'i'),
         phone: new RegExp('^[0-9+() -]{8,18}$', 'i'),
         name: new RegExp('^[а-яё ]{2,}$', 'i'),
         message: new RegExp('[а-яё0-9.,:!?; \-]', 'ig'),
      };
      return patterns[pattern].test(str);
   };

   const validInfo = (formPhone, formName, formEmail) => {
      if (!formPhone.value || !checkValid(formPhone.value, 'phone')) {
         formPhone.style.border = '2px solid red';
         return false;
      } else if (!formName.value || !checkValid(formName.value, 'name')) {
         formName.style.border = '2px solid red';
         return false;
      } else if (!formEmail.value || !checkValid(formEmail.value, 'email')) {
         formEmail.style.border = '2px solid red';
         return false;
      } else {
         formPhone.style.border = '';
         formName.style.border = '';
         formEmail.style.border = '';
         return true;
      }
   };

   form.addEventListener('submit', event => {
      const formName = document.getElementById('form1-name'),
         formEmail = document.getElementById('form1-email'),
         formPhone = document.getElementById('form1-phone');
      if (validInfo(formPhone, formName, formEmail)) {
         addMessageForm(event, form);
      } else {
         form.appendChild(statusMessage);
         statusMessage.textContent = "Введите корректное значение!";
         event.preventDefault();
      }
   });
   formFooter.addEventListener('submit', event => {
      const formNameTwo = document.getElementById('form2-name'),
         formEmailTwo = document.getElementById('form2-email'),
         formPhoneTwo = document.getElementById('form2-phone');

      if (validInfo(formPhoneTwo, formNameTwo, formEmailTwo)) {
         addMessageForm(event, formFooter);
      } else {
         formFooter.appendChild(statusMessage);
         statusMessage.textContent = "Введите корректное значение!";
         event.preventDefault();
      }
   });
   formPopup.addEventListener('submit', event => {
      const formNameThree = document.getElementById('form3-name'),
         formEmailThree = document.getElementById('form3-email'),
         formPhoneThree = document.getElementById('form3-phone');
      if (validInfo(formPhoneThree, formNameThree, formEmailThree)) {
         addMessageForm(event, formPopup);
      } else {
         formPopup.appendChild(statusMessage);
         statusMessage.textContent = "Введите корректное значение!";
         event.preventDefault();
      }
   });
};

export default sendForm;
