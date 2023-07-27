// class CrazyGame {
//     constructor() {
//         console.log("entrando en crazygame")
//         this.link = new Link();
    
//         //    this.centaleon = new Centaleon();
//         this.centaleonArr = [];
    
//         //    this.arañas = new Arañas();
//         this.arañasArr = [];
    
//         //    this.monstruos = new Monstruos();
//         this.monstruosArr = [];
    
//         this.pollos = new Pollos();
//         this.pollos2 = new Pollos(); 
//         this.pollos3 = new Pollos();
//         // this.pollosArr = []
    
//         // this.rupias = new Rupias;
//         this.rupiasArr = [];
    
//         this.rupiasCollected = 0;
    
//         this.vidasCollected = 3;
    
//         this.frames = 0;
//         this.isCrazyGameOn = true;
    
//         this.min = 200;
//         this.max = 1000;
//         this.randomNumber = Math.floor(
//           Math.random() * (this.max - this.min) + this.min
//         );
//       }
    
//     //   pollosAparecen = () => {
//     //     let numPollos = 3;
//     //     if (this.pollosArr.length < numPollos) {
//     //       this.pollosArr.push(new Pollos());
//     //     }
//     //   };
    
//       youWon = () => {
//         this.isCrazyGameOn = false;
//         gameScreenNode.style.display = "none"; //ocultar la pantalla de juego
//         youwonScreenNode.style.display = "flex"; //mostrar la pantalla final
//         deleteCountdown();
//       };
    
//       gameOver = () => {
//         const gameOverSound = document.querySelector("#collision-game-over-sound")
//         // const pantallaGameOverSound = document.querySelector("#game-over-sound")
//         // deleteCountdown()
//         // this.isCrazyGameOn = false;
//         gameScreenNode.style.display = "none"; //ocultar la pantalla de juego
//         gameoverScreenNode.style.display = "flex"; //mostrar la pantalla final
//         deleteCountdown();
//         gameOverSound.play();
//         // pantallaGameOverSound.play();
//       };
    
//       rupiasAparecen = () => {
//         if (this.rupiasArr.length === 0 || this.frames % 150 === 0) {
//           this.rupiasArr.push(new Rupias(true));
//         } else if (this.frames % 500 === 0) {
//           this.rupiasArr.push(new Rupias(false));
//         }
//       };
    
//       rupiasDesaparecen = () => {
//         setTimeout(() => {
//           if (this.rupiasArr.length > 2) {
//             const primeraRupia = this.rupiasArr[0];
//             primeraRupia.node.remove();
//             this.rupiasArr.shift();
//           }
//         }, 5000); // Desaparecer la primera rupia después de 4 segundos
//       };
    
//       collisionRupiasLink = () => {
//         let overlap = 5;
//         this.rupiasArr.forEach((cadaRupia, index) => {
//           if (
//             this.link.x - overlap < cadaRupia.x + cadaRupia.w &&
//             this.link.x - overlap + this.link.w - overlap > cadaRupia.x &&
//             this.link.y - overlap < cadaRupia.y + cadaRupia.h &&
//             this.link.y - overlap + this.link.h - overlap > cadaRupia.y
//           ) {
//             const rupiasCounterElement = document.getElementById("rupees");
//             const rupeesCollisionSound = document.getElementById("collision-rupees-sound");
//             const youWonSound = document.getElementById("victoria-sound")
//             const bluerupeesCollisionSound = document.getElementById("collision-blue-rupees-sound")
    
//             console.log(cadaRupia.addOnePoint); //estoy accediendo a la propiedad "addOnePoint" de cadaRupia
//             if (cadaRupia.addOnePoint === true) {
//               this.rupiasCollected += 1;
//               rupeesCollisionSound.play();
//             } else {
//               this.rupiasCollected += 5;
//               bluerupeesCollisionSound.play();
//             }
//             rupiasCounterElement.textContent = `Rupees: ${this.rupiasCollected}`;
    
//             gameBoxNode.removeChild(cadaRupia.node);
//             this.rupiasArr.splice(index, 1);
    
//             // rupeesCollisionSound.play();
    
//             if (this.rupiasCollected >= 5) {
//               this.youWon();
//               youWonSound.play();
//             }
//           }
//         });
//       };
    
//       centaleonesAparecen = () => {
//         let nuevoCentaleon;
//         if (
//           this.centaleonArr.length === 0 ||
//           this.frames % this.randomNumber === 0
//         ) {
//           if (this.rupiasCollected >= 20) {
//             nuevoCentaleon = new Centaleon(2.4);
//           } else {
//             nuevoCentaleon = new Centaleon(1.6);
//           }
//           this.centaleonArr.push(nuevoCentaleon);
//         }
//       };
    
