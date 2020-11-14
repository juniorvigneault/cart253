"use strict";

/**************************************************
Project 2 : Congratulations!
Junior Vigneault

You have won
**************************************************/
// horse.com home page variable
let currentState;

let homePageImage;
let horseDotComGif;
let backgroundHorse;

// preload images and sounds
function preload() {
  // home page template
  homePageImage = loadImage(`assets/images/home.png`)
  // glitter horse.com
  horseDotComGif = loadImage(`assets/images/horsedotcom.gif`)
  // background gif of running horse on home page
  backgroundHorse = loadImage(`assets/images/background.jpg`)
}

// setup()
function setup() {
  createCanvas(windowWidth, windowHeight);

  // // creating stage and balloons
  // createStage();
  currentState = new Home(homePageImage, horseDotComGif, backgroundHorse);
}


// draw()
function draw() {
  currentState.draw();
}
