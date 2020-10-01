/**************************************************
Exercise 2 // DODGE-EM
JUNIOR VIGNEAULT

A fly in a club can pick up cocktails but needs to dodge disco balls
**************************************************/

// Declaring my images for the program, a fly image for the user and a discoball as the obstacle

let flyImage;
let discoBallImage = {
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:5,
  image: undefined
}

// Loading the images! Finally...

function preload() {
  flyImage = loadImage("assets/images/fly.png");

  discoBallImage.image = loadImage("assets/images/discoball.png");
}

// Creating a javascript object for my background to make the colors funky

let bg = {
  r:0,
  g:0,
  b:0
}


function setup() {

  // I want the biggesssssst canvas

createCanvas(windowWidth, windowHeight);

  // Making the disco ball randomly appear on the left

  discoBallImage.y = random(0,height);
  discoBallImage.vx = discoBallImage.speed;

  noCursor();


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
  strokeWeight(20);
  point(x,y);
}

// The disco ball is moving accross the screen using it's velocity

  discoBallImage.x = discoBallImage.x + discoBallImage.vx;
  discoBallImage.y = discoBallImage.y + discoBallImage.vy;

  // If the disco ball hits the right of the screen, it reappears on the right

  if (discoBallImage.x > width) {
    discoBallImage.x = 0;
    discoBallImage.y = random(0,height);
  }

// Making the disco ball appear on screen
  imageMode(CENTER);
  image(discoBallImage.image, discoBallImage.x, discoBallImage.y, 300, 300);

// Making the fly follow the user's mouse

  flyImage.x = mouseX;
  flyImage.y = mouseY;

// Making the fly appear on screen

  imageMode(CENTER);
  image(flyImage, mouseX, mouseY,80,80);

}
