"use strict";

/**************************************************
Exercise 5 : Juggling!
Junior Vigneault

You have been hired by a circus! Control a circle with the mouse. Drop the ball and get fired!
**************************************************/

let gravityForce = 0.0025;
let paddle;

let balls = [];
let numBalls = 0;

let clouds = [];
let numClouds = 10;

// starting state

let state = 'title'


// Set up //

function setup() {
  createCanvas(windowWidth, windowHeight);

  // creating the paddle (now a circle) to it's original position

  paddle = new Paddle(300, 300);

  // creating balls to their original position

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-800, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }

  //  creating clouds at a random position

  for (let i = 0; i < numClouds; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let size = random(80, 300);
    let cloud = new Cloud(x, y, size);
    clouds.push(cloud);
  }
}

// draw()
//
// different states

function draw() {
  background(100, 200, 255);

  if (state === 'title') {
    title();
  } else if (state === 'simulation') {
    simulation();
  } else if (state === 'end1') {
    end1();
  } else if (state === 'end2') {
    end2();
  }
}

// first ending, when you lose and the ball goes to the bottom

function end1() {
  push();
  textSize(100);
  fill(250);
  textAlign(CENTER, CENTER);
  text('Pack your stuff and leave!', width / 2, height / 2);
  pop();
  noLoop();
}

// second ending, when you juggle long enough!

function end2() {
  push();
  textSize(100);
  fill(250);
  textAlign(CENTER, CENTER);
  text('You are a natural!', width / 2, height / 2);
  pop();
  noLoop();
}

// title screen with instructions

function title() {
  push();
  textSize(100);
  fill(250);
  textAlign(CENTER, CENTER);
  text(`Welcome to a circus!
  Drop the ball to
  get fired`, width / 2, height / 2);
  pop();
}

// game state, where you have to juggle

function simulation() {

  paddle.move();
  paddle.display();

  // display the falling balls, bounce on paddle and make them dissapear when they leave scren

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }

 // displaying the clouds in the sky

  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    cloud.display();
  }
}

// make the ball appear and switch from title state to simulation. Also triggers the timer to win.

function mousePressed() {
  let ball = new Ball(mouseX, mouseY);
  balls.push(ball);

  if (state = 'title') {
    state = 'simulation';
  }

// timer : if you juggle long enough, you win!

  setTimeout(function() {state = 'end2';}, 7000);
}
