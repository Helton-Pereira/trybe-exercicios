function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDezDays() {
    let decemberDays = document.querySelector('#days');

    for (let index0 = 0; index0 < dezDaysList.length; index0 += 1) {
        let monthDays = dezDaysList[index0];
        let monthDaysItem = document.createElement('li');
       
        if (monthDays === 24 | monthDays === 31) {
            monthDaysItem.className = 'day holiday';
            monthDaysItem.innerHTML = day;
            decemberDays.appendChild(monthDaysItem);
        } else if (monthDays === 4 | monthDays === 11 | monthDays === 18) {
            monthDaysItem.className = 'day friday';
            monthDaysItem.innerHTML = day;
            decemberDays.appendChild(monthDaysItem);
        } else if ();
    }
  }
  createDezDays();

