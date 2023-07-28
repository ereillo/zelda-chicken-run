class Monstruos {
  constructor(velocity) {
    this.node = document.createElement("img");
    this.node.src = "./images/boboklin.png";
    gameBoxNode.append(this.node);

    this.x = gameBoxNode.offsetWidth;
    this.y = 50;
    this.w = 117;
    this.h = 85;

    this.node.style.width = `${this.w}px`; // ancho
    this.node.style.height = `${this.h}px`; // alto
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`; //posición inicial vertical
    this.node.style.left = `${this.x}px`;

    this.speed = velocity;
  }

  automaticMovement = () => {
    this.x -= this.speed;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
  };
}
