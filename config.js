<script type="text/javascript">
var deadline = '25 December 2020 14:05';

function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    console.log(t);
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    function updateClock(){
        var t = getTimeRemaining(endtime);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if(t.total<=0){
                      window.location.href="www.google.com";
        }

    }

    updateClock();
    var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', deadline);
</script>
