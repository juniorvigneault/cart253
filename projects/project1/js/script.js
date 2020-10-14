"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let flower1 = {
  x : 1,
  y : 1,
  x2 : 1,
  y2 : 1,
  angle : 10,
  speed : 1,
  weight: .5,
  fill : {
    r:255,
    g:255,
    b:200,
  }
}
let state = 'title';
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  if (state === 'title'){
  title();
}
else if (state === 'title2'){
  title2();
}
}




function flowers(flowers){

for (let i = 0; i < 500; i++){
push();
  flowers.angle = flowers.angle + flowers.speed
  translate(windowWidth/2, windowHeight/2);
  rotate(flowers.angle);
  stroke(flowers.fill.r, flowers.fill.g, flowers.fill.b);
  strokeWeight(flowers.weight);
  line(flowers.x,flowers.y,flowers.x2,flowers.y2);
  translate(flowers.x,flowers.y);
  rotate(flowers.angle);
  flowers.x = flowers.x + random(0,width);
  pop();
}
}

function title(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(60);
  textStyle(BOLD);
  text("Welcome to my incredible program!", windowWidth/2, windowHeight/2);
  pop();
}
  function title2(){
    flowers(flower1)
    push();
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(60);
    textStyle(BOLD);
    text("Welcome to my marvelous program!", windowWidth/2, windowHeight/2);
    pop();
}

function mousePressed(){
  if (state === 'title'){
    state = 'title2'
  }
}
