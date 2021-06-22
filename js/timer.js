document.addEventListener('DOMContentLoaded', function () {
  let timerInput = document.getElementById('time');
  let buttonRun = document.getElementById('button');
  let timerShow = document.getElementById('timer');
  let btnStop = document.getElementById('button-stop');
  import sound from '../audio.mp3';
  let timer;
  let audio = new Audio(sound);

  buttonRun.addEventListener('click', function () {
    let timeMinute;
    let seconds;
    let minutes;
    let hour;
    clearInterval(timer);
    timeMinute = parseInt(timerInput.value) * 60;
    timer = setInterval(function () {
      seconds = timeMinute % 60;
      minutes = (timeMinute / 60) % 60;
      hour = (timeMinute / 60 / 60) % 60;
      if (timeMinute <= 0) {
        clearInterval(timer);
        // alert('Время закончилось');
        audio.play();
      } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
      }
      --timeMinute;
    }, 1000);
  });

  btnStop.addEventListener('click', function () {
    clearInterval(timer);
  });
});
