let title = document.getElementById("title");
let time = document.getElementById("time");
let SetAlarm = document.getElementById("SetAlarm");
let Stop = document.getElementById("Stop");
let Reset = document.getElementById("Reset");


SetAlarm.addEventListener('click', () => {
  console.log(title.value);
  console.log(time.value);
})

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

var Interval = setInterval(function main() {
  let a = new Date()
  let h = a.getHours()
  let m = a.getMinutes()
  let s = a.getSeconds()

  let hours = h.toString()
  let minutes = m.toString()

  if (
    minutes == "0" ||
    minutes == "1" ||
    minutes == "2" ||
    minutes == "3" ||
    minutes == "4" ||
    minutes == "5" ||
    minutes == "6" ||
    minutes == "7" ||
    minutes == "8" ||
    minutes == "9"
  ) {
    minutes = "0" + minutes;
  }

  if (
    hours == "0" ||
    hours == "1" ||
    hours == "2" ||
    hours == "3" ||
    hours == "4" ||
    hours == "5" ||
    hours == "6" ||
    hours == "7" ||
    hours == "8" ||
    hours == "9"
  ) {
    hours = "0" + hours;
  }



  let V = hours + ":" + minutes;
  console.log(V)

  let Time = (time.value).toString();
  console.log(Time);


  if (Time == V) {
    audio.play();
  }
}, 1000)

Stop.addEventListener('click', () => {
  audio.pause();
  clearInterval(Interval);
})

Reset.addEventListener('click', () => {
  location.reload()
})


// var audio = new Audio('audio_file.mp3');
// audio.play()