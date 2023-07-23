class Game {

constructor() {

   this.link = new Link();

//    this.centaleon = new Centaleon();
   this.centaleonArr = [];

//    this.arañas = new Arañas();
   this.arañasArr = [];

//    this.monstruos = new Monstruos();
   this.monstruosArr = [];

   this.pollos = new Pollos();

   this.frames = 0;
   this.isGameOn = true;

   let min = 500;
   let max = 600;
   this.randomNumber = Math.random() * (max - min) + min;
}

centaleonesAparecen = () => {
if (this.centaleonArr.length === 0 || this.frames % 600 === 0) {

    let nuevoCentaleon = new Centaleon()
    this.centaleonArr.push(nuevoCentaleon)
    }
}

centaleonesDesaparecen = () => {

    //si el primer elemento del array ha salido de la vista,
    if (this.centaleonArr[0].x < -150) {
        this.centaleonArr[0].node.remove()
        this.centaleonArr.shift()
    }
}

arañasAparecen = () => {
    if (this.arañasArr.length === 0 || this.frames % 600 === 0) {
    
        let nuevoArañas = new Arañas()
        this.arañasArr.push(nuevoArañas)    
        }
    }
    
arañasDesaparecen = () => {
    
        //si el primer elemento del array ha salido de la vista,
        if (this.arañasArr[0].x < -150) {
            this.arañasArr[0].node.remove()
            this.arañasArr.shift()
        }
    }

monstruosAparecen = () => {
    if (this.monstruosArr.length === 0 || this.frames % 600 === 0) {
        
            let nuevoMonstruos = new Monstruos()
            this.monstruosArr.push(nuevoMonstruos)    
            }
        }
        
monstruosDesaparecen = () => {
        
//si el primer elemento del array ha salido de la vista,
    if (this.monstruosArr[0].x < -150) {
        this.monstruosArr[0].node.remove()
        this.monstruosArr.shift()
        }
    }



gameLoop = () => {
    this.frames++;

    // Lógica para mover a los pollos en cada cuadro del juego
    this.pollos.move();

    // this.centaleon.automaticMovement();
    this.centaleonesAparecen();
    this.centaleonesDesaparecen();

    this.centaleonArr.forEach((cadaCentaleon) => {
        cadaCentaleon.automaticMovement();
    })

    this.arañasAparecen();
    this.arañasDesaparecen();

    this.arañasArr.forEach((cadaAraña) => {
        cadaAraña.automaticMovement();
    })

    this.monstruosAparecen();
    this.monstruosDesaparecen();

    this.monstruosArr.forEach((cadaMonstruo) => {
        cadaMonstruo.automaticMovement();
    })

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  }
}





