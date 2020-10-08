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

function preload() {

  // load "baby" image

  clown.image = loadImage("assets/images/clown.png")
}

function setup() {
  createCanvas(1280,720);

  // move the ''baby''

  clown.vy = clown.speed;

// position the "baby"

clown.x = width/2;
clown.y = height/4;

}


function draw() {
  background(0);


// move the ''baby''

clown.y = clown.y + clown.vy;

// display the "baby" image

  imageMode(CENTER);
    image(clown.image, clown.x, clown.y, clown.size, clown.size);

}
