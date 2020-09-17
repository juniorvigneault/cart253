/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(800,800);

background(0,0,0);
noStroke();

// draw the body
fill(29, 143, 0);
ellipse(430,650,500,120);

// draw arms
stroke(29,143,0);
strokeWeight(14);
line(650,620,720,680);
line(720,680,700,520);
line(620,620,200,450);

// draw the head
noStroke();
fill(26, 128, 0);
ellipse(640,520,140,210);

// draw the eyes
fill(0);
ellipse(670,500,15,120);
ellipse(610,500,15,120);

// draw nostrils
ellipse(650,565,5,15);
ellipse(630,565,5,15);

// draw mouth
ellipse(640,600,20,2);

// draw legs
stroke(29,143,0);
strokeWeight(20);
line(260,650,200,455);
line(200,455,100,680);
line(260,690,25,700);

// draw nipples
noFill();
stroke(0);
strokeWeight(2);
ellipse(600,660,8,8);
ellipse(550,630,8,8);

// draw speedo
fill(0);
triangle(280,700,175,650,290,600);
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
