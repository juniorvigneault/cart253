"use strict";

/**************************************************
Project 1
Junior Vigneault

Here is a description of this template p5 project.
**************************************************/

let clown = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}

let circles = {
  x: 0,
  y: 500,
  size: 100,
  fill: 255,
  vx: 0,
  vy: 0,
  speed: 5,
  leaveScreen:1380,
  reAppear: -100,
  beingCarried: false
  }

let cursor = {
  x:undefined,
  y:undefined,
  size: 70,
  image: undefined,
}


function preload() {

  // load "baby" image

  clown.image = loadImage("assets/images/clown.png")
}

function setup() {
  createCanvas(1280,720);

  noCursor();

  // cursor initial position

  mouseX = width/2;
  mouseY = height/2;

// position the "baby"

  clown.x = width/2;
  clown.y = height/4;

}


function draw() {
  background(0);
  thoughtMove(circles);
  userControl();
  display();

  imageMode(CENTER);
    image(clown.image, clown.x, clown.y, clown.size, clown.size);
}

// setting up the cursor image

function userControl(){
  // position the cursor
    cursor.x = mouseX;
    cursor.y = mouseY;
  // load image cursor
    imageMode(CENTER);
    image(clown.image, cursor.x, cursor.y, cursor.size, cursor.size);
}

// creating the thoughts and making them move

  function thoughtMove(thought) {
  // drawing style
  push();
  noStroke();
  fill(thought.fill);
  ellipseMode(CENTER);
  pop();
  // draw an ellipse
  ellipse(thought.x, thought.y, thought.size);
  // make the circles move across the screen
  if (thought.beingCarried){
  thought.x = cursor.x;
  thought.y = cursor.y;
  }
  else {
  thought.vx = thought.speed;
  thought.x = thought.x + thought.vx;
  }
  // make the circles reappear at the right side of the screen when off screen
  if (thought.x > thought.leaveScreen){
    thought.x = thought.reAppear;
  }
  // making the user pick up the "candy" with mouse

  function mousePressed(){
    if (thought.beingCarried){
      thought.beingCarried = false;
    }

    else {
    let d = dist(cursor.x, cursor.y, thought.x, thought.y);
    if (d < thought.size) {
      thought.beingCarried = true;
    }
    }
  }

}


// display the "baby" image

function display(){
    imageMode(CENTER);
      image(clown.image, clown.x, clown.y, clown.size, clown.size);
}
