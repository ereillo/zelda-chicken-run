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
    this.pollos2 = new Pollos(); //pasar un valor a cada uno entre parentesis y eso va a ser su posición y inicial
    this.pollos3 = new Pollos();

    this.frames = 0;
    this.isGameOn = true;

    this.min = 200;
    this.max = 1000;
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min);
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none" //ocultar la pantalla de juego
    gameoverScreenNode.style.display = "flex" //mostrar la pantalla final
}
  centaleonesAparecen = () => {
    if (this.centaleonArr.length === 0 || this.frames % this.randomNumber === 0) {
      let nuevoCentaleon = new Centaleon();
      this.centaleonArr.push(nuevoCentaleon);
    }
  };

  centaleonesDesaparecen = () => {
    //si el primer elemento del array ha salido de la vista,
    if (this.centaleonArr[0].x < -150) {
      this.centaleonArr[0].node.remove();
      this.centaleonArr.shift();
    }
  };

  collisionCentaleonesPollos = () => {
    this.centaleonArr.forEach((cadaCentaleon) => {
      if (
        this.pollos.x < cadaCentaleon.x + cadaCentaleon.w &&
        this.pollos.x + this.pollos.w > cadaCentaleon.x &&       
        this.pollos.y < cadaCentaleon.y + cadaCentaleon.h &&
        this.pollos.y + this.pollos.h > cadaCentaleon.y
      ) {
        // Collision detected!
        this.gameOver();
      }
    });
  };

  collisionCentaleonesLink = () => {
    this.centaleonArr.forEach((cadaCentaleon, index) => {
      if (
        this.link.x < cadaCentaleon.x + cadaCentaleon.w &&
        this.link.x + this.link.w > cadaCentaleon.x &&       
        this.link.y < cadaCentaleon.y + cadaCentaleon.h &&
        this.link.y + this.link.h > cadaCentaleon.y
      ) {
        //al notar la colisión...
        this.centaleonArr.splice(index, 1);
        gameBoxNode.removeChild(cadaCentaleon.node)
    }
    });
  };

  arañasAparecen = () => {
    if (this.arañasArr.length === 0 || this.frames % this.randomNumber === 0) {
      let nuevoArañas = new Arañas();
      this.arañasArr.push(nuevoArañas);
    }
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min)
  };

  arañasDesaparecen = () => {
    //si el primer elemento del array ha salido de la vista,
    if (this.arañasArr[0].x < -150) {
      this.arañasArr[0].node.remove();
      this.arañasArr.shift();
    }
  };

  collisionArañasPollos = () => {
    this.arañasArr.forEach((cadaAraña) => {
      if (
        this.pollos.x < cadaAraña.x + cadaAraña.w &&
        this.pollos.x + this.pollos.w > cadaAraña.x &&       
        this.pollos.y < cadaAraña.y + cadaAraña.h &&
        this.pollos.y + this.pollos.h > cadaAraña.y
      ) {
        // Collision detected!
        this.gameOver();
      }
    });
  };

  collisionArañasLink = () => {
    this.arañasArr.forEach((cadaAraña, index) => {
      if (
        this.link.x < cadaAraña.x + cadaAraña.w &&
        this.link.x + this.link.w > cadaAraña.x &&       
        this.link.y < cadaAraña.y + cadaAraña.h &&
        this.link.y + this.link.h > cadaAraña.y
      ) {
        //al notar la colisión...
        this.arañasArr.splice(index, 1);
        gameBoxNode.removeChild(cadaAraña.node)
    }
    });
  };

  monstruosAparecen = () => {
    if (this.monstruosArr.length === 0 || this.frames % this.randomNumber === 0) {
      let nuevoMonstruos = new Monstruos();
      this.monstruosArr.push(nuevoMonstruos);
    }
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min) + this.min)
  };

  monstruosDesaparecen = () => {
    //si el primer elemento del array ha salido de la vista,
    if (this.monstruosArr[0].x < -150) {
      this.monstruosArr[0].node.remove();
      this.monstruosArr.shift();
    }
  };
 
  collisionMonstruosPollos = () => {
    this.monstruosArr.forEach((cadaMonstruo) => {
      if (
        this.pollos.x < cadaMonstruo.x + cadaMonstruo.w &&
        this.pollos.x + this.pollos.w > cadaMonstruo.x &&       
        this.pollos.y < cadaMonstruo.y + cadaMonstruo.h &&
        this.pollos.y + this.pollos.h > cadaMonstruo.y
      ) {
        // Collision detected!
        this.gameOver();
      }
    });
  };

  collisionMonstruosLink = () => {
    this.monstruosArr.forEach((cadaMonstruo, index) => {
      if (
        this.link.x < cadaMonstruo.x + cadaMonstruo.w &&
        this.link.x + this.link.w > cadaMonstruo.x &&       
        this.link.y < cadaMonstruo.y + cadaMonstruo.h &&
        this.link.y + this.link.h > cadaMonstruo.y
      ) {
        //al notar la colisión...
        this.monstruosArr.splice(index, 1);
        gameBoxNode.removeChild(cadaMonstruo.node)
    }
    });
  };

  

  gameLoop = () => {
    this.frames++;

    // Lógica para mover a los pollos en cada cuadro del juego
    this.pollos.move();
    this.pollos2.move();
    this.pollos3.move();

    // this.centaleon.automaticMovement();
    this.centaleonesAparecen();
    this.centaleonesDesaparecen();
    this.centaleonArr.forEach((cadaCentaleon) => {
      cadaCentaleon.automaticMovement();
    });
    this.collisionCentaleonesPollos();
    this.collisionCentaleonesLink();

    this.arañasAparecen();
    this.arañasDesaparecen();
    this.arañasArr.forEach((cadaAraña) => {
      cadaAraña.automaticMovement();
    });
    this.collisionArañasPollos();
    this.collisionArañasLink();

    this.monstruosAparecen();
    this.monstruosDesaparecen();
    this.monstruosArr.forEach((cadaMonstruo) => {
      cadaMonstruo.automaticMovement();
    });
    this.collisionMonstruosPollos();
    this.collisionMonstruosLink();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
