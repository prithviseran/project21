var thickness,wall;
var bullet, speed, weight;

function preload(){
}


function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,5,50);
  bullet.shapeColor = "white";
  wall=createSprite(1200,200,thickness,hight/2);
  wall.shapeColor = "80,80,80";
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;
  bullet.collide(wall);

if(wall.x=bullet.x < (bullet.width+wall.width)/2){
  bullet.velocity=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if (deformation>180){
    bullet.shapeColor = "250,0,0";
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor = "230,230,0";
  }
  if(deformation<100){
    bullet.shapeColor = "0,255,0";
  }
}

if(hasColllided(bulllet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
}

  drawSprites();
  
  function hasColllided(bullet,wall){
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=walletLeftEdge){
    return true
    }
    else{
      return false;
    }
  }
}