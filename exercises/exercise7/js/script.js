"use strict";

/**************************************************
Project 2 : horse.com
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
let achievements;
let caring;
let ourMission;
let volunteer;

// variables for our mission page
let ourMissionBg;
let homeIcon;

// variables for caring page
let caringBg;

// variables for achievements page
let achievementsBg;

// variables for volunteer page
let volunteerBg;

// preload images and sounds
function preload() {
  // home page template
  homePageImage = loadImage(`assets/images/webpagebg.jpg`);
  // glitter horse.com
  horseDotComGif = loadImage(`assets/images/horsedotcom.gif`);
  // background of running horse on home page
  backgroundHorse = loadImage(`assets/images/background.jpg`);
  // guitar music
  guitarMusic = loadSound(`assets/sounds/guitar.mp3`)

  // home page menu images
  caring = loadImage(`assets/images/caring.png`)
  ourMission = loadImage(`assets/images/ourmission.png`)
  achievements = loadImage(`assets/images/achievements.png`)
  volunteer = loadImage(`assets/images/volunteer.png`)

  // enter page images
  enterCollage = loadImage(`assets/images/collage.png`);
  enterGif = loadImage(`assets/images/enterGif.gif`);
  petalGif = loadImage(`assets/images/petal.gif`);

  // our mission page images
  ourMissionBg = loadImage(`assets/images/ourmissionbg.jpg`)
  homeIcon = loadImage(`assets/images/homeicon.png`)
  // caring page images
  caringBg = loadImage(`assets/images/caringbg.jpg`)

  // achievements page images
  achievementsBg = loadImage(`assets/images/achievementsbg.jpg`)

  // volunteer page images
  volunteerBg = loadImage(`assets/images/volunteerbg.jpg`)


  // // slideshow on homepage
  // for (let i = 0; i < numImages; i++) {
  //   let slideshowImage = loadImage(`assets/images/slideshow-image-${i}.png`);
  //   slideshowImages.push(slideshowImage);
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

function mousePressed() {
  currentState.mousePressed();
}
