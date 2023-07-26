class Rupias {
  constructor(isRupiaVerde) {
    this.node = document.createElement("img");
    this.addOnePoint = true
    if (isRupiaVerde === true) {
      this.node.src = "./images/rupia.png";
      this.addOnePoint = true
    }
    else {
      this.node.src = "./images/rupia-azul.png"
      this.addOnePoint = false
    }
    gameBoxNode.append(this.node)

  this.x = (Math.random() * (gameBoxNode.clientWidth * 4 / 5)) + gameBoxNode.clientWidth / 4;
      this.y = Math.random() * (gameBoxNode.clientHeight * 7 / 10) + gameBoxNode.clientHeight / 7;
  
      this.w = 40;
      this.h = 35;
  
      this.node.style.width = `${this.w}px`; // ancho
      this.node.style.height = `${this.h}px`; // alto
      this.node.style.position = "absolute";
      this.node.style.top = `${this.y}px`; // posición inicial vertical
      this.node.style.left = `${this.x}px`; // posición inicial horizontal
}
}














//PRUEBA BOLEANOOOOO

// class Rupias {
//   constructor(
  //   rupeeType,
  //   positionX,
  //   positionY,
  //   rupeeWidth,
  //   rupeeHeight,
  //   rupeeSrc
  // ) {
  //   this.node = document.createElement("img");
  //   this.node.src = "./images/rupia.png";
  //   gameBoxNode.append(this.node);

  //   this.rupeeType = rupeeType;
  //   this.x = positionX;
  //   this.y = positionY;
  //   this.w = rupeeWidth;
  //   this.h = rupeeHeight;
  //   this.node.src = rupeeSrc;
  //   this.rupiasAparecen = true;
  //   this.rupiasCollision = true;

  //   rupiasAparecen = () => {
  //     this.x =
  //       Math.random() * ((gameBoxNode.clientWidth * 4) / 5) +
  //       gameBoxNode.clientWidth / 4;
  //     this.y = Math.random() * ((gameBoxNode.clientHeight * 9) / 10);
  //   };

  //   positionUpdateRupias = () => {
  //     this.node.style.width = `${this.w}px`; // ancho
  //     this.node.style.height = `${this.h}px`; // alto
  //     this.node.style.position = "absolute";
  //     this.node.style.top = `${this.y}px`; // posición inicial vertical
  //     this.node.style.left = `${this.x}px`; // posición inicial horizontal
  //   };
  // }











// ESTA ES LA VERSIÓN DE RUPIAS VERDE QUE FUNCIONAAAAAA
//       //creamos elemento en el DOM
//       this.node = document.createElement("img");
//       this.node.src = "./images/rupia.png";
//       gameBoxNode.append(this.node);

//        // Generar coordenadas aleatorias para la posición inicial de las rupias
//     // Coordenada X en los cuatro quintos del game-box (excluyendo el primer quinto ocupado por los pollos)
//     this.x = (Math.random() * (gameBoxNode.clientWidth * 4 / 5)) + gameBoxNode.clientWidth / 4;
//     this.y = Math.random() * (gameBoxNode.clientHeight * 9 / 10);

//     this.w = 40;
//     this.h = 35;

//     this.node.style.width = `${this.w}px`; // ancho
//     this.node.style.height = `${this.h}px`; // alto
//     this.node.style.position = "absolute";
//     this.node.style.top = `${this.y}px`; // posición inicial vertical
//     this.node.style.left = `${this.x}px`; // posición inicial horizontal
//   }
// }

//RUPIAS VERDES Y RUPIAS AZULES. BULEANO.
