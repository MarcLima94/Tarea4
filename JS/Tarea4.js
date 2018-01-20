/**Declarar variables**/
const clock = document.querySelector('.Clock');
const btnHello = document.getElementById('say-hi');
const idHeader = document.getElementById("header");
const stopAlarm = document.getElementById('stop-alarm');
const audioMarc = document.getElementById('audioMarc');
const clockTitle = document.querySelector('.Clock-title');
const startAlarm = document.getElementById('start-alarm');
const pWhatIsEvent = document.getElementById('pelis-y-más');
const cards = document.querySelectorAll('cambio-de-tarjeta');
const btnHeaderColor = document.getElementById('cambio-de-color');

// Button por change header section.
btnHeaderColor.addEventListener('click', function () {
  /** Color - Reference material colors from | https://www.materialui.co/colors
   * http://www.color-hex.com/color/aed581 - Green color
   * http://www.color-hex.com/color/9e9e9e - Grey color
   */
  if (idHeader.style.backgroundColor === 'rgb(158, 158, 158)') {
    idHeader.style.backgroundColor = "#AED581";
  } else {
    idHeader.style.backgroundColor = "#9E9E9E";
  }
});

startAlarm.addEventListener('click', function () {
  audioMarc.play();
});

stopAlarm.addEventListener('click', function () {
  audioMarc.load();
});