class Pollos {
  constructor() {
    //creamos elemento en el DOM
    this.node = document.createElement("img");
    this.node.src = "./images/pollo.png";
    gameBoxNode.append(this.node);

    // Generar coordenadas aleatorias para la posición inicial del pollo dentro del primer quinto del game-box
    this.x = Math.random() * (gameBoxNode.clientWidth / 4);
    this.y = Math.random() * gameBoxNode.clientHeight;

    this.w = 60;
    this.h = 55;

    this.node.style.width = `${this.w}px`; // ancho
    this.node.style.height = `${this.h}px`; // alto
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`; //posición inicial vertical
    this.node.style.left = `${this.x}px`; //posición inicial horizontal

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
    // Verificar límites del eje X
      // Se verifica si la posición x del objeto es menor o igual a 0 o si la posición x más el ancho (w) del objeto es mayor que una cuarta parte del ancho del contenedor (gameBoxNode.clientWidth / 4). 
      //Esto se hace con la condición if (this.x <= 0 || this.x + this.w > gameBoxNode.clientWidth / 4).
      // Si se cumple la condición anterior, se invierte la dirección en el eje X multiplicando la velocidad (speedX) por -1. 
      //Esto se hace con la línea this.speedX *= -1;.
      // Luego, se ajusta la posición x del objeto según el límite alcanzado. Si la posición x es menor o igual a 0, se ajusta la posición a 0 con la línea this.x = 0;. 
      // Si la posición x más el ancho (w) del objeto es mayor que el límite derecho, se ajusta la posición al límite derecho restando el ancho del objeto al límite derecho con la línea this.x = gameBoxNode.clientWidth / 4 - this.w;.
      // De esta manera, si el objeto alcanza el borde izquierdo o derecho del primer tercio del contenedor, se invertirá la dirección en el eje X y se ajustará la posición x del objeto para evitar que se salga de esos límites.
      if (this.x <= 0 || this.x + this.w > gameBoxNode.clientWidth / 4) {
      this.speedX *= -1;
      if (this.x <= 0) {
        this.x = 0; // Ajustar la posición a 0 si alcanza el borde izquierdo
      } else {
        this.x = gameBoxNode.clientWidth / 4 - this.w; // Ajustar la posición al límite derecho
      }
    }

    // Verificar límites del eje Y
    if (this.y <= 0 || this.y + this.h >= gameBoxNode.clientHeight) {
      this.speedY *= -1;
      if (this.y <= 0) {
        this.y = 0; // Ajustar la posición a 0 si alcanza el borde superior
      } else {
        this.y = gameBoxNode.clientHeight - this.h; // Ajustar la posición al límite inferior
      }
    }

    // Actualizar la posición en el DOM
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  };
}
