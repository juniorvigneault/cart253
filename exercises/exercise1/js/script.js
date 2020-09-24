/**************************************************
Exercise 01 : I like to move it move it
Junior Vigneault - 40136480


Here is a description of this template p5 project.
**************************************************/

let square1 = {
  x: 500,
  y: 500,
  height: 1000,
  width: 1000,
  fill: 255,
  alpha: 50
}

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(1000,1000);

}

// draw()
//
// Description of draw() goes here.
function draw() {
background(255,0,0);

// drawing square to make strobe effect
rectMode(CENTER);

rect(square1.x,square1.y,square1.height,square1.width);
fill(square1.fill = random(0,255));



}
