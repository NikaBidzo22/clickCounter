
let btn = document.getElementById('btn');
let text = document.getElementsByClassName('text');
let reset = document.getElementById('play');
  count = 0;
btn.onclick = function() {
  count += 1;
  btn.innerHTML = "Click Counter: " + count;
};

reset.onclick = function() {
  location.reload();
}


var countDownDate = new Date().setSeconds(new Date().getSeconds() + 6 )

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".minutes").innerHTML = minutes
  document.querySelector(".seconds").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 1) {
    clearInterval(x);
    let cps = Math.round = count / 5;
    document.querySelector(".minutes").innerHTML = "0";
    document.querySelector(".seconds").innerHTML = count;
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".result").innerHTML = "Well.. You Clicked with the speed of " + cps + "CPS (Clicks per seconds). You made " + count + " Clicks in 5 Seconds";
    
  }
}, 1000);