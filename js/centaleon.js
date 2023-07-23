class Centaleon {

constructor () {
this.node = document.createElement("img")
this.node.src = "./images/centaleon.png"
gameBoxNode.append(this.node)

    
//posición y dimesión
this.x = gameBoxNode.offsetWidth;
this.y = 200;
this.w = 150;
this.h = 100;

this.node.style.width = `${this.w}px`; // ancho 
this.node.style.height = `${this.h}px`; // alto
this.node.style.position = "absolute";
this.node.style.top = `${this.y}px`; //posición inicial vertical
this.node.style.left = `${this.x}px`; 
}
    
automaticMovement = () => {
  this.x -= 0.5;
  this.positionUpdate();
}

positionUpdate = () => {
     this.node.style.left = `${this.x}px`; 
}
}