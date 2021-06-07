import errorMessage, { resetMessage, renderDiff } from './common.js';
import { diffDates } from './calcs.js';

const form = document.getElementById('dateForm');
const btnCalcs = document.getElementById('btn-calc');
const btnTimer = document.getElementById('btn-timer');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  resetMessage();

  const formdata = new FormData(evt.target);
  let date1 = formdata.get('date1');
  let date2 = formdata.get('date2');

  if (!date1 || !date2) {
    errorMessage('ERROR');
  } else {
    if (date1 > date2) {
      [date2, date1] = [date1, date2];
    }
    const result = diffDates(date1, date2);

    renderDiff(result);
  }
});

btnCalcs.addEventListener('click', () => {
  let disp = getComputedStyle(datecalc).display;
  if (disp == 'none') {
    datecalc.style.display = 'block';
  } else {
    datecalc.style.display = 'none';
  }
});

btnTimer.addEventListener('click', () => {
  let disp = getComputedStyle(timer2).display;
  if (disp == 'none') {
    timer2.style.display = 'block';
  } else {
    timer2.style.display = 'none';
  }
});
