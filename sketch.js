var fixedRect, movingRect;
var gameObject1, gameobject2, gameobject3,gameobject4;

function setup() {

  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,50);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = 5; 

  movingRect = createSprite(400,500,80,30);
  movingRect.shapeColor = "red";
  movingRect.velocityY = -5;
  movingRect.debug = true;
  fixedRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
  
}

function draw() {
  background(255,255,255);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;


  /*if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
else {
  gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";

}
*/
bounceOff(movingRect,fixedRect);



  drawSprites();
}



