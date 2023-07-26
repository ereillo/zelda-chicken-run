let intervalId; 

function countdown() {
    const scoreElement = document.getElementById("timer");
    let seconds = 30;
  
    function updateScore() {
      scoreElement.textContent = `Time left: ${Math.floor(
        seconds / 60
      )}:${(seconds % 60).toString().padStart(2, "0")}`;
    }
  
     intervalId = setInterval(() => {
      seconds--;
      updateScore();
  
      if (seconds <= 0) {
        clearInterval(intervalId);
        scoreElement.textContent = "Well done!";
  
        // Detener el juego y mostrar la pantalla de "YOU SAVED HYRULE!"
        gameObj.youWon();
        gameScreenNode.style.display = "none";
        youwonScreenNode.style.display = "flex";
      }
    }, 2000);
  }

function deleteCountdown() {
    clearInterval (intervalId)
}



