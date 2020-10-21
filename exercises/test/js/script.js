"use strict";


function setup() {
  createCanvas(800,800);

}

// create new javascript object describing fish


function draw() {
  background(200);
  drawFish(200,400);

}


function drawFish(x,y){
    push();
    noStroke();
    fill(100,100,130);
    ellipseMode(CENTER);
    ellipse(x,y,200,50);
    triangle(x,y,400,400,420,350);
    strokeWeight(4);
    fill(0);
    stroke(255);
    ellipse(x-60,y-10,30,30);
    ellipse(x-100,y-10,30,30);
    fill(255);
    noStroke();
    ellipse(x-80,y+10,20,10);
    pop();
  }
