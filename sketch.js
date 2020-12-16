var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;


const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine=Engine.create();
world=engine.world;
Engine.run(engine);

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(400,665,800,20);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	//Engine.run(engine);
	//boxD=new Box(400,100,200,20);	 

rectD=new Rect(400,650,200,20);
rectR=new RectR(95,645,20,100);
rectL=new RectL(505,620,20,100);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y;
  //boxD.display();
  //ground.display();
keyPressed();
//Engine.update();
rectD.display();
rectR.display();
rectL.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);
  }
}



