var wall,thickness;

var bullet,speed,weight;

var damage;


function setup() {

 createCanvas(1600,400);
 speed=random(223,321)
thickness=random(23,83)
  weight=random(30,52)

  bullet = createSprite(50, 200, 50, 5);
 bullet.velocityX = speed;

  bullet.velocityX=random(223,321);
  bullet.weight = random(223,321);

  bullet.shapeColor=color(255);

  bullet.debug=false;



  wall = createSprite(1200,200,thickness,height/2);

 wall.shapeColor=color(80,80,80);


 

}



function draw() {

 background(0); 

 if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage=0.5* weight *speed* s
 
 
   if(damage>10)
  {
 wall.shapeColor=color(255,0,0)
 
  }
 
 if(damage<10)
 {
 
   wall.shapeColor=color(0,255,0);
 }
  
 }
 

  


 





 drawSprites();

}

function hasCollided(Lbullet,Lwall)
{
 bulletRightEdge=lbullet.x+lbullet.width;
 wallLeftedge=lwall.x;
 if(bulletRigthEdge>=wallLeftEdge)
{
return true; 
}
return false; 
}