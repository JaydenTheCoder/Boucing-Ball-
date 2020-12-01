const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world, object;
var ground;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(400, 400);
  var object_options={ restitution:1.0 }
  object = Bodies.circle(200,100,20,object_options);
  World.add(world,object);
  var ground_options={ isStatic:true }
  ground = Bodies.rectangle(390,390,600,20,ground_options);
  World.add(world,ground);
} function draw() {
  background(0); Engine.update(engine);
  rectMode(CENTER);
  ellipse(object.position.x,object.position.y,20,20);
  rect(ground.position.x,ground.position.y,600,20);
  drawSprites();
}