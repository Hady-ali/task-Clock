function showClock(){
    var date = new Date ();
    var Hours = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();
    if (Hours > 12){
        Hours -= 12;
    }

    Hours = (Hours < 10 ) ? "0" + Hours : Hours;
    Minutes = (Minutes < 10 ) ? "0" + Minutes : Minutes;
    Seconds = (Seconds < 10 ) ? "0" + Seconds : Seconds ;

    var Time = Hours + " : " + Minutes + " : " + Seconds;
    document.getElementById("clock").innerHTML = Time ;
    setTimeout (showClock , 1000);
}
showClock()