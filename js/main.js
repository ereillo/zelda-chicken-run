console.log("probando")
// * GLOBAL VARIABLES
/* para hacer que al darle al botón, desapareza la pantalla de inicio y aparezca la de juego*/ 

const startBtnNode = document.querySelector("#start-btn")
const splashScreenNode = document.querySelector("#splash-screen") //pantalla de inicio
const gameScreenNode = document.querySelector("#game-screen") //pantalla de juego
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen")
const youwonScreenNode = document.querySelector("#youwon-screen")
const reStartBtnNode = document.querySelector("#restart-btn") // boton de reinicio



//STATE MANAGEMENT FUNCTIONS
function startGame() {
    splashScreenNode.computedStyleMap.display = "none" //funcion para que el juego inicie
    gameScreenNode.computedStyleMap.display = "flex"

gameObj = new Game();
console.log(gameObj);

gameObjt.gameLoop()
}
