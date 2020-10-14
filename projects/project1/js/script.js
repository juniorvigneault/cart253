"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let flower1 = {
  x : 1,
  y : 1,
  x2 : 1,
  y2 : 1,
  angle : 10,
  speed : 7,
  weight: .5,
  fill : {
    r:55,
    g:55,
    b:55,
  }
}
let flower2 = {
  x : 1,
  y : 1,
  x2 : 1,
  y2 : 1,
  angle : 10,
  speed : 7,
  weight: .5,
  fill : {
    r:255,
    g:55,
    b:55,
  }
}
let fade = {
  fadeIn: 0,
  fadeIn2: 0.5,
}

let state = 'title';
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  if (state === 'title'){
  title();
}
else if (state === 'title2'){
  title2();
}
else if (state === 'title3'){
  title3();
}
else if (state === 'title4'){
  title4();
}
else if (state === 'title5'){
  title5();
}
else if (state === 'title6'){
  title6();
}
else if (state === 'title7'){
  title7();
}
else if (state === 'title8'){
  title8();
}
else if (state === 'title9'){
  title9();
}
else if (state === 'title10'){
  title10();
}
else if (state === 'title11'){
  title11();
}
else if (state === 'title12'){
  title12();
}
else if (state === 'title13'){
  title13();
}
else if (state === 'title14'){
  title14();
}
else if (state === 'title15'){
  title15();
}
else if (state === 'title16'){
  title16();
}
else if (state === 'title17'){
  title17();
}
else if (state === 'title18'){
  title18();
}
else if (state === 'title19'){
  title19();
}
else if (state === 'title20'){
  title20();
}
else if (state === 'title21'){
  title21();
}
else if (state === 'title22'){
  title22();
}
else if (state === 'title23'){
  title23();
}
}




function flowers(flowers){

for (let i = 0; i < 500; i++){
push();
  flowers.angle = flowers.angle + flowers.speed
  translate(windowWidth/2, windowHeight/2);
  rotate(flowers.angle);
  stroke(flowers.fill.r, flowers.fill.g, flowers.fill.b);
  strokeWeight(flowers.weight);
  line(flowers.x,flowers.y,flowers.x2,flowers.y2);
  translate(flowers.x,flowers.y);
  rotate(flowers.angle);
  flowers.x = flowers.x + random(0,width);
  pop();
}
}

function title(){
  flowers(flower1)
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(RIGHT);
  textSize(40);
  textStyle(BOLD);
  text("What you are about to witness...", windowWidth/2, windowHeight/4);
  textAlign(LEFT, BOTTOM);
  text("...has never been seen before in the history of programming...", windowWidth * .2, windowHeight * .6 )
  pop();
}
  function title2(){
    flowers(flower1)
    push();
    fade.fadeIn = fade.fadeIn - fade.fadeIn2;
    fill(fade.fadeIn);
    textAlign(RIGHT);
    textSize(40);
    textStyle(BOLD);
    text("It may change...", windowWidth /2, windowHeight/4);
    textAlign(LEFT, BOTTOM);
    text("...everything you know about programming...", windowWidth * .3, windowHeight * .6 )
    pop();
}
function title3(){
  flowers(flower2)
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  let size = map(mouseX, 0, width, 80, 500);
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(size);
  textStyle(BOLD);
  text("EVERYTHING...", windowWidth/2, windowHeight/2);
  pop();
}
function title4(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD);
  text("Welcome to my show-stopping program!", windowWidth/2, windowHeight/2);
  pop();
}
function title5(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD);
  text("Welcome to my unbelievable program!", windowWidth/2, windowHeight/2);
  pop();
}
function title6(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD);
  text("Welcome to my remarkable program!", windowWidth/2, windowHeight/2);
  pop();
}
function title7(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD);
  text("Welcome to my breathtaking program!", windowWidth/2, windowHeight/2);
  pop();
}
function title8(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  text("Prodigeous", windowWidth/2, windowHeight/2);
  pop();
}
function title9(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  text("Dazzling", windowWidth/2, windowHeight/2);
  pop();
}
function title10(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  text("Sublime", windowWidth/2, windowHeight/2);
  pop();
}
function title11(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  text("Beyond belief", windowWidth/2, windowHeight/2);
  pop();
}
function title12(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  text("Charming", windowWidth/2, windowHeight/2);
  pop();
}
function title13(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  text("Miraculous", windowWidth/2, windowHeight/2);
  pop();
}
function title14(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(120);
  textStyle(BOLD);
  text("Phenomenal", windowWidth/2, windowHeight/2);
  pop();
}
function title15(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(150);
  textStyle(BOLD);
  text("Improbable", windowWidth/2, windowHeight/2);
  pop();
}
function title16(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(155);
  textStyle(BOLD);
  text("Implausible", windowWidth/2, windowHeight/2);
  pop();
}
function title17(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(170);
  textStyle(BOLD);
  text("Far-fetched", windowWidth/2, windowHeight/2);
  pop();
}
function title18(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(185);
  textStyle(BOLD);
  text("Embarrassing", windowWidth/2, windowHeight/2);
  pop();
}
function title19(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text("DISGRACEFUL", windowWidth/2, windowHeight/2);
  pop();
}
function title20(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text("TICKLISH", windowWidth/2, windowHeight/2);
  pop();
}
function title21(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text("CELEBRATORY!", windowWidth/2, windowHeight/2);
  pop();
}
function title22(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text("HUMDINGER!", windowWidth/2, windowHeight/2);
  pop();
}
function title23(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text("WELCOME", windowWidth/2, windowHeight/2);
  pop();
}
function title24(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text("TO", windowWidth/2, windowHeight/2);
  pop();
}
function title25(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text("MY", windowWidth/2, windowHeight/2);
  pop();
}
function title25(){
  flowers(flower1)
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text("PROGRAM", windowWidth/2, windowHeight/2);
  pop();
}

function mousePressed(){
  if (state === 'title'){
    state = 'title2';
  }
  else if (state === 'title2'){
    state = 'title3';
  }
  else if (state === 'title3'){
    state = 'title4';
  }
  else if (state === 'title4'){
    state = 'title5';
  }
  else if (state === 'title5'){
    state = 'title6';
  }
  else if (state === 'title6'){
    state = 'title7';
  }
  else if (state === 'title7'){
    state = 'title8';
  }
  else if (state === 'title8'){
    state = 'title9';
  }
  else if (state === 'title9'){
    state = 'title10';
  }
  else if (state === 'title10'){
    state = 'title11';
  }
  else if (state === 'title11'){
    state = 'title12';
  }
  else if (state === 'title12'){
    state = 'title13';
  }
  else if (state === 'title13'){
    state = 'title14';
  }
  else if (state === 'title14'){
    state = 'title15';
  }
  else if (state === 'title15'){
    state = 'title16';
  }
  else if (state === 'title16'){
    state = 'title17';
  }
  else if (state === 'title17'){
    state = 'title18';
  }
  else if (state === 'title18'){
    state = 'title19';
  }
  else if (state === 'title19'){
    state = 'title20';
  }
  else if (state === 'title20'){
    state = 'title21';
  }
  else if (state === 'title21'){
    state = 'title22';
  }
  else if (state === 'title22'){
    state = 'title23';
  }
}
