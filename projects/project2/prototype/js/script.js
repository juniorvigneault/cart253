"use strict";

/**************************************************
Project_2 prototype : Remember
Junior Vigneault

Here is a description of this template p5 project.
**************************************************/

// background color object
let bg = {
  r: 255,
  g: 255,
  b: 255
}

let enterImage = {
  x:undefined,
  y:undefined,
  size:undefined,
  image:undefined
}

let rememberTitleImage = {
  x:undefined,
  y:undefined,
  size:undefined,
  image:undefined
}

let startImage = {
  x:undefined,
  y:undefined,
  size:undefined,
  image:undefined
}

let scene1Image = {
  x:undefined,
  y:undefined,
  size:undefined,
  image:undefined
}


let textBoxImage = {
  x:undefined,
  y:undefined,
  size:undefined,
  image:undefined
}



let state = 'enter'

let remember1SFX;

let scene1SFX;

let typewriter;

function preload() {
enterImage.image = loadImage(`assets/images/enter.gif`);
rememberTitleImage.image = loadImage(`assets/images/remembertitle.png`);
startImage.image = loadImage(`assets/images/start.png`);
// scene1
scene1Image.image = loadImage(`assets/images/scene1.gif`);

textBoxImage.image = loadImage(`assets/images/textbox.png`);


remember1SFX = loadSound (`assets/sounds/remember1.mp3`);

scene1SFX = loadSound (`assets/sounds/scene1.mp3`);

}

// setup()
function setup() {
  // positionning the canvas at the middle of the screen
  canvasPosition();

  typewriter = new Typewriter();
}

// draw()
function draw() {
  //background(bg.r, bg.g, bg.b);
  // switching from state to state function
  states();
}

// defining each states as functions

function states() {
  if (state === 'enter') {
    enter();
  }
  else if (state === 'mainTitle') {
    mainTitle();
  }
  else if (state === 'scene1') {
    scene1();
  }
}

// first state to get the music going || can I avoid that?

function enter() {
  push();
  imageMode(CENTER);
  enterImage.x = width/2;
  enterImage.y = height/2;
  image(enterImage.image, enterImage.x, enterImage.y);
  pop();
}

// main title
function mainTitle() {
  push();
  imageMode(CENTER);
  rememberTitleImage.x = width/2;
  rememberTitleImage.y = height/2;
  image(rememberTitleImage.image, rememberTitleImage.x, rememberTitleImage.y);


// start image
  startImage.x = width/2;
  startImage.y = height/2;
  image(startImage.image, startImage.x, startImage.y);
  pop();
}


function scene1() {
  push();
  imageMode(CENTER);
  scene1Image.x = width/2;
  scene1Image.y = height/2;

  textBoxImage.x = width/2;
  textBoxImage.y = height/2;


  image(scene1Image.image, scene1Image.x, scene1Image.y);

  // text box, will appear almost every scene at some point
  image(textBoxImage.image, textBoxImage.x, textBoxImage.y);

  // display the typewriter in scence 1
  typewriter.display();

  pop();
}

// function to position the canvas at the middle of the screen
function canvasPosition() {
  let canvas = createCanvas(800, 800);
  let canvasx = (windowWidth - width) / 2;
  let canvasy = (windowHeight - height) / 2;
  canvas.position(canvasx, canvasy);
}


function mousePressed() {

  if (state === 'enter') {
    if (mouseX > enterImage.x - enterImage.image.width / 2 &&
        mouseX < enterImage.x + enterImage.image.width / 2 &&
        mouseY > enterImage.y - enterImage.image.height / 2 &&
        mouseY < enterImage.y + enterImage.image.height / 2){
          state = 'mainTitle';
          //remember1SFX.loop();
        }
  }

  else if (state === 'mainTitle') {
    if (mouseX > startImage.x - startImage.image.width / 2 &&
        mouseX < startImage.x + startImage.image.width / 2 &&
        mouseY > startImage.y - startImage.image.height / 2 &&
        mouseY < startImage.y + startImage.image.height / 2){
          state = 'scene1';
        //  remember1SFX.stop();
        //  scene1SFX.loop();
        }
  }
}
