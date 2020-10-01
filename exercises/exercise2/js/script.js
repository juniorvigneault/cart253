/**************************************************
Exercise 2 // DODGE-EM
JUNIOR VIGNEAULT

A fly in a club can pick up cocktails but needs to dodge disco balls
**************************************************/

// Declaring my images for the program, a fly image for the user and a discoball as the obstacle

let flyImage = {
  x:0,
  y:0,
  size:80,
  image:undefined
}

let discoBallImage = {
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:5,
  image: undefined
}

let discoBallImage2 = {
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:6,
  image: undefined
}

let discoBallImage3 = {
  x:0,
  y:0,
  size:300,
  vx:0,
  vy:0,
  speed:7,
  image: undefined
}

let discoBallImage4 = {
  x:0,
  y:0,
  size:200,
  vx:0,
  vy:0,
  speed:1,
  image: undefined
}

let martiniImage = {
  x:0,
  y:0,
  size:100,
  image:undefined,
  beingCarried:false
}

let clubSong;

// Loading the images! Finally...

function preload() {

  flyImage.image = loadImage("assets/images/fly.png");

  discoBallImage.image = loadImage("assets/images/discoball.png");

  discoBallImage2.image = loadImage("assets/images/discoball.png");

  discoBallImage3.image = loadImage("assets/images/discoball.png");

  discoBallImage4.image = loadImage("assets/images/discoball.png");

  martiniImage.image = loadImage("assets/images/martini.png")
}

// Creating a javascript object for my background to make the colors funky

let bg = {
  r:0,
  g:0,
  b:0
}

function setup() {

  clubSong = createAudio('assets/sounds/clubsong.wav');
  clubSong.autoplay(true);

  // I want the biggesssssst canvas

createCanvas(windowWidth, windowHeight);

  // Making the disco balls randomly appear on the left

  discoBallImage.y = random(0,height);
  discoBallImage.vx = discoBallImage.speed;

  discoBallImage2.y = random(0,height);
  discoBallImage2.vx = discoBallImage2.speed;

  discoBallImage3.y = random(0,height);
  discoBallImage3.vx = discoBallImage3.speed;

  discoBallImage4.y = random(0,height);
  discoBallImage4.vx = discoBallImage4.speed;

  noCursor();

martiniImage.x = width/2;
martiniImage.y = height/2;

}
// draw()
//
// Description of draw() goes here.

function draw() {

  bg.r = random(200,255);
  bg.g = random(200,555);
  bg.b = random(200,555);

  background(bg.r, bg.g, bg.b);

// Random noise in the background from the covid19 activity. It adds texture.

for (let i =0; i < 1000; i++) {
  let x = random(0,width);
  let y = random(0,height);
  stroke(255);
  strokeWeight(2);
  point(x,y);
}

// Dropping a martini cocktail in the middle of the screen to be picked up by the fly

if (martiniImage.beingCarried){
  martiniImage.x = flyImage.x;
  martiniImage.y = flyImage.y;

}


  image(martiniImage.image, martiniImage.x, martiniImage.y, martiniImage.size, martiniImage.size+20);

// The disco ball is moving accross the screen using it's velocity

  discoBallImage.x = discoBallImage.x + discoBallImage.vx;
  discoBallImage.y = discoBallImage.y + discoBallImage.vy;

  discoBallImage2.x = discoBallImage2.x + discoBallImage2.vx;
  discoBallImage2.y = discoBallImage2.y + discoBallImage2.vy;

  discoBallImage3.x = discoBallImage3.x + discoBallImage3.vx;
  discoBallImage3.y = discoBallImage3.y + discoBallImage3.vy;

  discoBallImage4.x = discoBallImage4.x + discoBallImage4.vx;
  discoBallImage4.y = discoBallImage4.y + discoBallImage4.vy;

  // If the disco balls hits the right of the screen, it reappears on the right

  if (discoBallImage.x > width) {
    discoBallImage.x = 0;
    discoBallImage.y = random(0,height);
  }

  if (discoBallImage2.x > width) {
    discoBallImage2.x = 0;
    discoBallImage2.y = random(0,height);
  }

  if (discoBallImage3.x > width) {
    discoBallImage3.x = 0;
    discoBallImage3.y = random(0,height);
  }

  if (discoBallImage4.x > width) {
    discoBallImage4.x = 0;
    discoBallImage4.y = random(0,height);
  }

// Making the disco ball appear on screen
  imageMode(CENTER);
  image(discoBallImage.image, discoBallImage.x, discoBallImage.y, discoBallImage.size, discoBallImage.size);

  imageMode(CENTER);
  image(discoBallImage2.image, discoBallImage2.x, discoBallImage2.y, discoBallImage2.size, discoBallImage2.size);

  imageMode(CENTER);
  image(discoBallImage3.image, discoBallImage3.x, discoBallImage3.y, discoBallImage3.size, discoBallImage3.size);

  imageMode(CENTER);
  image(discoBallImage4.image, discoBallImage4.x, discoBallImage4.y, discoBallImage4.size, discoBallImage4.size);

// Making the fly follow the user's mouse

  flyImage.x = mouseX;
  flyImage.y = mouseY;

// Making the fly appear on screen

  imageMode(CENTER);
  image(flyImage.image, flyImage.x, flyImage.y, flyImage.size, flyImage.size);

// determine the distances between the fly and discoballs and make the program stop when they touch

  let d = dist(flyImage.x, flyImage.y, discoBallImage.x, discoBallImage.y);
  if (d < discoBallImage.size/3 + flyImage.size/2) {
    noLoop();
  }

  let d2 = dist(flyImage.x, flyImage.y, discoBallImage2.x, discoBallImage2.y);
  if (d2 < discoBallImage2.size/3 + flyImage.size/2) {
    noLoop();
  }

  let d3 = dist(flyImage.x, flyImage.y, discoBallImage3.x, discoBallImage3.y);
  if (d3 < discoBallImage3.size/3 + flyImage.size/2) {
    noLoop();
  }

  let d4 = dist(flyImage.x, flyImage.y, discoBallImage4.x, discoBallImage4.y);
  if (d4 < discoBallImage4.size/3 + flyImage.size/2) {
    noLoop();
  }

// make the disco ball bigger sometimes and slower or smaller and faster depending on it's starting position

  if (discoBallImage.y >= width * 0.4) {
    discoBallImage.size = 200;
    discoBallImage.speed = 1;
  }
  else {
    discoBallImage.size = 300;
    discoBallImage.speed = 8;
  }
}

// picking up the martini

function mousePressed(){
  if (martiniImage.beingCarried){
    martiniImage.beingCarried = false;
  }

  else {
  let d = dist(flyImage.x, flyImage.y, martiniImage.x, martiniImage.y);
  if (d < martiniImage.size) {
    martiniImage.beingCarried = true;
  }
  }
}
