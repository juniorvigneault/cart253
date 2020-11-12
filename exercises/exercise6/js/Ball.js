class Ball {

  constructor(x, y, note) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
    this.growth = 2;
    this.size = 50;
    this.active = true;
    this.fill = {
      r: random(0, 255),
      g: random(0, 255),
      b: random(0, 255),
    }
    // synth
    this.note = note;
    this.synth = new p5.PolySynth();

    // reverb
    this.delay = new p5.Delay();

  }

  // make the ball move according to it's position

  gravity(force) {
    this.ay = this.ay + force;
  }

  // move the ball!

  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

  }

  // make the ball bounce on big circle

  bounce(paddle) {

    if (this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y + this.size / 2 < paddle.y + paddle.height / 2) {

      let dx = this.x - paddle.x;
      this.vx = this.vx + map(dx, -paddle.width / 2, paddle.width / 2, -10, 10);

      this.vy = -this.vy;
      this.ay = 0;
      //  play the note when bouncing
      this.playNote();
      // add delay when bouncing
      this.delay.process(this.synth, .2, .7, 4000);
    }
  }

  // ball can bounce on the sides of the screen

  bounceSides(){
    if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > width) {
  this.vx = -this.vx;

}

if (this.y - this.size / 2 < 0 || this.y + this.size / 2 > height) {
  this.vy = -this.vy;

}
  }

  // play the note in synth
    playNote(){
    this.synth.play(this.note,0.2,0,0.1);
  }

  // display the ball

  display() {
    push();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
