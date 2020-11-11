"use strict";

function preload() {}

// the balls
let balls = [];


let notes = [`C5`, `D5`, `Eb5`, `F5`, `G5`, `Ab5`, `Bb5`];

// creates the canvas
function setup() {
  createCanvas(600, 600);
}


function draw() {


  // move, bounce and display the balls

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX, mouseY);
}

function createBall(x, y) {
  let note = random(notes);
  let ball = new Ball(x, y, note);
  balls.push(ball);
}
