class Rupias {
  constructor(isRupiaVerde) {
    this.node = document.createElement("img");
    this.addOnePoint = true;
    if (isRupiaVerde === true) {
      this.node.src = "./images/rupia.png";
      this.addOnePoint = true;
    } else {
      this.node.src = "./images/rupia-azul.png";
      this.addOnePoint = false;
    }
    gameBoxNode.append(this.node);

    this.x =
      Math.random() * ((gameBoxNode.clientWidth * 4) / 5) +
      gameBoxNode.clientWidth / 4;
    this.y =
      Math.random() * ((gameBoxNode.clientHeight * 7) / 10) +
      gameBoxNode.clientHeight / 7;

    this.w = 40;
    this.h = 35;

    this.node.style.width = `${this.w}px`; // ancho
    this.node.style.height = `${this.h}px`; // alto
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`; // posición inicial vertical
    this.node.style.left = `${this.x}px`; // posición inicial horizontal
  }
}
