function countdown () {
const scoreElement = document.getElementById("timer")
let seconds = 40;

function updateScore() {
    scoreElement.textContent = `Time left: ${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`;
}


const intervalId = setInterval (() => {
    seconds--;
    updateScore();

    if (seconds <= 0) {
        clearInterval(intervalId);
        scoreElement.textContent = "Well done!"
    }
}, 1000)
}

window.addEventListener("load", countdown)

