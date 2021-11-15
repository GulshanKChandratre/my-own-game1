function setup() {
  createCanvas(425, 400);
  backgroundImage = loadImage("nature.jpeg");
  mazeImage = loadImage("maze.jpg");
  lionImage = loadImage("lion.png");
  tigerImage = loadImage("1.png");
  snakeImage = loadImage("alien.png");
  survivalImage = loadImage("survival.png");
  manImage = loadImage("1copy.png");
  shipImage = loadImage("spaceship.png");
  spaceImage = loadImage("space.png");
  laserImage = loadImage("laser.png");
  asteroid1 = loadImage("as1.png");
  asteroid2 = loadImage("as2.png");
  asteroid3 = loadImage("as3.png");
  blastImage = loadImage("blast.png");
  explasionImage = loadImage("blast.png");
  p1 = createSprite(250,600);
  p1.setCollider("rectangle",70,-27,5,265,156);
  p1.visible = false;
  p2 = createSprite(250,600); 
  p2.setCollider("rectangle",-70,-27,5,265,24);
  p2.visible = false;

  man = createSprite(25, 13, 10, 10);
  man.addImage(manImage);
  man.scale = 0.1;

  cardboard1 = createSprite(0, 35, 120, 15);
  cardboard1.shapeColor = "lightblue";

  cardboard2 = createSprite(100, 0, 15, 140);
  cardboard2.shapeColor = "lightblue";

  cardboard3 = createSprite(100, 70, 120, 15);
  cardboard3.shapeColor = "lightblue";

  cardboard4 = createSprite(7, 120, 15, 120);
  cardboard4.shapeColor = "lightblue";

  cardboard5 = createSprite(118, 110, 152, 15);
  cardboard5.shapeColor = "lightblue";

  cardboard6 = createSprite(197, 70, 15, 95);
  cardboard6.shapeColor = "lightblue";

  cardboard7 = createSprite(160, 30, 60, 15);
  cardboard7.shapeColor = "lightblue";

  cardboard8 = createSprite(240, 70, 15, 95);
  cardboard8.shapeColor = "lightblue";

  cardboard9 = createSprite(300, 30, 110, 15);
  cardboard9.shapeColor = "lightblue";

  cardboard10 = createSprite(390, 30, 15, 160);
  cardboard10.shapeColor = "lightblue";

  cardboard11 = createSprite(332, 65, 105, 15);
  cardboard11.shapeColor = "lightblue";

  cardboard12 = createSprite(110, 150, 190, 15);
  cardboard12.shapeColor = "lightblue";

  cardboard13 = createSprite(129, 129, 15, 26);
  cardboard13.shapeColor = "lightblue";

  cardboard14 = createSprite(330, 125, 15, 65);
  cardboard14.shapeColor = "lightblue";

  cardboard15 = createSprite(285, 110, 76, 15);
  cardboard15.shapeColor = "lightblue";

  cardboard16 = createSprite(240, 180, 15, 75);
  cardboard16.shapeColor = "lightblue";

  cardboard17 = createSprite(280, 180, 15, 75);
  cardboard17.shapeColor = "lightblue";

  cardboard18 = createSprite(260, 150, 27, 15);
  cardboard18.shapeColor = "lightblue";

  cardboard19 = createSprite(180, 185, 105, 15);
  cardboard19.shapeColor = "lightblue";

  cardboard20 = createSprite(380, 140, 40, 15);
  cardboard20.shapeColor = "lightblue";

  cardboard21 = createSprite(330, 190, 95, 15);
  cardboard21.shapeColor = "lightblue";

  cardboard22 = createSprite(330, 170, 15, 27);
  cardboard22.shapeColor = "lightblue";

  cardboard24 = createSprite(121, 205, 15, 55);
  cardboard24.shapeColor = "lightblue";

  cardboard25 = createSprite(85, 225, 15, 90);
  cardboard25.shapeColor = "lightblue";

  cardboard26 = createSprite(25, 190, 55, 15);
  cardboard26.shapeColor = "lightblue";

  cardboard27 = createSprite(187, 225, 121, 15);
  cardboard27.shapeColor = "lightblue";

  cardboard28 = createSprite(170, 262, 156, 15);
  cardboard28.shapeColor = "lightblue";

  cardboard29 = createSprite(205, 243, 15, 23);
  cardboard29.shapeColor = "lightblue";

  cardboard30 = createSprite(53, 225, 50, 15);
  cardboard30.shapeColor = "lightblue";

  cardboard31 = createSprite(45, 300, 15, 90);
  cardboard31.shapeColor = "lightblue";

  cardboard32 = createSprite(31, 300, 15, 15);
  cardboard32.shapeColor = "lightblue";

  cardboard33 = createSprite(280, 240, 15, 60);
  cardboard33.shapeColor = "lightblue";

  cardboard34 = createSprite(195, 300, 285, 15);
  cardboard34.shapeColor = "lightblue";

  cardboard35 = createSprite(330, 260, 15, 70);
  cardboard35.shapeColor = "lightblue";

  cardboard36 = createSprite(357, 270, 40, 15);
  cardboard36.shapeColor = "lightblue";

  cardboard38 = createSprite(380, 310, 35, 15);
  cardboard38.shapeColor = "lightblue";

  cardboard39 = createSprite(370, 330, 15, 30);
  cardboard39.shapeColor = "lightblue";

  cardboard40 = createSprite(83, 337, 62, 15);
  cardboard40.shapeColor = "lightblue";

  cardboard41 = createSprite(106, 391, 40, 15);
  cardboard41.shapeColor = "lightblue";

  cardboard42 = createSprite(50, 391, 100, 15);
  cardboard42.shapeColor = "lightblue";

  cardboard43 = createSprite(262, 337, 201, 15);
  cardboard43.shapeColor = "lightblue";

  cardboard44 = createSprite(248, 391, 270, 15);
  cardboard44.shapeColor = "lightblue";

  cardboard45 = createSprite(390, 210, 15, 200);
  cardboard45.shapeColor = "lightblue";

  snake = createSprite(130, 350, 50, 50);
  snake.scale = 0.1;
  snake.addImage(snakeImage);

  survivalkit = createSprite(400, 350, 50, 50);
  survivalkit.addImage(survivalImage);
  survivalkit.scale = 0.4;

  tiger = createSprite(100, 165, 10, 10);
  tiger.scale = 0.2;
  tiger.addImage(tigerImage);
  tiger.velocityX = 2;

  ship = createSprite(100,165,10,10);
  ship.addImage(shipImage);
  ship.visible = false;
 
  space = createSprite(250,350,30,20);
  space.addImage(spaceImage);
  space.velocityY = (5 +10);

  asteroidGroup = new Group;
  laserGroup = new Group;

}

