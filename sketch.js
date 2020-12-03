
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var ground;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new Dustbin(1110,760,200,20);
  dustbin2 = new Dustbin(1019,700,20,100);
  dustbin3 = new Dustbin(1200,700,20,100);
  
  ground = new Ground(700,770,1400,10);

  paper1 = new Paper(200,700,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paper1.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {

  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.3,y:-0.8});
  
  }
}




