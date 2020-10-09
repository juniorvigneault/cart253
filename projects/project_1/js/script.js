"use strict";

/**************************************************
Project 1
Junior Vigneault

Here is a description of this template p5 project.
**************************************************/

let clown = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}

let circles = {
  x: 0,
  y: 500,
  size: 100,
  fill: 255,
  vx: 0,
  vy: 0,
  speed: 5,
  leaveScreen:1380,
  reAppear: -100
}


function preload() {

  // load "baby" image

  clown.image = loadImage("assets/images/clown.png")
}

function setup() {
  createCanvas(1280,720);

// position the "baby"

clown.x = width/2;
clown.y = height/4;

}


function draw() {
  background(0);
  thoughtMove(circles);


// display the "baby" image

  imageMode(CENTER);
    image(clown.image, clown.x, clown.y, clown.size, clown.size);

}

// defining the "good" candy
  function thoughtMove(thought) {
  // drawing style
  push();
  noStroke();
  fill(thought.fill);
  ellipseMode(CENTER);
  pop();
  // draw an ellipse
  ellipse(thought.x, thought.y, thought.size);
  // make the circles move across the screen
  thought.vx = thought.speed;
  thought.x = thought.x + thought.vx;
  // make the circles reappear at the right side of the screen when off screen
  if (thought.x > thought.leaveScreen){
    thought.x = thought.reAppear;
  }
}
