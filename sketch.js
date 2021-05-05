const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground;
var ball;
var box1,box2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;

  ground = new Ground (400, 370, 800, 20);
  

  box1 = new Box(225,100,50,100);
  box2 = new Box(200,200,50,50);


}

function draw() {
  background("black"); 
  Engine.update(engine)
  


  box1.display();
  box2.display();
  ground.display();
  //circle(ball.position.x , ball.position.y,50)
  drawSprites();
}