//       centaleonesDesaparecen = () => {
//         //si el primer elemento del array ha salido de la vista,
//         if (this.centaleonArr[0].x < -150) {
//           this.centaleonArr[0].node.remove();
//           this.centaleonArr.shift();
//         }
//       };
    
//       collisionCentaleonesPollos = () => {
//         this.centaleonArr.forEach((cadaCentaleon, index) => {
//           if (
//             this.pollos.x < cadaCentaleon.x + cadaCentaleon.w &&
//             this.pollos.x + this.pollos.w > cadaCentaleon.x &&
//             this.pollos.y < cadaCentaleon.y + cadaCentaleon.h &&
//             this.pollos.y + this.pollos.h > cadaCentaleon.y
//           ) {
//             console.log("Colisión entre pollos y centaleones detectada!");
//             // Reducir una vida
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
    
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
    
//             //sonido pollos
//             const pollosCollisionSound =
//             document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
    
//             // Eliminar el centaleón del array
//             this.centaleonArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaCentaleon.node);
//           }
//         });
//       };
    
//       collisionCentaleonesPollos2 = () => {
//         this.centaleonArr.forEach((cadaCentaleon, index) => {
//           if (
//             this.pollos2.x < cadaCentaleon.x + cadaCentaleon.w &&
//             this.pollos2.x + this.pollos2.w > cadaCentaleon.x &&
//             this.pollos2.y < cadaCentaleon.y + cadaCentaleon.h &&
//             this.pollos2.y + this.pollos2.h > cadaCentaleon.y
//           ) {
//             console.log("Colisión entre pollos y centaleones detectada!");
//             // Reducir una vida
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
    
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
    
//             //sonido pollos
//             const pollosCollisionSound =
//             document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
    
//             // Eliminar el centaleón del array
//             this.centaleonArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaCentaleon.node);
//           }
//         });
//       };
    
//       collisionCentaleonesPollos3 = () => {
//         this.centaleonArr.forEach((cadaCentaleon, index) => {
//           if (
//             this.pollos3.x < cadaCentaleon.x + cadaCentaleon.w &&
//             this.pollos3.x + this.pollos3.w > cadaCentaleon.x &&
//             this.pollos3.y < cadaCentaleon.y + cadaCentaleon.h &&
//             this.pollos3.y + this.pollos3.h > cadaCentaleon.y
//           ) {
//             console.log("Colisión entre pollos y centaleones detectada!");
//             // Reducir una vida
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
    
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
    
//             //sonido pollos
//             const pollosCollisionSound =
//             document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
    
//             // Eliminar el centaleón del array
//             this.centaleonArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaCentaleon.node);
//           }
//         });
//       };
    
//       collisionCentaleonesLink = () => {
//         let overlap = 8;
//         this.centaleonArr.forEach((cadaCentaleon, index) => {
//           if (
//             this.link.x - overlap < cadaCentaleon.x + cadaCentaleon.w &&
//             this.link.x - overlap + this.link.w - overlap > cadaCentaleon.x &&
//             this.link.y - overlap < cadaCentaleon.y + cadaCentaleon.h &&
//             this.link.y - overlap + this.link.h - overlap > cadaCentaleon.y
//           ) {
//             const collisionSound = document.getElementById(
//               "collision-centaleones-sound"
//             );
//             collisionSound.play();
//             this.centaleonArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaCentaleon.node);
//           }
//         });
//       };
    
//       arañasAparecen = () => {
//         let nuevoArañas;
    
//         if (this.arañasArr.length === 0 || this.frames % this.randomNumber === 0) {
//           if (this.rupiasCollected >= 20) {
//             nuevoArañas = new Arañas(1.3); // Crear un nuevo objeto Arañas con velocidad 1.4
//           } else {
//             nuevoArañas = new Arañas(0.8); // Crear un nuevo objeto Arañas con velocidad 0.8
//           }
//           this.arañasArr.push(nuevoArañas); // Agregar el nuevo objeto al arreglo arañasArr
//         }
//         this.randomNumber = Math.floor(
//           Math.random() * (this.max - this.min) + this.min
//         );
//       };
    
//       arañasDesaparecen = () => {
//         //si el primer elemento del array ha salido de la vista,
//         if (this.arañasArr[0].x < -150) {
//           this.arañasArr[0].node.remove();
//           this.arañasArr.shift();
//         }
//       };
    
