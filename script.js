let timer;
let isRunning = false;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').innerHTML = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').innerHTML = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    let display = document.getElementById('display');
    let time = display.innerHTML.split(':');
    let hours = parseInt(time[0], 10);
    let minutes = parseInt(time[1], 10);
    let seconds = parseInt(time[2], 10);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;

            if (hours === 24) {
                hours = 0;
            }
        }
    }

    display.innerHTML =
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
}

function lapReset() {
    if (isRunning) {
        let lapsList = document.getElementById('laps');
        let lapTime = document.getElementById('display').innerHTML;

        let lapItem = document.createElement('li');
        lapItem.innerHTML = 'Lap ' + lapCounter + ': ' + lapTime;
        lapsList.appendChild(lapItem);

        lapCounter++;
    } else {
        clearInterval(timer);
        document.getElementById('display').innerHTML = '00:00:00';
        document.getElementById('startStop').innerHTML = 'Start';
        lapCounter = 1;
        document.getElementById('laps').innerHTML = '';
        isRunning = false;
    }
}
