"use strict";

/**************************************************
Project 1 : Simulation
Junior Vigneault

My project is a simulation that leads the user through uncharted programming territories...view at your own risk
**************************************************/

// declaring my variables for the backgrounds

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

// declaring variables for images

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

// declaring some variables I will use a couple times during the program

let size = {
  growing:50,
}
let fade = {
  fadeIn: 0,
  fadeIn2: 1,
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

// creating variables for my sounds

let everythingSFX;
let opusSFX;
let opusfinSFX;


function preload(){
  everythingSFX = loadSound('assets/sounds/everything.mp3');
  opusSFX = loadSound('assets/sounds/opus.mp3');
  opusfinSFX = loadSound('assets/sounds/opusfin.mp3')
  okImage.image = loadImage('assets/images/ok.png');
  childImage.image = loadImage('assets/images/child.png')
  earthImage.image = loadImage('assets/images/earth.png')

}

// my first state... WOW!

let state = 'start';


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);


  // lost child original position in state title32

  childImage.x = windowWidth/4;
  childImage.y = windowHeight/7;
}



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
else if (state === 'title'){
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
else if (state === 'title46'){
  title46();
}
else if (state === 'title47'){
  title47();
}
else if (state === 'title48'){
  title48();
}
else if (state === 'title49'){
  title49();
}
else if (state === 'title50'){
  title50();
}
else if (state === 'title51'){
  title51();
}
else if (state === 'title52'){
  title52();
}
else if (state === 'title53'){
  title53();
}
else if (state === 'title54'){
  title54();
}
else if (state === 'title55'){
  title55();
}
else if (state === 'title56'){
  title56();
}
else if (state === 'title57'){
  title57();
}
else if (state === 'title58'){
  title58();
}
}

// All my different titles with different backgrounds and games

function start(){
  clickInstruction();
}

function title(){
  flowers(flower1)
  push();
  fadeIn();
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
  fadeOut();
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
  fadeIn();
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
  fadeOut();
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
  fadeIn();
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
  fadeOut();
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
  fadeIn();
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
  fadeOut();
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
  fadeIn();
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
  fadeOut();
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
  fadeIn();
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
  fadeOut();
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
  fadeIn();
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
  fadeOut();
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
  fadeIn();
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
  fadeOut();
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
  fadeIn();
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
  fadeOut();
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
  fadeOut();
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
  fadeOut();
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
  fadeOut();
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`...if you do promise...`, windowWidth/2, windowHeight/2);
  pop();
}
function title25(){
  push();
  fill(255,0,0);
  textAlign(CENTER,CENTER);
  textSize(40);
  textStyle(BOLD);
  text(`...then click, type "I promise" and click "ok"`, windowWidth/2, windowHeight/2);
  pop();
}

// GAME 1 - YOU HAVE TO TYPE I PROMISE AND CLICK OK

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
  fadeIn();
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Good...`, windowWidth/2, windowHeight/2);
  pop();
}
function title28(){
  push();
  fadeOut();
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Very good...`, windowWidth/2, windowHeight/2);
  pop();
}
function title29(){
  push();
  starrySky();
  fadeIn();
  fill(fade.fadeIn);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(``, windowWidth/2, windowHeight/2);
  pop();
}
function title30(){
  push();
  starrySky();
  fadeOut();
  fill(fade.fadeIn);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`There is just one last thing...`, windowWidth/2, windowHeight/2);
  pop();
}
function title31(){
  push();
  starrySky();
  fadeIn();
  fill(fade.fadeIn);
  textAlign(CENTER,CENTER);
  noStroke();
  textSize(50);
  textStyle(BOLD);
  text(`One last thing you need to do...`, windowWidth/2, windowHeight/2);
  pop();
}

// GAME 2 - YOU HAVE TO BRING THE CHILD TO EARTH WITH THE ARROW KEYS

