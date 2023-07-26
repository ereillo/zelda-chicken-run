class Rupias {
    constructor() {
      //creamos elemento en el DOM
      this.node = document.createElement("img");
      this.node.src = "./images/rupia.png";
      gameBoxNode.append(this.node);
  
       // Generar coordenadas aleatorias para la posición inicial de las rupias
    // Coordenada X en los cuatro quintos del game-box (excluyendo el primer quinto ocupado por los pollos)
    this.x = (Math.random() * (gameBoxNode.clientWidth * 4 / 5)) + gameBoxNode.clientWidth / 4;
    this.y = Math.random() * (gameBoxNode.clientHeight * 2 / 2);

    this.w = 30;
    this.h = 25;

    this.node.style.width = `${this.w}px`; // ancho
    this.node.style.height = `${this.h}px`; // alto
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`; // posición inicial vertical
    this.node.style.left = `${this.x}px`; // posición inicial horizontal
  }
}

//RUPIAS VERDES Y RUPIAS AZULES. BULEANO.