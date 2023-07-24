function countdown() {
    const scoreElement = document.getElementById("timer");
    let seconds = 15;
  
    function updateScore() {
      scoreElement.textContent = `Time left: ${Math.floor(
        seconds / 60
      )}:${(seconds % 60).toString().padStart(2, "0")}`;
    }
  
    const intervalId = setInterval(() => {
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
    }, 1000);
  }
