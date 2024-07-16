const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})
let timer;
let totalSeconds = 0;
let running = false;

const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    if(confirm("Are you sure you want to reset the timer?")) {
        totalSeconds = 0;
        timerElement.textContent = "00:00:00";
    }
}

function updateTimer() {
    totalSeconds++;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}