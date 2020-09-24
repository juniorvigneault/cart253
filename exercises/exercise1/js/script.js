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








}
