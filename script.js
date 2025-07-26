let startButton = document.querySelector('.start-button');
let stopButton = document.querySelector('.stop-button');
let resetButton = document.querySelector('.reset-button');

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let timer = [0,0,0];
let timerId = 0;

function startTimer(){

    if (timerId !== 0) {
        return;
    }
    timerId = setInterval(() => {
        timer[2]++;
        if(timer[2] == 60){
            timer[1]++;
            timer[2] = 0 ;
        }
        if(timer[1] == 60){
            timer[0]++;
            timer[1] = 0 ;
        }
        displayTime();
    }, 1000);
}

function stopTimer(){
    clearInterval(timerId);
    timerId = 0;
}

function resetTimer(){
    stopTimer();
    timer = [0,0,0];
    displayTime();
}

function displayTime() {
    hours.innerText = timer[0].toString().padStart(2,"0");
    minutes.innerText = timer[1].toString().padStart(2,"0");
    seconds.innerText = timer[2].toString().padStart(2,"0");
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);