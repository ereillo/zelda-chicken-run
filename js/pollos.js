class Pollos {

    constructor(){

      //creamos elemento en el DOM
        this.node = document.createElement("img");
        this.node.src = "./images/pollo.png";
        gameBoxNode.append(this.node);
    
        // Generar coordenadas aleatorias para la posición inicial del pollo dentro del primer quinto del game-box
        this.x = Math.random() * (gameBoxNode.clientWidth / 4);
        this.y = Math.random() * (gameBoxNode.clientHeight);
    
        this.w = 60;
        this.h = 55;
    
        this.node.style.width = `${this.w}px`; // ancho 
        this.node.style.height = `${this.h}px`; // alto
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`; //posición inicial vertical
        this.node.style.left = `${this.x}px`;  //posición inicial horizontal
    
        // Velocidades de movimiento en el eje X e Y (inclinado)
        this.speedX = 2;
        this.speedY = 1;

        let isPolloMovingRight = true;
        let isPolloMovingDown = true;
      }
    
      // Método para mover al pollo
  move = () => {
    // Actualizar la posición en el eje X e Y de forma inclinada
    this.x += this.speedX;
    this.y += this.speedY;

    // Verificar que el pollo no se salga del primer cuarto del game-box
    if (this.x <= 0 || this.x + this.w >= gameBoxNode.clientWidth / 4) {
      this.speedX *= -1; // Invertir la dirección en el eje X si alcanza el borde izquierdo o derecho del primer tercio
    }
    if (this.y <= 0 || this.y + this.h >= gameBoxNode.clientHeight) {
      this.speedY *= -1; // Invertir la dirección en el eje Y si alcanza el borde superior o inferior del primer tercio
    }

    // Actualizar la posición en el DOM
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }
    }