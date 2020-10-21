"use strict";

let school = [];


function setup() {
  createCanvas(800,800);

 // create 4 fish positioned randomly

  school[0] = createFish(random(0, width), random(0,height));
  school[1] = createFish(random(0, width), random(0,height));
  school[2] = createFish(random(0, width), random(0,height));
  school[3] = createFish(random(0, width), random(0,height));
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
  ellipse(fish.x, fish.y, fish.size);
  pop();
}
