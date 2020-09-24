/**************************************************
Exercise 01 : I like to move it move it
Junior Vigneault - 40136480


Here is a description of this template p5 project.
**************************************************/

let backgroundColor = 0

let square1 = {
  x: 500,
  y: 500,
  width: 1000,
  height: 1000,
  fill:0


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
  background(backgroundColor)

rectMode(CENTER)
noStroke()
rect(square1.x,square1.y,square1.width,square1.height);
fill(square1.fill);


}
