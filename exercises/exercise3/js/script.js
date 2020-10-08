"use strict";

/**************************************************
Exercise 5 : Looking for love
Junior Vigneault


**************************************************/

let circle1 = {
  x:undefined,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:2
};

let circle2 = {
  x:undefined,
  y:250,
  size:100,
  vx:0,
  vy:0,
  speed:3
};

let state = 'title'; // can be : title, simulation,love or sadness


function setup() {
  createCanvas(windowWidth, windowHeight);

    // position circles separated from one another

  circle1.x = width/3;
  circle2.x = 2 * width/3;

    // start circles moving in a random direction

  circle2.vx = random(-circle2.speed,circle2.speed);
  circle2.vy = random(-circle2.speed,circle2.speed);
}

function draw() {
  background(0);

  if (state === 'title'){
    title();
  }
  else if (state === 'simulation'){
    simulation();
  }
  else if (state === 'love'){
    love();
  }
  else if (state === 'sadness'){
    sadness();
  }

  // control circle 1 with arrow key left and right

    if (keyIsDown(37)){
      circle1.vx = -circle1.speed;
    }

    else if (keyIsDown(39)) {
      circle1.vx = circle1.speed;
    }

    else {
      circle1.vx = 0;
    }

    // circle 2 gets bigger

  circle2.size = circle2.size + 1;

  // circle 1 gets bigger

  circle1.size = circle1.size + 0.5;

  function title(){
    push();
    textSize(100);
    fill(random(0,255));
    textAlign(CENTER,CENTER);
    text('LOVE?',width/2, height/2);
    pop();
  }

}

function simulation(){
  move();
  checkOffScreen(circle1);
  checkOffScreen(circle2);
  checkOverlap();
  display();
}

function love(){
  push();
  textSize(100);
  fill(255, 0, 0);
  textAlign(CENTER,CENTER);
  text('LOVE!',width/2, height/2);
  pop();
}

function sadness(){
  push();
  textSize(70);
  fill(0,0,200);
  textAlign(CENTER,CENTER);
  text('D:',width/2, height/2);
  pop();
}

function fear(){
  push();
  textSize(70);
  fill(0,0,200);
  textAlign(CENTER,CENTER);
  text('U FEAR INTIMACY',width/2, height/2);
  pop();
}


function move(){
      // move the circle

  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

}

function checkOffScreen(){
  // check if the circle2 has gone off screen
  if (isOffScreen(circle2)) {
    state = 'sadness'
  }
}

function checkOffScreen(){
  // check if the circle1 has gone off screen
  if (isOffScreen(circle1)) {
    state = 'fear'
  }
}

function isOffScreen(circle){
  if (circle.y < 0 || circle.y > height){
    return true;
  }
  else{
    return false
  }
}

function checkOverlap(){
  // check if the circles overlap

  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2){
    state = 'love';
  }

}

function display(){
  // display the circles

  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed(){
  if (state === 'title'){
    state = 'simulation';
  }


}
