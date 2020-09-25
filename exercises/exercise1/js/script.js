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

let circle3 = {
  x: 0,
  y: 0,
  size: 1,
  speed: 1,
  fill: 255,
  maximumGrowth:30
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

// creating a dark eye flooding the screen over time

noStroke();
circle1.size = circle1.size +1;
ellipse(mouseX, mouseY, circle1.size);
fill(circle1.fill);

circle2.size = circle1.size /2;
circle2.size = constrain(circle2.size, 0, width);
ellipse(mouseX, mouseY, circle2.size);
fill(circle2.fill);


fill(circle3.fill);
circle3.size = map(circle1.size, 200, width, circle3.size, circle3.maximumGrowth);
ellipse(mouseX - 20, mouseY -12, circle3.size);

// creating a circle jerking around everywhere randomly









}
