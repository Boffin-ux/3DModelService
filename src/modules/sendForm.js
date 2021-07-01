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
   form.addEventListener('submit', event => addMessageForm(event, form));
   formFooter.addEventListener('submit', event => addMessageForm(event, formFooter));
   formPopup.addEventListener('submit', event => addMessageForm(event, formPopup));
};

export default sendForm;