

setInterval(function() {
  let a = new Date()
  let h = a.getHours()
  let m = a.getMinutes()
  let s = a.getSeconds()
  let d = a.getDate()

  console.log(h, m, s, d);
  let ho = document.getElementById("box1");
  let mi = document.getElementById("box2");
  let se = document.getElementById("box3");
  let da = document.getElementById("box4");

  ho.innerHTML = h;
  mi.innerHTML = m;
  se.innerHTML = s;
  da.innerHTML = d;
}, 1000  )