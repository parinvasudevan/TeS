
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}
var  engine, world;

function setup() {
	createCanvas(800, 700);

  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
  world = engine.world;
  
  //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);


	Engine.run(engine);
  zone1 = new redzone (510,590,30,80);

  zone2 = new redzone (250,590,30,80);

  zone3 = new redzone (380,650,299,30);

paper = new paper (200,650,30,30);
}






  



function draw() {
  rectMode(CENTER);
  background(0);

  zone1.display();
zone2.display();
zone3.display();  
  
paper.display


  drawSprites();
 
}



