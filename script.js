let seconds=0;
let minutes=0;
let hours=0;
let interval=null;
let status="stopped"
function stopwatch(){
    seconds++
    if(seconds/60===1){
    seconds=0;
    minutes++;
    if(minutes/60==1){
minutes=0;
hours++;
    }
    
}
document.getElementById("display").innerHTML=hours+":"+minutes+":"+seconds;
}

function startstop(){
if(status==="stopped"){
interval=window.setInterval(stopwatch,1000);
document.getElementById("startstop").innerHTML="stop";
status="started"
}
else{
    window.clearInterval(interval);
    document.getElementById("startstop").innerHTML="start"
    status="stopped"

}
}
function reset(){
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startstop").innerHTML="start";
}