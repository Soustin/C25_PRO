const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin, dustbinImg;

function preload()
{
  dustbinImg = loadImage("Dustbin Image for crumpled balls 2 Project.png");
	
}

function setup() {
  createCanvas(1400, 700);

  dustbin = createSprite(1216, 465, 360, 210);
  dustbin.addImage(dustbinImg);
  dustbin.scale = (0.6);

  dustbin = createSprite(1105, 465, 360, 210);
  dustbin.addImage(dustbinImg);
  dustbin.scale = (0.6);

  dustbin = createSprite(1295, 465, 360, 210);
  dustbin.addImage(dustbinImg);
  dustbin.scale = (0.6);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100, 320, 100);
    box = new Box(1200, 555);
    //box2 = new Box(300, 265);
    //box3 = new Box(272.5, 280);
    // dustbin = new Dustbin(1200, 465, 360, 210);
    ground = new Ground(width/2, 575, width, 10);

	Engine.run(engine);
  
}


function draw() {
  background(0,255,255);
  textSize(30)
  fill(0,0,128)
  stroke(0,0,128);
  text("Instructions", 700, 50);

  stroke(40)
  fill(0, 255, 0)
  text("1.  Press Up Arrow to move the crumpled paper up", 400, 100);

  textSize(30)
  text("2.  Press Down Arrow to move the crumpled paper down", 400, 150);
  Engine.update(engine);
  rectMode(CENTER);

  dustbin.display();
  paper.display();
  box.display();
 
  //box2.display();
  //box3.display();
  ground.display();


  if(paper.x.position > 1){
    paper.y.position += 25100;
  }
  
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position, {x: 16, y: -47});
    // paper.x.position = -130;

  }
}