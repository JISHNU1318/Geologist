const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ground=Matter.Bodies.rectangle(400,680,800,50,{isStatic:true});
	Matter.World.add(world,ground);
    
	hammer1 = new Hammer(200,200);
	stone1 = new Stone();
	sand1 = new Sand(500,200);
	sand2 = new Sand(100,500);
	sand3 = new Sand(600,400);
	sand4 = new Sand(200,650);
	sand5 = new Sand(400,400);
	sand6 = new Sand(256,369);
	sand7 = new Sand(482,512);
	sand8 = new Sand(620,200);
	sand9 = new Sand(700,200);
	sand10 = new Sand(505,100);
	sand11 = new Sand(700,50);
	sand12 = new Sand(40,200);
	sand13 = new Sand(400,60);

	rubber1 = new Rubber();

	iron1 = new Iron();


	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  
  hammer1.display();
  Matter.Engine.update(engine);
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();

  stone1.display();

  rubber1.display();

  iron1.display();
  
  drawSprites();
 
}



