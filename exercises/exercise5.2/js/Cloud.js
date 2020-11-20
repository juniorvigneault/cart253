class Cloud {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.fill = 255
    this.size = size

    // circle 2 to the left and smaller

    this.toTheLeft = -50;
    this.littleSmaller = -30;

    // circle 3 to the right and a little smaller

    this.toTheRight = 40;
    this.smaller = -15;

    // circle 4 to the right, up, and much much smaller

    this.toTheRight2 = 20;
    this.up = -20;
    this.muchSmaller = -50;
  }

  // display the cloud

  display() {
    push();
    fill(this.fill);
    noStroke();
    ellipse(this.x, this.y, this.size);
    ellipse(this.x + this.toTheLeft, this.y, this.size + this.littleSmaller);
    ellipse(this.x + this.toTheRight, this.y, this.size + this.smaller);
    ellipse(this.x + this.toTheRight2, this.y + this.up, this.size + this.muchSmaller);
    pop();
  }
}
