class Ball extends BallOG {

  constructor(x, y, note) {

    super(x, y, note);

    this.size = 8;
    this.fill = 255;
    this.speed = 10;

    this.synth = new p5.PolySynth();

  }

  move() {

    // grow in size
    if (this.size < 150) {
      this.size = this.size + 0.05;
    }

    super.move();
  }


  bounce() {
    super.bounce();

  }

  playNote() {
    this.synth.play(this.note, 0.01, 0, 0.001);
    super.playNote();
  }

  display() {

    push();
    fill(this.fill);
    ellipse(this.x, this.y, this.size);
    pop();

    super.display();
  }
}
