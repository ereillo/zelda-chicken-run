# ZELDA: CHICKEN RUN

## [Play the game!](https://ereillo.github.io/zelda-chicken-run/)

(./images/logo2.png)

# Description

<p>Zelda: Chicken Run is a game based on the legendary saga The Legend of Zelda in which you'll have to stop the enemies from attacking the chickens and unleash their destructive power. You'll have one minute to get it, while you try to get the 30 rupees necessary to get the Master Sword that will allow you to win. </p>

# Main Functionalities

<ul>
  <li>Link will move through the game box clickin the arrows up, left, right and down.</li>
  <li>There's a one minute timer which will show you the time left to get the 30 rupees. If you don't reach it, you loose the game.</li>
  <li>The enemies will appear from the right side of the game box and move automatically to the left looking to attack the chickens. If 3 chickens are hitten by the enemies, you loose.</li>
  <li>By touching one enemy, it will dessapear from its line.</li>
  <li>Eventually, enemies will move faster to make the end of the game more challenging.</li>
  <li>Rupees will appear randomly through the game box. You can collect them just by touching them. Green rupees will be worth a point and blue ones, five. You have to get 30 to win the game./li>
</ul>

# Backlog Functionalities

<ul>
  <li>Adding another level more challenging and without the limitation of the timer. Get all the rupees you can until you die!</li>
  <li>Adding a extra enemy that can hit Link and kill him</li>
  <li>Adding more items to play with enemies and Link speed</li>
  <li>Improve Links movement</li>
</ul>

# Technologies Used

<ul>
  <li>HTML</li>
  <li>JavaScript</li>
  <li>DOM Manipulation</li>
  <li>JS Classes</li>
  <li>Local Storage</li>
  <li>JS Audio() and JS Image()</li>
</ul>

# States

<ul>
  <li>Start Screen</li>
  <li>Game Screen</li>
  <li>You Won Screen</li>
  <li>Game Over Screen</li>
</ul>

# Proyect Structure

## main.js

<ul>
  <li>buildDom();</li>
  <li>startGame();</li>
  <li>reStartGame();</li>
  <li>addEventListeners();</li>
</ul>

## game.js

<ul>
  <li>this.link;</li>
  <li>this.centaleonArr;</li>
  <li>this.arañasArr;</li>
  <li>this.monstruosArr;</li>
  <li>this.pollos;</li>
  <li>this.pollos2;</li>
  <li>this.pollos3;</li>
  <li>this.rupiasArr;</li>
  <li>this.rupiasCollected;</li>
  <li>this.vidasCollected;</li>
  <li>adjustVolume();</li>
  <li>youWon();</li>
  <li>gameOver();</li>
  <li>rupiasAparecen(), rupiasDesaparecen(), collisionRupiasLink();</li>
  <li>centaleonesAparecen(), centaleonesDesaparecen(), collisionCentaleonesPollos(), collisionCentaleonesLink();</li>
  <li>arañasAparecen(), arañasDesaparecen(), collisionArañasPollos(), collisionArañasLink();</li>
  <li>MonstruosAparecen(), MonstruosDesaparecen(), collisionMonstruosPollos(), collisionMonstruosLink();</li>
  <li>gameLoop();</li>
</ul>

## link.js

<ul>
  <li>buildDom()</li>
  <li>this.x;</li>
  <li>this.y;</li>
  <li>this.w;</li>
  <li>this.h;</li>
  <li>moveUp(), moveDown(), moveLeft(), moveRight();</li>
  </ul>

## pollos.js

<ul>
<li>buildDom()</li>
  <li>this.x;</li>
  <li>this.y;</li>
  <li>this.w;</li>
  <li>this.h;</li>
  <li>this.speedX;</li>
  <li>this.speedY;</li>
  <li>move();</li>
  </ul>
  
## arañas.js, centaleones.js, monstruos.js

<ul>
  <li>buildDom()</li>
  <li>this.x;</li>
  <li>this.y;</li>
  <li>this.w;</li>
  <li>this.h;</li>
  <li>automaticMovement();</li>
  <li>positionUpdate;</li>
</ul>

## contador.js

<ul>
  <li>countdown();</li>
  <li>uptadeScore();</li>
  <li>deleteCountdown();</li>
</ul>

## rupias.js

<ul>
  <li>buildDom()</li>
  <li>this.x;</li>
  <li>this.y;</li>
  <li>this.w;</li>
  <li>this.h;</li>
</ul>

# Extra Links
## Trello
[Link] (https://excalidraw.com/#json=mW3kc2mUBGX7IHVV00_la,7Au6mcwubFJYGpxfnEAfXQ)

## Deploy
[Link] (https://ereillo.github.io/zelda-chicken-run/)

