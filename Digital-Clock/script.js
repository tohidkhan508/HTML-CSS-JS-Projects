const hour = document.getElementById("hour");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const ampm1 = document.getElementById("ampm");

function updateClock() {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM";

    if(hr > 12) {
        hr = hr - 12;
        ampm = "PM";
    }

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hour.innerText = hr;
    minutes.innerHTML = min;
    seconds.innerText = sec;
    ampm1.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();