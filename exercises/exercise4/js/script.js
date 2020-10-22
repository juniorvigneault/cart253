"use strict";

let laser1 = {
  x: 1,
  y: 1,
  x2: 1,
  y2: 1,
  angle: 20,
  speed: 100,
  weight: 1,
  fill: {
    r: 0,
    g: 0,
    b: 0,
  }
}

let hookImage = {
  x: undefined,
  y: undefined,
  size: undefined,
  image: undefined
}

let handImage = {
  x: undefined,
  y: undefined,
  size: undefined,
  image: undefined
}

let pillImage = {
  x: undefined,
  y: undefined,
  size: undefined,
  image: undefined,
  consumed: false
}

let school = [];
let schoolSize = 7;
let discoSong;


function preload() {
  discoSong = loadSound('assets/sounds/disco.mp3')
  hookImage.image = loadImage('assets/images/hook.png')
  handImage.image = loadImage('assets/images/hand.png')
  pillImage.image = loadImage('assets/images/pill.png')
}

// starting title state

let state = 'start';


function setup() {
  createCanvas(800, 800);

  // create 4 fish positioned randomly

  for (let i = 0; i < schoolSize; i++) {
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish);
  }

  noCursor();

  // mouse OG position

  mouseX = width / 2;
  mouseY = height / 2;
}


// create new javascript object describing fish

function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 200,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return fish;
}

function draw() {
  stateSwitch();
}

// a function to switch between start, simulation and end

function stateSwitch() {
  if (state === 'start') {
    start();
  } else if (state === 'simulation') {
    simulation();
  }
}

// displaying hook at title

function hook() {
  hookImage.x = mouseX;
  hookImage.y = mouseY;
  imageMode(CENTER);
  image(hookImage.image, hookImage.x, hookImage.y, hookImage.size, hookImage.size);
}

// starting title text

function start() {
  push();
  noStroke();
  let size = random(100, 102);
  let color = random(248, 255);
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(40);
  text(`to`, width / 2, height / 3);
  textSize(size);
  textStyle(BOLD);
  text(`start`, width / 2, height / 2);
  pop();
  noStroke();
  fill(color);
  textAlign(CENTER, CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`press_enter`, width / 2, height * .8);
  hook();
}

// my simulation part, with the fish and song raving

function simulation() {
  background(255);
  laser(laser1);
  fishTank();
  displayHand();
}

// function to display and move fish

function fishTank() {
  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

// chooses wether the provided fish changes direction and moves it

function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.02) {
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

function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  drawFish(fish.x, fish.y);
  pop();
}

// start song by pressing enter and switching to fishtank

function keyPressed() {
  if (state = 'start') {
    //discoSong.play();
    state = 'simulation';
  }
}


// function switch(){
//   if (state === 'start' && frameCount >= 200){
//     state = 'simulation';
//   }
// }

// drawing my precious fishes

function drawFish(x, y) {
  push();
  noStroke();
  let color = random(200, 255);
  let size = map(x, 0, width, 50, 200);
  fill(color);
  ellipseMode(CENTER);
  ellipse(x, y, 200, size);
  triangle(x, y, x + 200, y, x + 180, y - 50);
  strokeWeight(4);
  fill(0);
  stroke(255);
  ellipse(x - 60, y - 10, 30, 30);
  ellipse(x - 100, y - 10, 30, 30);
  fill(255);
  noStroke();
  ellipse(x - 80, y + 10, 20, 10);
  pop();
}


// rave background for the fish!

function laser(lasers) {

  for (let i = 0; i < 200; i++) {
    push();
    lasers.angle = lasers.angle + lasers.speed
    translate(width / 2, height / 2);
    rotate(lasers.angle);
    stroke(lasers.fill.r, lasers.fill.g, lasers.fill.b);
    strokeWeight(lasers.weight);
    line(lasers.x, lasers.y, lasers.x2, lasers.y2);
    translate(lasers.x, lasers.y);
    rotate(lasers.angle);
    lasers.x = lasers.x + random(0, width);
    pop();
  }
}

// displaying the hand in fish tank

function displayHand(){
  noCursor();
  imageMode(CENTER);
  let handLimit = 130;
  handImage.x = mouseX;
  handImage.y = height - handLimit;
  image(handImage.image, handImage.x, handImage.y, handImage.size, handImage.size);
}
