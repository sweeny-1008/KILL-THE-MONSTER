const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backGround;

function preload()
{
backGround=loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  var backGround=createSprite(0,0,0,0);
  backGround.add("backGround",backimag)

}

function draw()
 {
  background("background");
  Engine.update(engine);
  
  drawSprites();
}

