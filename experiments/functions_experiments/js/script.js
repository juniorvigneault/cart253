"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(200);

  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  fill(random(0,255), random(0,255), random(0,255));
  stroke(random(150,255), random(150,255), random(150,255));
  strokeWeight(10);
  text('Hello, world', windowWidth/2, windowHeight/2);

}
