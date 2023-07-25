class Link {
  constructor() {
    //creamos elemento en el DOM
    this.node = document.createElement("img");
    this.node.src = "./images/link5.png";
    gameBoxNode.append(this.node);

    //aquí las propiedades de Link
    this.x = 250;
    this.y = 200;
    this.w = 90;
    this.h = 85;

    this.node.style.width = `${this.w}px`; // ancho
    this.node.style.height = `${this.h}px`; // alto
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`; //posición inicial vertical
    this.node.style.left = `${this.x}px`; //posición inicial horizontal

    this.linkMovement = 15;
  }

  //aquí los métodos de link (métodos se crean con funciones de flecha)
  moveUp = () => {
    if (this.y - 10 >= 0) {
      this.y -= this.linkMovement;
      this.node.style.top = `${this.y}px`;
    }
  };

  moveDown = () => {
    if (this.y + this.h + 10 <= gameBoxNode.clientHeight) {
      this.y += this.linkMovement;
      this.node.style.top = `${this.y}px`;
    }
  };

  moveLeft = () => {
    if (this.x - 10 >= 230) {
      this.x -= this.linkMovement;
      this.node.style.left = `${this.x}px`;
    }
  };

  moveRight = () => {
    if (this.x + this.w + 10 <= gameBoxNode.clientWidth) {
      this.x += this.linkMovement;
      this.node.style.left = `${this.x}px`;
    }
  };

//   positionUpdate = () => {
//     this.node.style.top = `${this.y}px`;
//   };
}
