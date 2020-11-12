"use strict";

/**************************************************
Exercise 5 : Juggling!
Junior Vigneault

You have been hired by a circus! Control a circle with the mouse. Drop the ball and get fired!
**************************************************/

let click = {
  size : 60,
  color : 0
}


let gravityForce = 0.0025;
let paddle;

let balls = [];
let numBalls = 30;

let notes = [`C5`, `D5`, `Eb5`, `F5`, `G5`, `Ab5`, `Bb5`];

function preload(){

  congratulationSFX = loadSound(`assets/sounds/congratulation.mp3`)
}


// starting state

let state = 'title'


// Set up //

function setup() {
  createCanvas(windowWidth, windowHeight);

  // // creating the floor (paddle)

  paddle = new Paddle(width, 100);

  // creating balls to their original position

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-4000, -1);
    let note = random(notes)
    let ball = new Ball(x, y, note);
    balls.push(ball);
  }
}


// different states

function draw() {


  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'title') {
    simulation();
  }
}

// title screen with instructions
//
function title() {
  background(255);
  push();
  textSize(click.size);
  fill(click.color);
  textAlign(CENTER,CENTER);
  text(`click`, width/2, height/2);
  pop();
}

// game state, where you have to juggle

function simulation() {
  background(255);
  // paddle.move();
  paddle.display();

  // display the falling balls, bounce on paddle and make them dissapear when they leave scren

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
      ball.bounceSides();
    }
  }


}

// // make the ball appear and switch from title state to simulation. Also triggers the timer to win.
//
function mousePressed() {
  if (state = 'title') {
    state = 'simulation';

  }
}
