const newYear = '1 Jan 2021'

const dayEl = document.querySelector('.day')
const houreEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const  secondEl = document.querySelector('.second')

function countdown () {
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()

    let totalSeconds = (newYearsDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600  / 24);
    let houres = Math.floor( totalSeconds/ 3600)% 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds ) % 60;


    dayEl.innerHTML = days;
    houreEl.innerHTML = houres;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;

}
function DelayRedirect() {
    var seconds = 0;
    var countdown = document.getElementById("countdown");
    var lblcount = document.getElementById("lblcount");
   countdown.style.display = "block";
    lblCount.innerHTML = seconds;
    setInterval(function () {
        seconds--;
        lblCount.innerHTML = seconds;
        if (seconds == 0) {
            dvCountDown.style.display = "none";
            window.location = "//www.google.com/";
        }
    }, 1000);
}

countdown()
DelayRedirect()

setInterval(countdown, 1000)
