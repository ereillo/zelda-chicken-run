console.log("probando");
// * GLOBAL VARIABLES. ELEMENTOS ACCESIBLES EN TODO EL CÓDIGO
/* para hacer que al darle al botón, desapareza la pantalla de inicio y aparezca la de juego*/

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen"); //pantalla de inicio
const gameScreenNode = document.querySelector("#game-screen"); //pantalla de juego
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");
const youwonScreenNode = document.querySelector("#youwon-screen");
const reStartBtnNode = document.querySelector("#restart-btn-gameover"); // boton de reinicio
const buttonSound = document.querySelector("#button-sound");
const reStartBtnWonNode = document.querySelector("#restart-btn-youwon");

let gameObj = null;

let gameSound = document.querySelector("juego-sound");


//STATE MANAGEMENT FUNCTIONS. QUÉ PÁGINA QUIERO QUE SE VEA Y CUÁL NO
function startGame() {
  splashScreenNode.classList.add("fade-out");
  setTimeout(function () {
    splashScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    // Iniciar el juego
    gameObj = new Game();
    gameObj.gameLoop();
    countdown(); // Llamar al contador después de que el desvanecimiento haya terminado
  }, 1000);
  gameSound.play();
}


function restartGame() {
  splashScreenNode.classList.add("fade-out");
  setTimeout(function () {
    gameBoxNode.innerHTML = `
    <div id="game-box">
        <img src="./images/granero.jpg" alt="Granero" class="granero-image">
        <div id = "timer" class="time-left">Time left 10:00</div>
        <div id = "rupees"class="rupees-counter">Rupees: 0</div>
        <div id = "vidas" class="vidas-container">Vidas restantes: 3</div>
    </div>`;
    gameScreenNode.style.display = "flex"; //PARA REINICIAR EL JUEGO
    gameoverScreenNode.style.display = "none";
    youwonScreenNode.style.display = "none";

    // Iniciar el juego
    gameObj = new Game();
    gameObj.gameLoop();
    countdown();
    gameSound.play();
  }, 1000);
}

// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
startBtnNode.addEventListener("click", function () {
  buttonSound.play();
});

reStartBtnNode.addEventListener("click", restartGame);
reStartBtnNode.addEventListener("click", function () {
  buttonSound.play();
});

reStartBtnWonNode.addEventListener("click", restartGame);
reStartBtnWonNode.addEventListener("click", function () {
  buttonSound.play();
});

window.addEventListener("keydown", (event) => {
//   console.log("Presionaste una tecla:", event.key);
  if (event.key === "ArrowUp") {
    gameObj.link.moveUp();
  } else if (event.key === "ArrowDown") {
    gameObj.link.moveDown();
  } else if (event.key === "ArrowLeft") {
    gameObj.link.moveLeft();
  } else if (event.key === "ArrowRight") {
    gameObj.link.moveRight();
  }
});