function title32(){
  push();
  fill(170);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(30);
  textStyle(BOLD);
  text(`Bring this lost child back to the chain of love using the arrow keys`, windowWidth/2, windowHeight/2);
  pop();
  lostChild();
}
function title33(){
  starrySky();
  push();
  fadeIn();
  fill(fade.fadeIn);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Good...`, windowWidth/2, windowHeight/2);
  pop();

}
function title34(){
  starrySky();
  push();
  fadeOut();
  fill(fade.fadeIn);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(50);
  textStyle(BOLD);
  text(`Very good...`, windowWidth/2, windowHeight/2);
  pop();

  }

  function title35(){
    push();
    starrySky();
    fadeIn();
    fill(fade.fadeIn);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(50);
    textStyle(BOLD);
    text(`You are finally ready...`, windowWidth/2, windowHeight/2);
    pop();

  }
  function title36(){
    push();
    noStroke();
    starrySky();
    let size = random(98,100);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`The time has come`, windowWidth/2, windowHeight/2);
    pop();

  }
  function title37(){
    push();
    noStroke();
    starrySky();
    let size = random(78,80);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`For you to meet THE program`, windowWidth/2, windowHeight/2);
    pop();

  }
  function title38(){
    push();
    noStroke();
    starrySky();
    let size = random(78,80);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`Open of your beautiful eyes`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title39(){
    push();
    push();
    noStroke();
    starrySky();
    let size = random(78,80);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`And take everything in`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title40(){
    push();
    noStroke();
    starrySky();
    let size = random(70,80);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`THE TIME IS`, windowWidth/2, windowHeight/2);
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
    text(`NOW`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title42(){
    push();
    noStroke();
    starrySky();
    let size = random(300,302);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`ARE`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title43(){
    push();
    noStroke();
    starrySky();
    let size = random(350,352);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`YOU`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title44(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`READY?`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title45(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`TO`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title46(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`BE`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title47(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`BORN`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title48(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`AGAIN`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title49(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`5`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title50(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`4`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title51(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`3`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title52(){
    push();
    noStroke();
    starrySky();
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`2`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title53(){
    push();
    noStroke();
    flowers(flower2);
    let size = random(400,402);
    let color = random(0,255);
    fill(color);
    textAlign(CENTER,CENTER);
    textSize(size);
    textStyle(BOLD);
    text(`1`, windowWidth/2, windowHeight/2);
    pop();
  }

  function title54(){
    push();
    noStroke();
    fill(170);
    textAlign(CENTER,CENTER);
    textSize(200);
    textStyle(BOLD);
    text(`WAIT`, windowWidth/2, windowHeight/2);
    pop();
  }

  function title55(){
    push();
    noStroke();
    fill(170);
    textAlign(CENTER,CENTER);
    textSize(100);
    textStyle(BOLD);
    text(`INHALE`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title56(){
    push();
    noStroke();
    fill(170);
    textAlign(CENTER,CENTER);
    textSize(100);
    textStyle(BOLD);
    text(`EXHALE`, windowWidth/2, windowHeight/2);
    pop();
  }
  function title57(){
  grandeFinale();
  }

  function title58(){
    push();
    noStroke();
    fill(170);
    textAlign(CENTER,CENTER);
    textSize(50);
    textStyle(BOLD);
    text(`fin`, windowWidth/2, windowHeight/2);
    pop();
  }

  // letting mouse pressed change almost all my title states

function mousePressed(){
  if (state === 'start'){
    state = 'title';
    fade.fadeIn = 0;
    // song starts
    opusSFX.play();
  }
else if (state === 'title'){
    state = 'title2';
    fade.fadeIn = 170;
  }
  else if (state === 'title2'){
    state = 'title3';
    // voice effect
    everythingSFX.play();
    fade.fadeIn = 0;
  }
  else if (state === 'title3'){
    state = 'title4';
   fade.fadeIn = 170;
  }
  else if (state === 'title4'){
    state = 'title5';
    fade.fadeIn = 0;
  }
  else if (state === 'title5'){
    state = 'title6';
    fade.fadeIn = 170;
  }
  else if (state === 'title6'){
    state = 'title7';
    fade.fadeIn = 0;
  }
  else if (state === 'title7'){
    state = 'title8';
    fade.fadeIn = 170;
  }
  else if (state === 'title8'){
    state = 'title9';
  fade.fadeIn = 0;
  }
  else if (state === 'title9'){
    state = 'title10';
    fade.fadeIn = 170;
  }
  else if (state === 'title10'){
    state = 'title11';
    fade.fadeIn = 0;
  }
  else if (state === 'title11'){
    state = 'title12';
    fade.fadeIn = 170;
  }
  else if (state === 'title12'){
    state = 'title13';
    fade.fadeIn = 0;
  }
  else if (state === 'title13'){
    state = 'title14';
    fade.fadeIn = 170;
  }
  else if (state === 'title14'){
    state = 'title15';
    fade.fadeIn = 0;
  }
  else if (state === 'title15'){
    state = 'title16';
    fade.fadeIn = 170;
  }
  else if (state === 'title16'){
    state = 'title17';
   fade.fadeIn = 0;
  }
  else if (state === 'title17'){
    state = 'title18';
    fade.fadeIn = 170;
  }
  else if (state === 'title18'){
    state = 'title19';
    fade.fadeIn = 0;
  }
  else if (state === 'title19'){
    state = 'title20';
    fade.fadeIn = 170;
  }
  else if (state === 'title20'){
    state = 'title21';
    fade.fadeIn = 170;
  }
  else if (state === 'title21'){
    state = 'title22';

  }
  else if (state === 'title22'){
    state = 'title23';

  }
  else if (state === 'title23'){
    state = 'title24';
    fade.fadeIn = 170;
  }
  else if (state === 'title24'){
    state = 'title25';

  }
  else if (state === 'title25'){
    state = 'title26';
    fade.fadeIn = 170;
  }
  else if (state === 'title26'){
    state = 'title27';
    fade.fadeIn = 0;
  }
  else if (state === 'title27'){
    state = 'title28';
    fade.fadeIn = 170;
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
  else if (state === 'title45'){
    state = 'title46';
  }
  else if (state === 'title46'){
    state = 'title47';
  }
  else if (state === 'title47'){
    state = 'title48';
  }
  else if (state === 'title48'){
    state = 'title49';
  }
  else if (state === 'title49'){
    state = 'title50';
  }
  else if (state === 'title50'){
    state = 'title51';
  }
  else if (state === 'title51'){
    state = 'title52';
  }
  else if (state === 'title52'){
    state = 'title53';
  }
  else if (state === 'title53'){
    state = 'title54';
    // song stops
    opusSFX.stop();
  }
  else if (state === 'title54'){
    state = 'title55';
  }
  else if (state === 'title55'){
    state = 'title56';
  }
  else if (state === 'title56'){
    state = 'title57';
    // final song starts!
    opusfinSFX.play();
  }
  else if (state === 'title57'){
    state = 'title58';
    // final song stops :(
    opusfinSFX.stop();
  }
}

// typing for the game 1 in title 26
function keyTyped(){
  typing = typing + key;
}


// function of the lost child in game 2 in title 32
function lostChild(){

// positioning the earth in game 2 in title 32
  imageMode(CENTER);
  earthImage.x = windowWidth/2
  earthImage.y = windowHeight/2 + 200;

// controlling child with arrow keys and making it drift (game2 title 32)
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

  // making the child and earth appear (game2 title 32)

  image(earthImage.image, earthImage.x, earthImage.y, earthImage.size, earthImage.size);
  image(childImage.image, childImage.x, childImage.y, childImage.size, childImage.size);

// changing the state if the child is back in the chain of love! (game2 title 32)
let d = dist(childImage.x, childImage.y, earthImage.x, earthImage.y);
if (d < 120){
  state = 'title33'
}

  // making stars in the sky
starrySky();
}

// first state to make the music play

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

// making stars in the sky like (like white noise or grain)
function starrySky(){

for (let i =0; i < 10; i++) {
let x = random(0,width);
let y = random(0,height);
stroke(255);
strokeWeight(1);
point(x,y);
}
}

// confetti with text magic is real as finale with song called in mouse pressed

function grandeFinale(){


for (let i =0; i < 10; i++) {
let x = random(0,width);
let y = random(0,height);
let r = random(0,255);
let g = random(0,255);
let b = random(0,255);

noStroke();
fill(r, g, b);
rectMode(CENTER)
rect(x,y,10,50);

push();
noStroke();
fill(r, g, b);
textAlign(CENTER,CENTER);
textSize(200);
textStyle(BOLD);
text(`MAGIC IS REAL`, windowWidth/2, windowHeight/2);
pop();
}
}

// from black to white (used in many titles)
function fadeIn(){
  fade.fadeIn = fade.fadeIn + fade.fadeIn2;
  fade.fadeIn = constrain(fade.fadeIn, 0, 170);
}

// from white to black (used in many titles)
function fadeOut(){
  fade.fadeIn = fade.fadeIn - fade.fadeIn2;
  fade.fadeIn = constrain(fade.fadeIn, 0, 170);
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
