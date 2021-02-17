var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(400, 400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(220);
  wall=createSprite(1200,200,thickness,hight/2)
  bullet.velocityX = speed;
}

function hasCollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
  return false;
}

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5,weight,speed,speed/(thickness);
  if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
  
  if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
}

