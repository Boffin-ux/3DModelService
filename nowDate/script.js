/* eslint-disable max-len */
const div = document.createElement('div'),
   addPOne = document.createElement('p'),
   addPTwo = document.createElement('p'),
   addPThree = document.createElement('p'),
   addPFour = document.createElement('p');

document.body.append(div);
div.append(addPOne);
div.append(addPTwo);
div.append(addPThree);
div.append(addPFour);


// функция для склонения слов
const addDeclension = (value, arr) => {
   if (value >= 0 && value <= 6) {
      return arr[3];
   } else if (value >= 18 && value <= 24) {
      return arr[2];
   } else if (value >= 12 && value <= 18) {
      return arr[1];
   } else {
      return arr[0];
   }
};

const nowDate = () => {
   const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
      data = new Date(),
      days = data.getDay(),
      hours = data.getHours(),
      dateNewYear = new Date('31 december 2021'), //новый год
      daysLeft = Math.floor((dateNewYear - data) / 1000 / 60 / 60 / 24),
      today = `${week[days - 1].slice(0, 1).toUpperCase()}${week[days - 1].slice(1)}`,
      currentTime = data.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });


   addPOne.textContent = `${addDeclension(hours, ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'])}`;

   addPTwo.textContent = `Сегодня: ${today} `;
   addPThree.textContent = `Текущее время: ${currentTime} `;
   addPFour.textContent = `До нового года осталось ${daysLeft} дней`;
};
nowDate();