"use strict";

/**************************************************
Project 2 : Congratulations!
Junior Vigneault

You have won
**************************************************/
// the current state variable
let currentState;

// variables for the enter pager visuals
let enterCollage;
let enterGif;
let petalGif;

// variables for the home page visuals and music
let homePageImage;
let horseDotComGif;
let backgroundHorse;
let guitarMusic;

// variables for menu buttons on homepage
let riding;
let caring;
let images;
let aboutUs;
let login;

// variable for login page
let backgroundLogin;

// preload images and sounds
function preload() {
  // home page template
  homePageImage = loadImage(`assets/images/home.png`);
  // glitter horse.com
  horseDotComGif = loadImage(`assets/images/horsedotcom.gif`);
  // background gif of running horse on home page
  backgroundHorse = loadImage(`assets/images/background.jpg`);
  // guitar music
  guitarMusic = loadSound(`assets/sounds/guitar.mp3`)

  // home page menu images
  riding = loadImage(`assets/images/rinding.png`)
  caring = loadImage(`assets/images/caring.png`)
  images = loadImage(`assets/images/images.png`)
  aboutUs = loadImage(`assets/images/aboutus.png`)
  // login = loadImage(`assets/images/`)

  // enter page images
  enterCollage = loadImage(`assets/images/collage.png`);
  enterGif = loadImage(`assets/images/enterGif.gif`);
  petalGif = loadImage(`assets/images/petal.gif`);

  // login page images
  backgroundLogin = loadImage(`assets/images/loginbackground.png`)
}

// setup()
function setup() {
  createCanvas(windowWidth, windowHeight);

// current state definition
  currentState = new Enter(enterCollage, enterGif, petalGif);
}


// draw()
function draw() {
  currentState.draw();
}

function mousePressed(){
  currentState.mousePressed();
}
