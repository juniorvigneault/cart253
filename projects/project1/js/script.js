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
let flower3 = {
  x : 1,
  y : 1,
  x2 : 1,
  y2 : 1,
  angle : 10,
  speed : 4,
  weight: .2,
  fill : {
    r:255,
    g:255,
    b:255,
  }
}
let flower4 = {
  x : 1,
  y : 1,
  x2 : 1,
  y2 : 1,
  angle : 1,
  speed : .09,
  weight: .2,
  fill : {
    r:0,
    g:0,
    b:255,
  }
}
let flower5 = {
  x : 1,
  y : 1,
  x2 : 1,
  y2 : 1,
  angle : 29,
  speed : .02,
  weight: .2,
  fill : {
    r:80,
    g:0,
    b:20,
  }
}
let flower6 = {
  x : 1,
  y : 1,
  x2 : 1,
  y2 : 1,
  angle : 29,
  speed : .02,
  weight: .2,
  fill : {
    r:0,
    g:0,
    b:0,
  }
}

let okImage = {
  x:300,
  y:500,
  sizeX: 90,
  sizeY: 40,
  image: undefined
}

let childImage = {
  x:undefined,
  y:undefined,
  sizeX: undefined,
  sizeY: undefined,
  image: undefined,
  speed: 5,
  vx:0,
  vy:0
}

let earthImage = {
  x:undefined,
  y:undefined,
  sizeX: undefined,
  sizeY: undefined,
  image: undefined
}

let size = {
  growing:50,
}
let fade = {
  fadeIn: 0,
  fadeIn2: .7,
}

let circleBg = {
  x:100,
  y:100,
  size:100,
  speed:100,
  vx:0,
  vy:0
}

let typing = ``;
let everythingSFX;
let opusSFX;

function preload(){
  everythingSFX = loadSound('assets/sounds/everything.mp3');
  opusSFX = loadSound('assets/sounds/opus.mp3');
  okImage.image = loadImage('assets/images/ok.png');
  childImage.image = loadImage('assets/images/child.png')
  earthImage.image = loadImage('assets/images/earth.png')

}

let state = 'start';
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  // lost child original position in state title32

  childImage.x = windowWidth/4
  childImage.y = windowHeight/7
}

// draw()
//
// Description of draw() goes here.

function draw() {
  background(0);
  titleSwitch();

}







// My beautiful functions


// This function has all my state switches everytime the title changes

function titleSwitch(){
  if (state === 'start'){
  start();
}
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
else if (state === 'title24'){
  title24();
}
else if (state === 'title25'){
  title25();
}
else if (state === 'title26'){
  title26();
}
else if (state === 'title27'){
  title27();
}
else if (state === 'title28'){
  title28();
}
else if (state === 'title29'){
  title29();
}
else if (state === 'title30'){
  title30();
}
else if (state === 'title31'){
  title31();
}
else if (state === 'title32'){
  title32();
}
else if (state === 'title33'){
  title33();
}
else if (state === 'title34'){
  title34();
}
else if (state === 'title35'){
  title35();
}
else if (state === 'title36'){
  title36();
}
else if (state === 'title37'){
  title37();
}
else if (state === 'title38'){
  title38();
}
else if (state === 'title39'){
  title39();
}
else if (state === 'title40'){
  title40();
}
else if (state === 'title41'){
  title41();
}
else if (state === 'title42'){
  title42();
}
else if (state === 'title43'){
  title43();
}
else if (state === 'title44'){
  title44();
}
else if (state === 'title45'){
  title45();
}
}


// This function is for the big laser flower background

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

// All my different titles with different backgrounds and games