function draw() {
  background(backgroundImage);
 
 if (cardboard6.isTouching(tiger)) {
  tiger.velocityX = -2;
}
if (cardboard4.isTouching(tiger)) {
  tiger.velocityX = 2;
}
if (man.isTouching(cardboard1)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard2)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard3)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard4)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard5)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard6)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard7)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard8)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard9)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard10)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard11)) {
  man.position.x = 25;
  man.position.y = 13;
}


if (man.isTouching(cardboard13)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard14)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard15)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard16)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard17)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard18)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard19)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard20)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard21)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard22)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard24)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard25)) {
  man.position.x = 25;
  man.position.y = 13;
}

if (man.isTouching(cardboard27)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard28)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard29)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard30)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard31)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard32)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard33)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard34)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard35)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard36)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard38)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard39)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard40)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard42)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard43)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard44)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (man.isTouching(cardboard4)) {
  man.position.x = 25;
  man.position.y = 13;
}
if (tiger.isTouching(cardboard16)) {
  tiger.velocityX = -2;
}
if (tiger.isTouching(cardboard4)) {
  tiger.velocityX = 2;
}
if (man.isTouching(tiger)) {
  man.position.x = 25;
  man.position.y = 13;

}
if (man.isTouching(cardboard44)){
  snake.bounceOff(cardboard44);
}

