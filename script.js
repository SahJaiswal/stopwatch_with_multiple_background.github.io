let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function stopwatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec += 1;
      count = 0;
    }
    if (sec == 60) {
      min += 1;
      sec = 0;
    }
    if (min == 60) {
      hr += 1;
      min = 0;
    }
    let sthr = hr;
    let stmin = min;
    let stsec = sec;
    let stcount = count;
    if (hr < 10) {
      sthr = "0" + sthr;
    }
    if (sec < 10) {
      stsec = "0" + stsec;
    }
    if (min < 10) {
      stmin = "0" + stmin;
    }
    if (count < 10) {
      stcount = "0" + stcount;
    }
    document.getElementById("count").innerHTML = stcount;
    document.getElementById("sec").innerHTML = stsec;
    document.getElementById("min").innerHTML = stmin;
    document.getElementById("hr").innerHTML = sthr;
    setTimeout("stopwatch()", 10);
  }
}
function start() {
  if (timer == false) {
    timer = true;
    stopwatch();
  }
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
}