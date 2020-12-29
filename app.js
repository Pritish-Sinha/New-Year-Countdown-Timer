const newYear = '01 Jan 2021'

const dayEl = document.querySelector('.day')
const houreEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const  secondEl = document.querySelector('.second')
let timeRemaining = true //Flag to check if time is greater than 0, so that we can stop setInterval when it's new year

function countdown () {
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()

    let totalSeconds = (newYearsDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600  / 24);
    let hours = Math.floor( totalSeconds/ 3600)% 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds ) % 60;

    // Check if time is days, hours, minutes, seconds are 0, then open new page in same tab.
  
if(days === 0 && hours === 0 && minutes === 0 && seconds ===0 )
{
        window.open("jump.html","_self")
        timeRemaining = false
    }


    dayEl.innerHTML = days>0?days:"0";  //if days is greater than 0, then update else put 0
    houreEl.innerHTML = hours>0?hours:"0";  //if hours is greater than 0, then update else put 0
    minuteEl.innerHTML = minutes>0?minutes:"0";  //if minutes is greater than 0, then update else put 0
    secondEl.innerHTML = seconds>0?seconds:"0";   //if seconds is greater than 0, then update else put 0
}

countdown()

if(timeRemaining){
    setInterval(countdown, 1000)
}

