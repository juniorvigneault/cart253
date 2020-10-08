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
  vx: 0,
  vy: 0,
  speed: 5
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
  circlesMove();


// display the "baby" image

  imageMode(CENTER);
    image(clown.image, clown.x, clown.y, clown.size, clown.size);

}

// defining the "good" candy
  function circlesMove() {
  // drawing style
  push();
  noStroke();
  fill(255);
  ellipseMode(CENTER);
  pop();
  // draw an ellipse
  ellipse(circles.x, circles.y, circles.size);
  // make the circles move across the screen
  circles.vx = circles.speed;
  circles.x = circles.x + circles.vx;
  // make the circles reappear at the right side of the screen when off screen
  if (circles.x > 1380){
    circles.x = -100;
  }
}
