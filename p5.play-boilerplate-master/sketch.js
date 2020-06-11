const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var table1;



function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  table1 = new Table(200,200,50,50);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  table1.display();
}