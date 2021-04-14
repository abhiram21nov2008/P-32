function setup() {
  createCanvas(1350,800);
  createSprite(200,400,40,40)
  createSprite(630, 300, 30, 30);
  createSprite(630, 250, 30, 30);
  createSprite(630, 200, 30, 30);
  createSprite(580, 300, 30, 30);
  createSprite(680, 300, 30, 30);
  createSprite(730, 300, 30, 30);
  createSprite(530, 300, 30, 30);
  createSprite(580, 250, 30, 30);
  createSprite(680, 250, 30, 30);
  createSprite(630, 325, 300, 10);
  
  
}

function draw() {
  background("black");  
  drawSprites();
}
function keyPressed(){
  (keyCode=32)
  var d=createSprite(100,100,300,1400);
  d.shapeColor=color("black")
}