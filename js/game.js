class Game {

constructor() {

   this.link = new Link();

   this.centaleon = new Centaleones();
   this.centaleonArr = []

   this.arañas = new Arañas();
   this.arañasArr = []

   this.monstruos = new Monstruos();
   this.monstruosArr = []

   this.pollos = new Pollos();

   this.frames = 0;
   this.isGameOn = true;
}




gameLoop = () => {
    this.frames++;

    // Lógica para mover a los pollos en cada cuadro del juego
    this.pollos.move();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  }
}





