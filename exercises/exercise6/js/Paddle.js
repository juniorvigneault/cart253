class Paddle {

  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = width/2;
    this.y = height - this.height/2;
    this.fill = {
      r: 255,
      g: 200,
      b: 200
    }
    this.strokeWeight = 1;

  }

  // move the circle paddle with the mouse

  // move() {
  //   this.x = mouseX;
  //
  // }

// display the circle paddle

  display() {
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    strokeWeight(this.strokeWeight);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();


  }
}
