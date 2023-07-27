class Arañas {

    constructor (velocity) {
          this.node = document.createElement("img")
          this.node.src = "./images/araña.png"
       gameBoxNode.append(this.node)

   
   
this.x = gameBoxNode.offsetWidth;
this.y = 400;
this.w = 110;
this.h = 70;

this.node.style.width = `${this.w}px`; // ancho 
this.node.style.height = `${this.h}px`; // alto
this.node.style.position = "absolute";
this.node.style.top = `${this.y}px`; //posición inicial vertical
this.node.style.left = `${this.x}px`; 

this.speed = velocity
    }
   
automaticMovement = () => {
this.x -= this.speed;
this.positionUpdate();
}
      
positionUpdate = () => {
this.node.style.left = `${this.x}px`; 
}
}