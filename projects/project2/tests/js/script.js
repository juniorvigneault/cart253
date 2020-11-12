"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let currentState;

function setup() {
  createCanvas(800,800);

  currentState = new Enter();
}


function draw() {
 // calling the current state
  currentState.draw();
}


function mousePressed(){
  // 
  currentState.mousePressed();
}
