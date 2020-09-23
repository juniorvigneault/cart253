/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let backgroundColor = 0;
let circle={
  x:0,
  y:250,
  size:100,
  speed:1,
  insideColor:255
}
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(backgroundColor);

circle.x=circle.x+circle.speed;

circle.insideColor = map(mouseX,0,500,0,255);
fill(circle.insideColor);
ellipse(circle.x,circle.y,circle.size);

}
