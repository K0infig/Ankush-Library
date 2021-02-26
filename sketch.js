var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;

  movingRect = createSprite(300,300, 40,100);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  gameObject1=createSprite(700,100,20,20);
  gameObject1.shapeColor ="green";
  gameObject1.velocityY =2;
  gameObject1.debug = true;

  gameObject2=createSprite(700,300,20,20);
  gameObject2.shapeColor ="purple";
  gameObject2.velocityY=-3;
  gameObject2.debug = true;

  gameObject3=createSprite(300,100,20,20);
  gameObject3.shapeColor ="green";
  gameObject3.debug = true;


  gameObject4=createSprite(400,100,20,20);
  gameObject4.shapeColor ="green";
  gameObject4.debug = true;

 
}

function draw() {
  background(0); 
  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  jumpBack(gameObject1,gameObject2);

 if(collisionDetection(movingRect,fixedRect)) {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
 }
 else{
   movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "red";

 }
  
  
  drawSprites();
}