//       collisionArañasPollos = () => {
//         this.arañasArr.forEach((cadaAraña, index) => {
//           if (
//             this.pollos.x < cadaAraña.x + cadaAraña.w &&
//             this.pollos.x + this.pollos.w > cadaAraña.x &&
//             this.pollos.y < cadaAraña.y + cadaAraña.h &&
//             this.pollos.y + this.pollos.h > cadaAraña.y
//           ) {
//             // Reducir una vida
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
//             //sonido pollos
//             const pollosCollisionSound =
//               document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
//             // Eliminar el centaleón del array
//             this.arañasArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaAraña.node);
//           }
//         });
//       };
    
//       collisionArañasPollos2 = () => {
//         this.arañasArr.forEach((cadaAraña, index) => {
//           if (
//             this.pollos2.x < cadaAraña.x + cadaAraña.w &&
//             this.pollos2.x + this.pollos2.w > cadaAraña.x &&
//             this.pollos2.y < cadaAraña.y + cadaAraña.h &&
//             this.pollos2.y + this.pollos2.h > cadaAraña.y
//           ) {
//             // Reducir una vida
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
//             //sonido pollos
//             const pollosCollisionSound =
//               document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
//             // Eliminar el centaleón del array
//             this.arañasArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaAraña.node);
//           }
//         });
//       };
    
//       collisionArañasPollos3 = () => {
//         this.arañasArr.forEach((cadaAraña, index) => {
//           if (
//             this.pollos3.x < cadaAraña.x + cadaAraña.w &&
//             this.pollos3.x + this.pollos3.w > cadaAraña.x &&
//             this.pollos3.y < cadaAraña.y + cadaAraña.h &&
//             this.pollos3.y + this.pollos3.h > cadaAraña.y
//           ) {
//             // Reducir una vida
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
//             //sonido pollos
//             const pollosCollisionSound =
//               document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
//             // Eliminar el centaleón del array
//             this.arañasArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaAraña.node);
//           }
//         });
//       };
    
//       collisionArañasLink = () => {
//         let overlap = 8;
//         this.arañasArr.forEach((cadaAraña, index) => {
//           if (
//             this.link.x - overlap < cadaAraña.x + cadaAraña.w &&
//             this.link.x - overlap + this.link.w - overlap > cadaAraña.x &&
//             this.link.y - overlap < cadaAraña.y + cadaAraña.h &&
//             this.link.y - overlap + this.link.h - overlap > cadaAraña.y
//           ) {
//             const collisionSound = document.getElementById(
//               "collision-arañas-sound"
//             );
//             collisionSound.play();
//             //al notar la colisión...
//             this.arañasArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaAraña.node);
//           }
//         });
//       };
    
//       monstruosAparecen = () => {
//         let nuevoMonstruos;
//         if (
//           this.monstruosArr.length === 0 ||
//           this.frames % this.randomNumber === 0
//         ) {
//           if (this.rupiasCollected >= 20) {
//             nuevoMonstruos = new Monstruos(1.8); // Crear un nuevo objeto Monstruos con velocidad 2
//           } else {
//             nuevoMonstruos = new Monstruos(1.2); // Crear un nuevo objeto Monstruos con velocidad 1.3
//           }
    
//           this.monstruosArr.push(nuevoMonstruos); // Agregar el nuevo objeto al arreglo monstruosArr
//         }
//         this.randomNumber = Math.floor(
//           Math.random() * (this.max - this.min) + this.min
//         );
//       };
    
//       monstruosDesaparecen = () => {
//         //si el primer elemento del array ha salido de la vista,
//         if (this.monstruosArr[0].x < -150) {
//           this.monstruosArr[0].node.remove();
//           this.monstruosArr.shift();
//         }
//       };
    
//       collisionMonstruosPollos = () => {
//         let overlap = 2;
//         this.monstruosArr.forEach((cadaMonstruo, index) => {
//           if (
//             this.pollos.x + overlap < cadaMonstruo.x + cadaMonstruo.w &&
//             this.pollos.x + overlap + this.pollos.w + overlap > cadaMonstruo.x &&
//             this.pollos.y + overlap < cadaMonstruo.y + cadaMonstruo.h &&
//             this.pollos.y + overlap + this.pollos.h + overlap > cadaMonstruo.y
//           ) {
//             // Aquí se ha detectado la colisión con un monstruo
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
    
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
    
//             //sonido pollos
//             const pollosCollisionSound =
//               document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
    
//             // Eliminar el monstruo del array
//             this.monstruosArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaMonstruo.node);
//           }
//         });
//       };
    
