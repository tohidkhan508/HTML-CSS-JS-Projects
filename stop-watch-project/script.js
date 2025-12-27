let sec = 0;
let ms = 0;

let timer = false;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

start.addEventListener("click", startFunc);
stop.addEventListener("click", stopFunc);
reset.addEventListener("click", resetFunc);

function startFunc() {
    if(timer === false) {
        timer = true;
        start.disable = true;
        stopWatch();
    }
}

function stopFunc() {
    timer = false;
    stop.disable = false;

}

function resetFunc() {
    timer = false;

    sec = 0;
    ms = 0;

    document.getElementById("sec").textContent = "00";
    document.getElementById("ms").textContent= "00";
}

function stopWatch() {
    if(timer === true) {
        ms++;
    }

    if(ms === 100) {
        sec++;
        ms = 0;
    } 

    if(sec === 60) {
        sec = 0;
        ms = 0;
    }

    document.getElementById("sec").textContent = sec < 10 ? "0" + sec : sec;
    document.getElementById("ms").textContent = ms < 10 ? "0" + ms : ms
    setTimeout(stopWatch, 10);
}