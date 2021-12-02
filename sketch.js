var chicken, chickenImage
var road, roadImage
var gameOver, gameImage
var restart, restartImage
var gameState = "play"
var gameState = "end"
var invisbleGround

function preload(){
 chickenImage = loadAnimation("Chicken.png")
 roadImage = loadAnimation("crossy-road.png")
 gameImage = loadImage("gameover.png")
 restartImage = loadImage("restart.png")
}

function setup() {
  createCanvas(600, 600);
invisibleGround = createSprite(400,380,400,10)
invisibleGround 

  road = createSprite(400,300,10,10)
  road.addAnimation("road", roadImage)
  road.velocityX=4

chicken = createSprite(100,450,10,10)
chicken.addAnimation("chicken", chickenImage)
chicken.scale = 0.2



gameOver = createSprite(300,300,10,10)
gameOver.addImage("gameover", gameImage)
gameOver.scale=0.35

restart = createSprite(300,370,10,10)
restart.addImage("restart", restartImage)
restart.scale = 0.06
}

function draw() {
  background(200);

if(gameState = "play"){
  gameOver.visible = false
  restart.visible = false
}

if(road.x >400){
  road.x = 200
}
if(keyIsDown="SPACE"){
  chicken.velocityY = -3
}
chicken.velocityY = chicken.velocityY + 0.8
  drawSprites();
}
