class BassBall extends Ball {

  constructor(x, y, note) {

    super(x, y, note);

    this.size = 20;
    this.fill = 0;
    this.speed = 3;

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