//       collisionMonstruosPollos2 = () => {
//         let overlap = 2;
//         this.monstruosArr.forEach((cadaMonstruo, index) => {
//           if (
//             this.pollos2.x + overlap < cadaMonstruo.x + cadaMonstruo.w &&
//             this.pollos2.x + overlap + this.pollos2.w + overlap > cadaMonstruo.x &&
//             this.pollos2.y + overlap < cadaMonstruo.y + cadaMonstruo.h &&
//             this.pollos2.y + overlap + this.pollos2.h + overlap > cadaMonstruo.y
//           ) {
//             // Aquí se ha detectado la colisión con un monstruo
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
    
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
    
//             //sonido pollos
//             const pollosCollisionSound =
//               document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
    
//             // Eliminar el monstruo del array
//             this.monstruosArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaMonstruo.node);
//           }
//         });
//       };
    
//       collisionMonstruosPollos3 = () => {
//         let overlap = 2;
//         this.monstruosArr.forEach((cadaMonstruo, index) => {
//           if (
//             this.pollos3.x + overlap < cadaMonstruo.x + cadaMonstruo.w &&
//             this.pollos3.x + overlap + this.pollos3.w + overlap > cadaMonstruo.x &&
//             this.pollos3.y + overlap < cadaMonstruo.y + cadaMonstruo.h &&
//             this.pollos3.y + overlap + this.pollos3.h + overlap > cadaMonstruo.y
//           ) {
//             // Aquí se ha detectado la colisión con un monstruo
//             this.vidasCollected--;
//             const vidasCounterElement = document.querySelector("#vidas");
//             vidasCounterElement.textContent = `Pollos pacíficos: ${this.vidasCollected}`;
    
//             // Verificar si se han agotado las vidas
//             if (this.vidasCollected <= 0) {
//               this.gameOver();
//             }
    
//             //sonido pollos
//             const pollosCollisionSound =
//               document.getElementById("collision-pollos");
//             pollosCollisionSound.play();
    
//             // Eliminar el monstruo del array
//             this.monstruosArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaMonstruo.node);
//           }
//         });
//       };
    
//       collisionMonstruosLink = () => {
//         const monstOverlap = 35;
//         this.monstruosArr.forEach((cadaMonstruo, index) => {
//           if (
//             this.link.x - monstOverlap < cadaMonstruo.x + cadaMonstruo.w &&
//             this.link.x - monstOverlap + this.link.w - monstOverlap >
//               cadaMonstruo.x &&
//             this.link.y - monstOverlap < cadaMonstruo.y + cadaMonstruo.h &&
//             this.link.y - monstOverlap + this.link.h - monstOverlap > cadaMonstruo.y
//           ) {
//             const collisionSound = document.getElementById(
//               "collision-monstruos-sound"
//             );
//             collisionSound.play();
//             //al notar la colisión...
//             this.monstruosArr.splice(index, 1);
//             gameBoxNode.removeChild(cadaMonstruo.node);
//           }
//         });
//       };
  
//     crazyGameLoop = () => {
        
//       this.frames++;
  
//       // Lógica para mover a los pollos en cada cuadro del juego
//       this.pollos.move();
//       this.pollos2.move();
//       this.pollos3.move();
  
//       // this.centaleon.automaticMovement();
//       this.centaleonesAparecen();
//       this.centaleonesDesaparecen();
//       this.centaleonArr.forEach((cadaCentaleon) => {
//         cadaCentaleon.automaticMovement();
//       });
//       this.collisionCentaleonesPollos();
//       this.collisionCentaleonesPollos2();
//       this.collisionCentaleonesPollos3();
//       this.collisionCentaleonesLink();
  
//       this.arañasAparecen();
//       this.arañasDesaparecen();
//       this.arañasArr.forEach((cadaAraña) => {
//         cadaAraña.automaticMovement();
//       });
//       this.collisionArañasPollos();
//       this.collisionArañasPollos2();
//       this.collisionArañasPollos3();
//       this.collisionArañasLink();
  
//       this.monstruosAparecen();
//       this.monstruosDesaparecen();
//       this.monstruosArr.forEach((cadaMonstruo) => {
//         cadaMonstruo.automaticMovement();
//       });
//       this.collisionMonstruosPollos();
//       this.collisionMonstruosPollos2();
//       this.collisionMonstruosPollos3();
//       this.collision
//       this.collisionMonstruosLink();
  
//       this.rupiasAparecen();
//       this.rupiasDesaparecen();
//       this.collisionRupiasLink();
  
//       if (this.isCrazyGameOn === true) {
//         requestAnimationFrame(this.crazyGameLoop);
//       }
//     };
//   }