// Constantes
const UPDATE_DELAY = 1000; // 1 second = 1000 ms

// Utilitaires
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    
    const minutesAsString = minutes >= 10 ? `${minutes}` : `0${minutes}`;
    const secondsAsString = seconds >= 10 ? `${seconds}` : `0${seconds}`;

    return `${minutesAsString}:${secondsAsString}`;
}

// Code du chronomètre
let currentTime = 0;
const timeDiv = document.getElementById("time");

function advanceTime() {
    timeDiv.innerText = formatTime(++currentTime);
}

setInterval(advanceTime, UPDATE_DELAY);
