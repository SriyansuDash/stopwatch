const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const lapButton = document.querySelector('.lap-button');

const hoursDisplay = document.querySelector('.hours');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const lapList = document.querySelector('.lap-list');

let timer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    intervalId: null,
    isRunning: false
};

const formatTime = (time) => time.toString().padStart(2, "0");

const updateDisplay = () => {
    hoursDisplay.textContent = formatTime(timer.hours);
    minutesDisplay.textContent = formatTime(timer.minutes);
    secondsDisplay.textContent = formatTime(timer.seconds);
};

const startTimer = () => {
    if (timer.isRunning) return;
    
    timer.isRunning = true;
    timer.intervalId = setInterval(() => {
        timer.seconds++;
        
        if (timer.seconds === 60) {
            timer.minutes++;
            timer.seconds = 0;
        }
        
        if (timer.minutes === 60) {
            timer.hours++;
            timer.minutes = 0;
        }
        
        updateDisplay();
    }, 1000);
};

const stopTimer = () => {
    if (!timer.isRunning) return;
    
    clearInterval(timer.intervalId);
    timer.isRunning = false;
    timer.intervalId = null;
};


const resetTimer = () => {
    stopTimer();
    timer.hours = 0;
    timer.minutes = 0;
    timer.seconds = 0;
    updateDisplay();
    lapList.innerHTML = '';
};

const recordLap = () => {
    if (!timer.isRunning) return;
    
    const lapTime = `${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapList.children.length + 1}: ${lapTime}`;
    lapList.prepend(lapItem);
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
updateDisplay();