function start(){
  clickInstruction();
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
  text(`...has never been seen before in the history of programming...`, windowWidth * .2, windowHeight * .6 )
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
    text(`It may change...`, windowWidth /2, windowHeight/4);
    textAlign(LEFT, BOTTOM);
    text(`...everything you know about programming...`, windowWidth * .3, windowHeight * .6 )
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
  text(`EVERYTHING...`, windowWidth/2, windowHeight/2);
  pop();
}
function title4(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD);
  text(`Some have called this program "life changing"`, windowWidth/2, windowHeight/2);
  pop();
}
function title5(){
  flowers(flower1)
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD);
  text(`Some have called this program "breathtaking"`, windowWidth/2, windowHeight/2);
  pop();
}
function title6(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD);
  text(`Some have called this program "prodigeous"`, windowWidth/2, windowHeight/2);
  pop();
}
function title7(){
flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD);
  text(`Some have called this program "simply incredible"`, windowWidth/2, windowHeight/2);
  pop();
}
function title8(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(70);
  textStyle(BOLD);
  text(`"Marvelous"`, windowWidth/2, windowHeight/2);
  pop();
}
function title9(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fade.fadeIn = constrain(fade.fadeIn,0,255);
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(90);
  textStyle(BOLD);
  text(`"Dazzling"`, windowWidth/2, windowHeight/2);
  pop();
}
function title10(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(110);
  textStyle(BOLD);
  text(`"Sublime"`, windowWidth/2, windowHeight/2);
  pop();
}
function title11(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(120);
  textStyle(BOLD);
  text(`"Beyond"`, windowWidth/2, windowHeight/2);
  pop();
}
function title12(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(130);
  textStyle(BOLD);
  text(`"Charming"`, windowWidth/2, windowHeight/2);
  pop();
}
function title13(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(140);
  textStyle(BOLD);
  text(`"Miraculous"`, windowWidth/2, windowHeight/2);
  pop();
}
function title14(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(150);
  textStyle(BOLD);
  text(`"Phenomenal"`, windowWidth/2, windowHeight/2);
  pop();
}
function title15(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(160);
  textStyle(BOLD);
  text(`"Improbable"`, windowWidth/2, windowHeight/2);
  pop();
}
function title16(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(165);
  textStyle(BOLD);
  text(`"Implausible"`, windowWidth/2, windowHeight/2);
  pop();
}
function title17(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(170);
  textStyle(BOLD);
  text(`"Ticklish"`, windowWidth/2, windowHeight/2);
  pop();
}
function title18(){
  flowers(flower1);
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(185);
  textStyle(BOLD);
  text(`"Embarrassing"`, windowWidth/2, windowHeight/2);
  pop();
}
function title19(){
  flowers(flower2);
  push();
  let color = random(0,255);
  fill(color);
  textAlign(CENTER,CENTER);
  textSize(200);
  textStyle(BOLD);
  text(`"DISGRACEFUL"`, windowWidth/2, windowHeight/2);
  pop();
}
function title20(){
  flowers(flower1)
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  text(`...and more...`, windowWidth/2, windowHeight/2);
  pop();
}
function title21(){
  flowers(flower4)
  push();
  let color = random(0,255);
  fill(color);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Are you ready?`, windowWidth/2, windowHeight/2);
  pop();
}
function title22(){
  flowers(flower5)
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(80);
  textStyle(BOLD);
  text(`You must before promise...`, windowWidth/2, windowHeight/2);
  pop();
}
function title23(){
  flowers(flower6)
  push();
  let color = random(0,255);
  fill(color);
  textAlign(CENTER,CENTER);
  textSize(100);
  textStyle(BOLD);
  text(`PROMISE TO NEVER TELL`, windowWidth/2, windowHeight/2);
  pop();
}
function title24(){
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`...if you do promise...`, windowWidth/2, windowHeight/2);
  pop();
}
function title25(){
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(40);
  textStyle(BOLD);
  text(`...then click, type "I promise" and click "ok"`, windowWidth/2, windowHeight/2);
  pop();
}
function title26(){
  push();
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(typing, windowWidth/2, windowHeight/2);
  imageMode(CENTER);
  image(okImage.image, okImage.x, okImage.y, okImage.sizeX, okImage.sizeY);
  pop();
}
function title27(){
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Good...`, windowWidth/2, windowHeight/2);
  pop();
}
function title28(){
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Very good...`, windowWidth/2, windowHeight/2);
  pop();
}
function title29(){
  push();
  flowers(flower1)
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`You are so close to meeting the program...`, windowWidth/2, windowHeight/2);
  pop();
}
function title30(){
  push();
  flowers(flower1)
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`So...close...`, windowWidth/2, windowHeight/2);
  pop();
}
function title31(){
  push();
  flowers(flower1)
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`There is one more thing you need to do...`, windowWidth/2, windowHeight/2);
  pop();
}
function title32(){
  push();
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fill(fade.fadeIn);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(20);
  textStyle(BOLD);
  text(`Bring this drifting lost child back to the chain of love using the arrow keys`, windowWidth/2, windowHeight/2);
  pop();
  lostChild();
}
function title33(){
  push();
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fill(fade.fadeIn);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Congratulations...`, windowWidth/2, windowHeight/2);
  pop();

}

