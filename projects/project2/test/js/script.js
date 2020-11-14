"use strict";

/**************************************************
Project 2 : Congratulations!
Junior Vigneault

You have won
**************************************************/
// horse.com home page variable
let currentState;

// balloon gravity
let gravityForce = 0.0025;

// stage var
let stage;

// balloon array
let balloons = [];
let numBalloons = 80;

// song variable
let congratulationSFX;

// random colors for background in transition scene between mail and congratulation
let bg = {
  r: undefined,
  g: undefined,
  b: undefined
}

// congratulation gif variable
let congratulationsGif;

let homePageImage;

// ship image png (not there yet)
// let shipImage = {
//   x: 200,
//   y: 200,
//   image: undefined,
// }

// preload images and sounds
function preload() {

  congratulationSFX = loadSound(`assets/sounds/congratulation.mp3`);
  congratulationsGif = loadImage(`assets/images/congratulations.gif`);
  homePageImage = loadImage(`assets/images/home.png`)

  // shipImage.image = loadImage(`assets/images/ship.png`);
}

// setup()
function setup() {
  createCanvas(windowWidth, windowHeight);

  // // creating stage and balloons
  // createStage();
  currentState = new Home(homePageImage);
}


// draw()
function draw() {
  // switching between mail and congratulation scene
  // stateSwitch();
}

function createStage() {
  // creating stage
  stage = new Stage(width, 100, congratulationsGif);


  // creating balloons to their original position
  for (let i = 0; i < numBalloons; i++) {
    let x = random(0, width);
    let y = random(-500, 100);
    let balloon = new Balloon(x, y);
    balloons.push(balloon);
  }
}

function congratulation() {
  background(255);

  // display Stage
  stage.display();
  stage.congratulationsGif();


  // make balloons fall and bounce
  for (let i = 0; i < balloons.length; i++) {
    let balloon = balloons[i];
    if (balloon.active) {
      balloon.gravity(gravityForce);
      balloon.move();
      balloon.bounce(stage);
      balloon.display();
    }
  }
//  ship();
}

// function mail (starting state, eventually log in mail)
function mail() {
  push();
  noStroke();
  fill(170);
  textAlign(CENTER, CENTER);
  textSize(100);
  textStyle(BOLD);
  text(`click!`, windowWidth / 2, windowHeight / 2);
  pop();
}

// transition between mail and congratulation
function transitionMail(){
  bg.r = random(0,255);
  bg.g = random(0,255);
  bg.b = random(0,255);

  // set flashing random color background
  background(bg.r, bg.g, bg.b);

}

// switching between mail, transition and congratulation scene (demo)
function stateSwitch() {
  if (state === `mail`) {
    mail();
  }
  else if (state === `transitionMail`) {
    transitionMail();
  }
  else if (state === `congratulation`) {
    congratulation();
  }
}

// click to get into the congratulation state
function mousePressed(){
  if (state === `mail`){
    state = `transitionMail`;
    congratulationSFX.play();
    setTimeout(function(){ state = 'congratulation'; }, 1500);
  }
}

// function ship(){
//       imageMode(CENTER);
//       image(shipImage.image, shipImage.x, shipImage.y)
//   }
