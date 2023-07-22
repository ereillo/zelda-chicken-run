class Monstruos {

    constructor () {
          this.node = document.createElement("img")
          this.node.src = "./images/boboklin.png"
       gameBoxNode.append(this.node)

   
   
this.x = 800;
this.y = 40;
this.w = 150;
this.h = 100;

this.node.style.width = `${this.w}px`; // ancho 
this.node.style.height = `${this.h}px`; // alto
this.node.style.position = "absolute";
this.node.style.top = `${this.y}px`; //posición inicial vertical
this.node.style.left = `${this.x}px`; 
    }

 //aquí los métodos de los monstruos
 automaticMovement = () => {
    this.x -= 2
    this.positionUpdate();
   }

   positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
   }

}