
var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,250, 50,80);
  movingRect.shapeColor = "Blue";
  fixedRect = createSprite(200,250,50,80);
  fixedRect.shapeColor = "Blue";
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("Black"); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 

  if(movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 && 
    fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2  &&
    movingRect.y - fixedRect.y < fixedRect.width / 2 + movingRect.width / 2 && 
    fixedRect.y - movingRect.y < fixedRect.width / 2 + movingRect.width / 2  ){

    movingRect.shapeColor = "Yellow";
    fixedRect.shapeColor = "Yellow";
  }
  else{
    movingRect.shapeColor = "Blue";
    fixedRect.shapeColor = "Blue";
  }
  drawSprites();
}