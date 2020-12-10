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

// variables for the second home page visuals and music
let homePageImage2;
let horseDotComGif2;
let backgroundHorse2;
let darkSFX

// variables for Home 3
let homePageImage3;

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

// HOME 2 / THE INVESTIGATION BEGINS

let parchemin1;
// opened parchemin with information
let parchemin2;
let parcheminSFX;
let parchemin2SFX;
let close;

// Clue 1
let journal1;
let journal2;
let inventory;

// HOME 3
let screamingHorse;
let screamSFX


// OUR MISSION2 / Clue 2
let horseGhost;
let wanderingInfo;

// caring 2
let caringBg2;

// glitch backgrounds menu pages
let ourMission2Bg;
// empty flask found in Caring 2 2
let flask1;
let flask2;
let stabSFX

// Caring 2 password
let password;
let unlockButton;
let chest;

// Achievements 2 bg
let achievementsBg2;

// glitch horse pop up
let glitchHorse;
// glitch horse sound
let isanybodythereSFX;

// Our Mission 3 : catching the soul!
let ghostCaught;

// Cured Horse
let curedHorse;

// final bosses
let boss1;
let boss11;
let boss2;
let boss22;
let gun;

// Slideshow variables
// Array to store the slideshow images to display
let slideshowImages = [];
// Index in the array of the current image to display (the first one)
let currentSlideshowImage = 0;
// The number of images total (for loading them in a for-loop)
let numImages = 4;
// A place to store the timer that moves between the images in case we want to stop it
let slideshowTimer;

//  dark Slideshow variables
// Array to store the slideshow images to display
let slideshowImages2 = [];
// Index in the array of the current image to display (the first one)
let currentSlideshowImage2 = 0;
// The number of images total (for loading them in a for-loop)
let numImages2 = 4;
// A place to store the timer that moves between the images in case we want to stop it
let slideshowTimer2;

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

  // second home page glitch happy/dark
  homePageImage2 = loadImage(`assets/images/webpagebg2.gif`);
  // fire horse.com
  horseDotComGif2 = loadImage(`assets/images/horsedotcom2.gif`);
  // background of running horse on home page
  backgroundHorse2 = loadImage(`assets/images/background2.jpg`);
  // dark ambiance
  darkSFX = loadSound(`assets/sounds/dark.mp3`)

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
  homeIcon = loadImage(`assets/images/homeIcon.png`)
  // caring page images
  caringBg = loadImage(`assets/images/caringbg.jpg`)

  // achievements page images
  achievementsBg = loadImage(`assets/images/achievementsbg.jpg`)

  // volunteer page images
  volunteerBg = loadImage(`assets/images/volunteerbg.jpg`)

  // load glitch horse pop up 1
  glitchHorse = loadImage(`assets/images/glitchhorse.gif`)
  isanybodythereSFX = loadSound(`assets/sounds/isanybodythere.mp3`)

  // slideshow on homepage
  for (let i = 0; i < numImages; i++) {
    let slideshowImage = loadImage(`assets/images/slideshow-image-${i}.jpg`);
    slideshowImages.push(slideshowImage);
  }

  // slide show dark on dark home page
  for (let i = 0; i < numImages2; i++) {
    let slideshowImage2 = loadImage(`assets/images/slideshow2-image-${i}.jpg`);
    slideshowImages2.push(slideshowImage2);
  }

  // clue 1 parchemin home 2
  parchemin1 = loadImage(`assets/images/parchemin1.png`);
  // parchemin opened version pop up
  parchemin2 = loadImage(`assets/images/parchemin2.png`);
  parcheminSFX = loadSound(`assets/sounds/paper.mp3`);
  parchemin2SFX = loadSound(`assets/sounds/paper2.mp3`);
  close = loadImage(`assets/images/close.png`);

  // glitch backgrounds menu pages
  ourMission2Bg = loadImage(`assets/images/ourmission2bg.gif`);
  // OUR MISSION2 / Clue 2
  journal1 = loadImage(`assets/images/journal1.png`);
  journal2 = loadImage(`assets/images/journal2.png`);

  // Home 3 clicking on volunteer horse screaming
  screamingHorse = loadImage(`assets/images/scream.gif`);
  screamSFX = loadSound(`assets/sounds/scream.mp3`);
  homePageImage3 = loadImage(`assets/images/home3.gif`)

  // flask in Our Mission 2
  flask1 = loadImage(`assets/images/flask1.png`)
  flask2 = loadImage(`assets/images/flask2.png`)
  stabSFX = loadSound(`assets/sounds/stab.mp3`)

  // horse ghost gif in Our Mission 2
  horseGhost = loadImage(`assets/images/ghost.png`)
  // pop up without flask
  wanderingInfo = loadImage(`assets/images/wandering.png`)

  // chest that opens password
  chest = loadImage(`assets/images/chest.png`)
  // password Riddle
  password = loadImage(`assets/images/password.png`)
  unlockButton = loadImage(`assets/images/unlock.png`)

  // achievementsbg 2
  achievementsBg2 = loadImage(`assets/images/achievements2.gif`)

  // caring2 bg
  caringBg2 = loadImage(`assets/images/caring2.gif`)

  // Our mission 3
  ghostCaught = loadImage(`assets/images/caught.gif`)

  // cured horse
  curedHorse = loadImage(`assets/images/cured.jpg`)

  // final boss
  boss1 = loadImage(`assets/images/boss1.png`)
  boss11 = loadImage(`assets/images/boss1.gif`)

  boss2 = loadImage(`assets/images/boss2.png`)
  boss22 = loadImage(`assets/images/boss2.gif`)
  gun = loadImage(`assets/images/gun.png`)
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
  console.log(boss11)
}

function mousePressed() {
  currentState.mousePressed();
}

function keyPressed() {
  currentState.keyPressed();
}

function keyTyped() {
  currentState.keyTyped();
}
