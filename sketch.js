const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;
var engine,world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11;
var ball;
var ground;
var rope;
function setup(){
    createCanvas(1000,600);

    engine = Engine.create(); 
    world = engine.world;

    ground = new Ground(500,590,1000,10);
    b1 = new Box(100,100,50,50);
    b2 = new Box(100,100,50,50);
    b3 = new Box(100,100,50,50);
    b4 = new Box(100,100,50,50);
    b5 = new Box(100,100,50,50);
    b6 = new Box(100,100,50,50);
    b7 = new Box(250,100,50,50);
    b8 = new Box(250,100,50,50);
    b9 = new Box(250,100,50,50);
    b10 = new Box(250,100,50,50);
    b11 = new Box(250,100,50,50);
    ball = new Ball(500,300,50);
    rope = new Rope(ball.body,{x:400,y:250});
}

function draw(){
    background("skyblue");
    Engine.update(engine);

    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}