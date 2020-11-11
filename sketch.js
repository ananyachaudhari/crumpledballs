const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	box1= new Dustbin(); 
	ground= new Ground(400,580,800,20); 
	ball= new Paper(50,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
   ball.display();
    ground.display();

  drawSprites();
 
}
function keyPressed()
{
	 if(keyCode===UP_ARROW)
	 {
		  Matter.Body.applyForce(ball.body,ball.body.position,{x:145,y:-145});
		 }
		 }



