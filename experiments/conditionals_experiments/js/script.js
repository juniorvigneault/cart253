
let backgroundColor = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1
}


function setup() {
  createCanvas(500,500);

}



function draw() {
  background(backgroundColor);

  circle.x = circle.x + circle.speed;

if (mouseX < width/3) {
  fill(255,0,0);
}
else if (mouseX < 2 * width/3) {
  fill(0,255,0);
}
else {
  fill(0,0,255);
}
ellipse(circle.x, circle.y, circle.size);




}
