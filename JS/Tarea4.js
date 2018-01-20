/**Declarar variables**/
const c = console.log();
const pWhatIsEvent = document.getElementById('pelis-y-más'),
  btnHello = document.getElementById('say-hi'),
  btnHeaderColor = document.getElementById('cambio-de-color'),
  cards = document.querySelectorAll('cambio-de-tarjeta'),
  clock = document.querySelector('.Clock'),
  clockTitle = document.querySelector('.Clock-title'),
  startAlarm = document.getElementById('start-alarm'),
  stopAlarm = document.getElementById('stop-alarm'),
  alarm = document.createElement('reloj'),
  idHeader = document.getElementById("header");

let clockTempo,
  alarmTempo;

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



/*
    = Asignación de valor
    == Comparación de valores
    === Comparación de valores y tipo de dato
  */

alarm.src = './sound/Nihilore'
//alarm.controls = true
//d.body.appendChild(alarm)

/*
//Sin Arrow Function
startClock.addEventListener('click', function () {
  clockTempo = setInterval(function () {
    clock.textContent = new Date().toLocaleString()
  }, 1000)
})
*/
startAlarm.addEventListener('click', () => {
  alert('Hola marc click en btn');
  //alarmTempo = setTimeout(() => alarm.play(), 3000)
  alarm.play()
});

stopAlarm.addEventListener('click', () => clearTimeout(alarmTempo))