function title34(){
    push();
    flowers(flower1)
    fade.fadeIn = fade.fadeIn + fade.fadeIn2;
    fill(fade.fadeIn);
    noStroke();
    textAlign(RIGHT);
    textSize(40);
    textStyle(BOLD);
    text("you have proven to be a pure soul...", windowWidth/2, windowHeight/4);
    textAlign(LEFT, BOTTOM);
    text(`...the program knows it...`, windowWidth * .2, windowHeight * .6 )
    pop();

  }

  function title35(){
    push();
    flowers(flower1)
    fade.fadeIn = fade.fadeIn - fade.fadeIn2;
    fill(fade.fadeIn);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(50);
    textStyle(BOLD);
    text(`...and it is ready...`, windowWidth/2, windowHeight/2);
    pop();

  }
  function title36(){
    push();
    flowers(flower2)
    noStroke();
    let size = random(148,150);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`THE TIME HAS COME`, windowWidth/2, windowHeight/2);
    pop();

  }
  function title37(){
    push();
    noStroke();
    let size = random(78,80);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`THE PROGRAM IS ABOUT TO UNRAVEL`, windowWidth/2, windowHeight/2);
    pop();

  }
  function title38(){
    push();
    noStroke();
    let size = random(78,80);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`BEFORE YOUR BEAUTIFUL SHINY EYES`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title39(){
    push();
    noStroke();
    let size = random(300,302);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`ARE`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title40(){
    push();
    noStroke();
    let size = random(350,352);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`YOU`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title41(){
    push();
    noStroke();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`READY?`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title42(){
    push();
    fade.fadeIn = fade.fadeIn + fade.fadeIn2;
    fill(fade.fadeIn);
    textAlign(CENTER,CENTER);
    textSize(30);
    textStyle(BOLD);
    text(`Bring this lost child back to the chain of love using the arrow keys`, windowWidth/2, windowHeight/2);
    pop();
    lostChild();
  }
  function title43(){
    push();
    fade.fadeIn = fade.fadeIn - fade.fadeIn2;
    fill(fade.fadeIn);
    textAlign(CENTER,CENTER);
    textSize(50);
    textStyle(BOLD);
    text(`Congratulations...`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title44(){
    push();
    fade.fadeIn = fade.fadeIn - fade.fadeIn2;
    fill(fade.fadeIn);
    textAlign(CENTER,CENTER);
    textSize(50);
    textStyle(BOLD);
    text(`Congratulations...`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title45(){
    push();
    fade.fadeIn = fade.fadeIn - fade.fadeIn2;
    fill(fade.fadeIn);
    textAlign(CENTER,CENTER);
    textSize(50);
    textStyle(BOLD);
    text(`Congratulations...`, windowWidth/2, windowHeight/2);
    pop();
  }

function mousePressed(){
  if (state === 'start'){
    state = 'title';
    opusSFX.play();
  }
  if (state === 'title'){
    state = 'title2';
  }
  else if (state === 'title2'){
    state = 'title3';
    everythingSFX.play();
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
  else if (state === 'title23'){
    state = 'title24';
  }
  else if (state === 'title24'){
    state = 'title25';
  }
  else if (state === 'title25'){
    state = 'title26';
  }
  else if (state === 'title26'){
    state = 'title27';
  }
  else if (state === 'title27'){
    state = 'title28';
  }
  else if (state === 'title28'){
    state = 'title29';
  }
  else if (state === 'title29'){
    state = 'title30';
  }
  else if (state === 'title30'){
    state = 'title31';
  }
  else if (state === 'title31'){
    state = 'title32';
  }
  else if (state === 'title33'){
    state = 'title34';
  }
  else if (state === 'title34'){
    state = 'title35';
  }
  else if (state === 'title35'){
    state = 'title36';
  }
  else if (state === 'title36'){
    state = 'title37';
  }
  else if (state === 'title37'){
    state = 'title38';
  }
  else if (state === 'title38'){
    state = 'title39';
  }
  else if (state === 'title39'){
    state = 'title40';
  }
  else if (state === 'title40'){
    state = 'title41';
  }
  else if (state === 'title41'){
    state = 'title42';
  }
  else if (state === 'title42'){
    state = 'title43';
  }
  else if (state === 'title43'){
    state = 'title44';
  }
  else if (state === 'title44'){
    state = 'title45';
  }
}

function keyTyped(){
  typing = typing + key;
}


// function of the lost child game in title 32
function lostChild(){

// positioning the earth
  imageMode(CENTER);
  earthImage.x = windowWidth/2
  earthImage.y = windowHeight/2 + 200;

// controlling child with arrow keys and making it drift
  if(keyIsDown(LEFT_ARROW)){
    childImage.vx = -childImage.speed;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    childImage.vx = childImage.speed;
  }
  else{
    childImage.vx = 4;
  }
  if(keyIsDown(UP_ARROW)){
    childImage.vy = -childImage.speed;
  }
  else if(keyIsDown(DOWN_ARROW)){
    childImage.vy = childImage.speed;
  }
  else{
    childImage.vy = 0;
  }

  childImage.x = childImage.x + childImage.vx;
  childImage.y = childImage.y + childImage.vy;

  // making the child and earth appear
  image(earthImage.image, earthImage.x, earthImage.y, earthImage.size, earthImage.size);
  image(childImage.image, childImage.x, childImage.y, childImage.size, childImage.size);

// changing the state if the child is back in the chain of love!
let d = dist(childImage.x, childImage.y, earthImage.x, earthImage.y);
if (d < 120){
  state = 'title33'
}

  // making stars in the sky
  for (let i =0; i < 10; i++) {
  let x = random(0,width);
  let y = random(0,height);
  stroke(255);
  strokeWeight(1);
  point(x,y);
}
}

function clickInstruction(){
  push();
  noStroke();
  let color = random(0,50);
  fill(color);
  textStyle(BOLD);
  textSize(50);
  textAlign(CENTER, CENTER);
  text('CLICK TO TRAVEL', 0, 450, width);
  pop();
}
