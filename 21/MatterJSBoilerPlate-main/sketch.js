const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
var up;
var l;
var r;





function setup() {
	createCanvas(1200, 600);
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic : false,
        restitution : 0.1,
		friction : 0,
        destiny : 1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
	fill("red")
 World.add(world,ball);


	Engine.run(engine);

	groundObj = new ground(width/2,595,1200,10);
	leftSide = new ground(800,570,10,170);
    rightSide = new ground(910,570,10,170);
	up = new ground(width/2,5,1200,10);
	l = new ground(5,600,10,1200);
	r = new ground(1195,600,10,1200);


	rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
 
  groundObj.show();
  leftSide.show();
  rightSide.show();
  l.show();
  r.show();
  up.show();

  Engine.update(engine);

  if(keyCode === UP_ARROW){
	keyPressed();
  }

  code();

 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,{x : 0, y : 0},{x : 0.01, y : 0});
	}
}


	



