/**************************************************
Exercise 2 // DODGE-EM
JUNIOR VIGNEAULT

Here is a description of this template p5 project.
**************************************************/

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


function preload() {
  flyImage = loadImage("assets/images/fly.png");

  discoBallImage.image = loadImage("assets/images/discoball.png");
}

let bg = {
  r:0,
  g:0,
  b:0
}

function setup() {
createCanvas(windowWidth, windowHeight);

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


for (let i =0; i < 10000; i++) {
  let x = random(0,width);
  let y = random(0,height);
  stroke(255);
  point(x,y);
}

  discoBallImage.x = discoBallImage.x + discoBallImage.vx;
  discoBallImage.y = discoBallImage.y + discoBallImage.vy;

  if (discoBallImage.x > width) {
    discoBallImage.x = 0;
    discoBallImage.y = random(0,height);
  }

  imageMode(CENTER);
  image(discoBallImage.image, discoBallImage.x, discoBallImage.y, 300, 300);


  flyImage.x = mouseX;
  flyImage.y = mouseY;


  imageMode(CENTER);
  image(flyImage, mouseX, mouseY,80,80);

}
