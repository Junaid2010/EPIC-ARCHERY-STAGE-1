const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, 400, 180, 150);
//create a player object from the Player class.

    player = new Player(150,125,50,180);

  computerBase = new ComputerBase(
    width - 300,
    400,
    180,
    150
  );
  computer = new Computer(
    width - 300,
    computerBase.body.position.y - 153,
    50,
    180
  );

  
}

function draw() {
  background(189);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
//call the display() function for the player object.
  player.display();
  

  computerBase.display();
  computer.display();
  

}