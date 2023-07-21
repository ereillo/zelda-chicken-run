class Game {

constructor() {

}


gameLoop = () => {

if (this.isGameOn === true) {
        requestAnimationFrame( this.gameLoop )
      } // si isGameOn es false, deten la recursion
}








}