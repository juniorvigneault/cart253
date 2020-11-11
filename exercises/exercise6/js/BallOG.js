class BallOG {


  constructor(x, y, note) {
    this.x = x;
    this.y = y;
    this.size = undefined;
    this.fill = undefined;
    this.speed = undefined;
    this.vx = random(-this.speed, this.speed)
    this.vy = random(-this.speed, this.speed)

    // synth
    this.note = note;
    this.synth = new p5.PolySynth();
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  bounce() {
    if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > width) {
      this.vx = -this.vx;
      this.playNote();
    }

    if (this.y - this.size / 2 < 0 || this.y + this.size / 2 > height) {
      this.vy = -this.vy;
      this.playNote();
    }
  }

  playNote() {
  }

  display() {

  }

}
