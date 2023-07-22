console.log("probando")
// * GLOBAL VARIABLES. ELEMENTOS ACCESIBLES EN TODO EL CÓDIGO
/* para hacer que al darle al botón, desapareza la pantalla de inicio y aparezca la de juego*/ 

const startBtnNode = document.querySelector("#start-btn");
const splashScreenNode = document.querySelector("#splash-screen"); //pantalla de inicio
const gameScreenNode = document.querySelector("#game-screen") //pantalla de juego
const gameBoxNode = document.querySelector("#game-box");
const gameoverScreenNode = document.querySelector("#gameover-screen");
const youwonScreenNode = document.querySelector("#youwon-screen");
const reStartBtnNode = document.querySelector("#restart-btn"); // boton de reinicio

let gameObj = null;


//STATE MANAGEMENT FUNCTIONS. QUÉ PÁGINA QUIERO QUE SE VEA Y CUÁL NO
function startGame() {
    //funcion para que el juego inicie
splashScreenNode.style.display = "none"
gameScreenNode.style.display = "flex"

gameObj = new Game();
console.log(gameObj);


gameObj.gameLoop()
}




// * ADD EVENT LISTENERS

startBtnNode.addEventListener("click", (startGame))

window.addEventListener("keydown", (event) => {
    console.log("Presionaste una tecla:", event.key);
    if (event.key === "ArrowUp") {
        gameObj.link.moveUp();
    }
    else if (event.key === "ArrowDown") {
        gameObj.link.moveDown()
    }
    else if (event.key === "ArrowLeft") {
        gameObj.link.moveLeft()
    }
    else if (event.key === "ArrowRight") {
        gameObj.link.moveRight()
    }
});