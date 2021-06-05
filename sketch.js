const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,bgImg
var snows=[]
function preload(){
  bgImg=loadImage("snow3.jpg");
}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;


  bg = createSprite(600, 300, 1200, 600);
  bg.addImage(bgImg);
  bg.scale=1.2;

  if(frameCount%10==0){
    for(var i=0;i<100;i++){
      snows.push(new Snow(random(0,1200),random(0,200)));
    }
  }
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  drawSprites();
  for(var i=0;i<snows.length;i++){
    snows[i].display();
    snows[i].resetSnow();
  }
  
  
}