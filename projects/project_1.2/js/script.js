"use strict";

/**************************************************
Project 1
Junior Vigneault

Here is a description of this template p5 project.
**************************************************/
let flower1 = {
  x: 200,
  y: 200,
  size: 200,
  image: undefined,
  speed: 2,
  vx:0,
  vy:0,
  leaveScreen:1380,
  reAppear: -100,
  angle: 5
}

let state = 'title';

function preload() {

  // load "baby" image

  flower1.image = loadImage("assets/images/flower.png")
}

function setup() {
  createCanvas(1280,720);
  angleMode(DEGREES);

}

function draw() {
  background(0);

  title(flower1);
  }

function title(flowers){

// draw flower
imageMode(CENTER);
image(flowers.image, flowers.x, flowers.y, flowers.size, flowers.size);
// make the circles reappear at the right side of the screen when off screen
if (flowers.x > flowers.leaveScreen){
  flowers.x = flowers.reAppear;
}
rotate(flowers.angle);
flowers.angle = flowers.angle + 1;
flowers.vx = flowers.speed;
flowers.x = flowers.x + flowers.vx;
}
