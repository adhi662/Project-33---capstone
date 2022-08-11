const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var backgroundImg;
var hour;
var boy1, snowImg1, snowImg2, snowImg3;
var snow, snow1, snow2, snow3, snow4, snow5;


var bg = "snow2.jpg";
var bg = "snow3.jpg";
var bg = "snow4.webp";
var bg = "snow5.webp";
var boy1 = "boy1.jpg";

function preLoad(){
  getBackgroundImg();
  boyImg = addImage("boy1.jpg");
  snowImg1 = addImage("snow2.jpg");
  snowImg2 = addImage("snow3.jpg");
  snowImg3 = addImage("snow4.webp");
  boyImg = loadImage("boy1.jpg");
  snow1 = loadImage("snow2.jpg");
  snow2 = loadImage("snow3.jpg");
  snow3 = loadImage("snow4.webp");
  snow4 = loadImage("snow5.webp");
  snow5 = loadAnimation("snow4.webp","snow5.webp");

}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(backgroungImg)
     background(backgroundImg);

     Engine.update(engine);

     if(hour>=12){
      text("Time : "+ hour%12 + "PM", 50,100);
     }else if(hour==0){
      text("Time : 12 AM", 100,100);
     }else{
      text("Time : "+ hour%12 + "AM", 50,100);
     }

}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();

  var datetime = response.JSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=0 && hour<18){
    snowImg1 = "snow2.jpg";
    snow3 = "snow4.webp";
    snow4 = "snow5.webp"
    boy1 = "boy1.jpg";

  }
  else{
    snow2 = "snow3.jpg";
    snow3 = "snow4.webp";
    snow4 = "snow5.webp";
    boy1 = "boy1.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  
}
