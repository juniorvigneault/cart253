/**************************************************
Exercise 01 : I like to move it move it
Junior Vigneault - 40136480


Here is a description of this template p5 project.
**************************************************/

let bg = {
  r: 0,
  b: 0,
  g: 0
};

let circle1 = {
  x: 0,
  y: 0,
  size: 200,
  fill: 0,
};

let circle2 = {
  x: 0,
  y: 0,
  size: 190,
  fill: 255,
};

let circle2 = {
  x: 0,
  y: 0,
  size: 190,
  fill: 255,
};

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

// creating dark stroboscopy background
  bg.r = random(0,50);
  bg.g = random(0,50);
  bg.b = random(0,50);

  background(bg.r, bg.g, bg.b);

noStroke();
circle1.size = circle1.size +1;
ellipse(mouseX, mouseY, circle1.size);
fill(circle1.fill);

circle2.size = circle1.size /2;
ellipse(mouseX, mouseY, circle2.size);
fill(circle2.fill);








}
