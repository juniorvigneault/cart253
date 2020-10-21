"use strict";

let school = [];
let schoolSize = 8;
let discoSong;

function preload(){
  discoSong = loadSound('assets/sounds/disco.mp3')
}


function setup() {
  createCanvas(800,800);

 // create 4 fish positioned randomly

 for(let i = 0; i < schoolSize; i++){
   let fish = createFish(random(0,width), random(0,height));
   school.push(fish);
 }
}

// create new javascript object describing fish

function createFish(x,y){
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}

function draw() {
  background(0);

  for(let i = 0; i < school.length; i++){
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

// chooses wether the provided fish changes direction and moves it
function moveFish(fish) {
  let change = random(0,1);
  if (change <0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
    }
    // move fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;

    // constrain fish inside canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
}

// display fish on canvas
function displayFish(fish){
  push();
  fill(200,100,100);
  noStroke();
  drawFish(fish.x,fish.y);
  pop();
}

 function mousePressed() {
   let fish = createFish(mouseX,mouseY);
   school.push(fish);
   //discoSong.play();
 }

 function drawFish(x,y){
     push();
     noStroke();
     fill(100,100,130);
     ellipseMode(CENTER);
     ellipse(x,y,200,50);
     triangle(x,y,x+200,y,x+180,y-50);
     strokeWeight(4);
     fill(0);
     stroke(255);
     ellipse(x-60,y-10,30,30);
     ellipse(x-100,y-10,30,30);
     fill(255);
     noStroke();
     ellipse(x-80,y+10,20,10);
     pop();
   }
