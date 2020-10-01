/**************************************************
Exercise 2 // DODGE-EM
JUNIOR VIGNEAULT

Here is a description of this template p5 project.
**************************************************/

let flyImage;


function preload() {
  flyImage = loadImage("assets/images/fly.png");
}

let bg = {
  r:0,
  g:0,
  b:0
}

let covid19 = {
  x:0,
  y:250,
  size:250,
  vx:0,
  vy:0,
  speed:5,
  fill:{
    r:255,
    g:0,
    b:0
  }
}

function setup() {
createCanvas(windowWidth, windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

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

  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0,height);
  }


  flyImage.x = mouseX;
  flyImage.y = mouseY;


  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  ellipse(covid19.x, covid19.y, covid19.size);

  imageMode(CENTER);
  image(flyImage, mouseX, mouseY,80,80);

}
