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
const buttonSoundNode = document.querySelector("#button-sound");
const reStartBtnWonNode = document.querySelector("#restart-btn-youwon");
const gameSoundSoundNode = document.querySelector("#juego-sound");

let gameObj = null;

let isArrowUpPressed = false;
let isArrowDownPressed = false;
let isArrowLeftPressed = false;
let isArrowRightPressed = false;

//STATE MANAGEMENT FUNCTIONS. QUÉ PÁGINA QUIERO QUE SE VEA Y CUÁL NO

function startGame() {
  // console.log("juego empieza")
  splashScreenNode.classList.add("fade-out");
  setTimeout(function () {
    splashScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    gameSoundSoundNode.style.display = "flex";
    // Iniciar el juego
    gameObj = new Game();
    gameObj.gameLoop();
    countdown();
  }, 1000);
}

function restartGame() {
  // console.log("vuelve el juego")
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
}

// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", startGame);
startBtnNode.addEventListener("click", function () {
  buttonSoundNode.play();
  buttonSoundNode.volume = 0.1;
});

reStartBtnNode.addEventListener("click", restartGame);
reStartBtnNode.addEventListener("click", function () {
  buttonSoundNode.play();
  buttonSoundNode.volume = 0.1;
});

reStartBtnWonNode.addEventListener("click", restartGame);
reStartBtnWonNode.addEventListener("click", function () {
  buttonSoundNode.play();
  buttonSoundNode.volume = 0.1;
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
