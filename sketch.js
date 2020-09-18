var fixedRect, movingRect;
var box1,box2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  box1=createSprite(100,500,30,30);
  box2=createSprite(1100,500,30,30);
  box1.velocityX=5;
  box2.velocityX=-5;
  box1.shapeColor="red";
}

function draw() {
  background(0,0,0);  
bounceOff(box1,box2);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}
