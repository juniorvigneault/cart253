/**************************************************
Exercise 01 : I like to move it move it
Junior Vigneault - 40136480

A big eye swallowing the screen on a stroboscoping background
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
  sizeGrowth: 1
};

let circle2 = {
  x: 0,
  y: 0,
  size: 190,
  fill: 255,
  sizeGrowth: 2
};

let circle3 = {
  x: 0,
  y: 0,
  size: 1,
  speed: 1,
  fill: 255,
  maximumGrowth:30
};

let constrainStart = 0;
let mapStartValue = 200;
let aLittleBitToTheLeft = -20;
let aLittleBitUpward = -12;

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

// creating an eye flooding the screen over time

noStroke();
circle1.size = circle1.size + circle1.sizeGrowth;
ellipse(mouseX, mouseY, circle1.size);
fill(circle1.fill);

circle2.size = circle1.size / circle2.sizeGrowth;
circle2.size = constrain(circle2.size, constrainStart, width);
ellipse(mouseX, mouseY, circle2.size);
fill(circle2.fill);


fill(circle3.fill);
circle3.size = map(circle1.size, mapStartValue, width, circle3.size, circle3.maximumGrowth);
ellipse(mouseX + aLittleBitToTheLeft, mouseY + aLittleBitUpward, circle3.size);










}
