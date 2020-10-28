"use strict";

/**************************************************
Exercise 5 : Juggling!
Junior Vigneault

Here is a description of this template p5 project.
**************************************************/

let paddle;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300,20);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(100,200,255);

  paddle.move();
  paddle.display();

}