if (man.isTouching(survivalkit)){
  cardboard1.visible = false;
  cardboard2.visible = false;
  cardboard3.visible = false;
  cardboard4.visible = false;
  cardboard5.visible = false;
  cardboard6.visible = false;
  cardboard7.visible = false;
  cardboard8.visible = false;
  cardboard9.visible = false;
  cardboard10.visible = false;
  cardboard11.visible = false;
  cardboard12.visible = false;
  cardboard13.visible = false;
  cardboard14.visible = false;
  cardboard15.visible = false;
  cardboard16.visible = false;
  cardboard17.visible = false;
  cardboard18.visible = false;
  cardboard19.visible = false;
  cardboard20.visible = false;
  cardboard21.visible = false;
  cardboard22.visible = false;
  cardboard24.visible = false;
  cardboard25.visible = false;
  cardboard26.visible = false;
  cardboard27.visible = false;
  cardboard28.visible = false;
  cardboard29.visible = false;
  cardboard30.visible = false;
  cardboard31.visible = false;
  cardboard32.visible = false;
  cardboard33.visible = false;
  cardboard34.visible = false;
  cardboard35.visible = false;
  cardboard36.visible = false;
  cardboard38.visible = false;
  cardboard39.visible = false;
  cardboard40.visible = false;
  cardboard41.visible = false;
  cardboard42.visible = false;
  cardboard43.visible = false;
  cardboard44.visible = false;
  cardboard45.visible = false;
  ship.visible = true;

  if(space.y > 800) {
    space.y = 300;
  }
  shoot = shoot - 1;
  if(keyDown("space") && shoot < 460) {
    laser = createSprite(spaceShip.x,spaceShip.y - 130);
    laser.addImage(laserImage);
    laser.velocityY = -8;
    laser.scale = 0.7;
    laserGroup.add(laser);
    shoot = laser.y;
  }  
  if(keyDown("right") && spaceShip.x < 1400) {
    spaceShip.x = spaceShip.x + 10;
    p1.x = p1.x + 10;
    p2.x = p2.x + 10;
  }
  if(keyDown("left") && spaceShip.x > 50) {
    spaceShip.x = spaceShip.x - 10;
    p1.x = p1.x - 10;
    p2.x = p2.x - 10;
  }
  if(asteroidGroup.isTouching(p2) || asteroidGroup.isTouching(p1)) {
    asteroidGroup.destroyEach();
    var blast = createSprite(spaceShip.x,spaceShip.y - 50);
    blast.addImage(blastImage);
    blast.lifetime = 25;
    spaceShip.destroy();
  }
  if(asteroidGroup.isTouching(laserGroup)) {
    asteroidGroup.destroyEach();
    laserGroup.destroyEach();
    score = score + 1;
  
}
}

  if (keyDown("left")) {
    man.x = man.x - 3;
  }
  if (keyDown("right")) {
    man.x = man.x + 3;
  }
  if (keyDown("up")) {
    man.y = man.y - 3;

  }
  if (keyDown("down")) {
    man.y = man.y + 3;

  }
  if(keyDown("space")){
    snake.destroy();
  }
  if (man.collide(survivalkit)) {
    textSize(40);
    text("You Got Survival Kit",1, 200);
    fill("red"); 
 }
 
 asteroids();
  drawSprites();
}
function asteroids() {
  if(frameCount % 70 === 0) {
  
    var asteroid = createSprite(Math.round(random(50,1350)),-20);
    asteroid.velocityY = (6 + 10);
    asteroid.lifetime = 200;
    asteroid.scale = random(0.4,0.5);
    //asteroid.debug = true;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: asteroid.addImage(asteroid1);
              asteroid.setCollider("circle",-80,10,160);
              break;
      case 2: asteroid.addImage(asteroid2);
              asteroid.setCollider("circle",50,0,150);
              break;
      case 3: asteroid.addImage(asteroid3);
              asteroid.setCollider("circle",0,0,170)
      default: break;
    }
    
    //console.log(asteroid.x);
    asteroidGroup.add(asteroid);
  }
}