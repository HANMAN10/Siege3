const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground2, ground3;
var score = 0;

// Left side blocks
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15,
block16;
// Right side blocks
var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var pentagon, slingShot;

function setup(){

  createCanvas(1200,400)

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 390, 1200, 20);

  ground2 = new Ground(390, 300, 250, 20); 

  ground3 = new Ground(830, 195, 200, 20);

  // Left side blocks
  // level 4
  block1 = new Box(300, 275, 30, 40);
  block2 = new Box(330, 275, 30, 40);
  block3 = new Box(360, 275, 30, 40);
  block4 = new Box(390, 275, 30, 40);
  block5 = new Box(420, 275, 30, 40);
  block6 = new Box(450, 275, 30, 40);
  block7 = new Box(480, 275, 30, 40);
  // level 3
  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);
  // level 2
  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30 , 40);
  // level 1
  block16 = new Box(390, 155, 30 , 40);

  // Right side blocks
  // level 3
  block17 = new Box(770, 175, 30, 40);
  block18 = new Box(800, 175, 30, 40);
  block19 = new Box(830, 175, 30, 40);
  block20 = new Box(860, 175, 30, 40);
  block21 = new Box(890, 175, 30, 40);
  // level 2
  block22 = new Box(800, 150, 30, 40);
  block23 = new Box(830, 150, 30, 40);
  block24 = new Box(860, 150, 30, 40);
  // level 1
  block25 = new Box(830, 130, 30, 40);
  
  pentagon = new Pentagon(100, 100, 20, 20);
  slingShot = new SlingShot(pentagon.body, {x: 200, y: 100});

}

function draw(){
  background(56, 44, 44);

  Engine.update(engine);

  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();  
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();  
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();


  pentagon.display();
  slingShot.display();

  textSize(20);
  fill("white");
  text("Score: " + score, 1100, 40);
}

function mouseDragged() {

  Matter.Body.setPosition(pentagon.body, {x: mouseX, y: mouseY})
} 

function mouseReleased() {

  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
      slingShot.attach(pentagon.body);
  }
}