const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, shovel, ball1,ball2,ball3;
var chair1, chair2, umbrella1, umbrella2,ball,shovel, backgroundImg;



function setup(){
    backgroundImg = loadImage("./sprites/beach.jpg");
    canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width/2,height-10,width,20);
    chair1 = new Chair(100,500);
    chair2 = new Chair(800,500);
    umbrella1 = new Umbrella(300,500);
    umbrella2 = new Umbrella(900,500);
    ball = new Ball(700,500);
    shovel = new Shovel(1200,500);
    basket = new Basket(1000,500);



}

function draw(){
    background(backgroundImg);

    Engine.update(engine);
    ground.display();    
    chair1.display();    
    chair2.display();    
    umbrella1.display();    
    umbrella2.display();    
    ball.display();   
    shovel.display(); 
    basket.display(); 


}

