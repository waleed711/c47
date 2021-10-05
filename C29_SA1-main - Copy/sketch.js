const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var character,charachterimg,character2,characterimg2
var flagred,redflag
var flagblue,blueflag
var map
var bg 
function setup() 
{
  createCanvas(windowWidth,windowHeight-10);
  engine = Engine.create();
  world = engine.world;
  character = createSprite(10,10,50,50)
  character.addImage("charachterimg",charachterimg)
  character.scale = 0.4
  character2 = createSprite(100,450,50,50)
  character2.addImage("characterimg2",characterimg2)
  character2.scale = 0.4
flagred = createSprite(40,windowHeight/2)
flagblue = createSprite(windowWidth-30,windowHeight/2)
flagred.addImage("redflag",redflag)
flagblue.addImage("blueflag",blueflag)
flagred.scale = 0.3
flagblue.scale = 0.3
 for(var i=300;i<windowWidth;i=i+150){
  var hii=Math.round(random(0,12))
 
for(var u=0;u<1100;u=u+150){

  var hi=Math.round(random(10,150))
 
  maze(i+hii,u+hi)
  //console.log(hi)
  }
}
}

function preload(){
charachterimg=loadImage("sprite_1.png")
characterimg2=loadImage("sprite_0.png")
redflag=loadImage("coding.png")
blueflag=loadImage("images.png")
bg=loadImage("download.jpg")
}
function draw() 
{
  background(bg);
  Engine.update(engine);
drawSprites()
movement()
movement2()

}
function movement(){
if(keyDown("W")){
  character.y=character.y-3
}
if(keyDown("A")){
  character.x=character.x-3
}
if(keyDown("S")){
  character.y=character.y+3
}
if(keyDown("D")){
  character.x=character.x+3
}
}

function movement2(){
  if(keyDown("UP")){
    character2.y=character2.y-3
  }
  if(keyDown("LEFT")){
    character2.x=character2.x-3
  }
  if(keyDown("DOWN")){
    character2.y=character2.y+3
  }
  if(keyDown("RIGHT")){
    character2.x=character2.x+3
  }
  }

function maze(x,y){
var x,y,width,hieght


// for(var i = 100;i<windowWidth-300;i=i+220){

// width = Math.round(random(60,200))
// hieght = Math.round(random(10,30))
// x = Math.round(random(300,windowWidth-300))
// i = x
// map = createSprite(i,y,width,hieght)
// }
// console.log(width)
// console.log(hieght)

// for(var i = 250;i<1250;i=i+200){
//   width = Math.round(random(60,150))
//   hieght = Math.round(random(10,30))
//   x = Math.round(random(10,50))
map = createSprite(x,y,100,20)

// map2 = createSprite(x,y,20,50)
// map3 = createSprite(x,y,20,70)
//map4 = createSprite(x,y-350,100,20)
}

//}