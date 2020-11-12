class BigBall extends Ball {


    constructor(x, y, note){

      super(x, y, note);

        this.size = 150;
        this.maxSpeed = 7;

        // reverb
        this.delay = new p5.Delay();
        this.delayTime = 0.3;
        this.feedback = 0.5;
        this.filterFreq = 500;

  }

  playNote(){
  this.synth.play(this.note,0.5,0,0.5);
}

  bounce(paddle){

    super.bounce(paddle);
    this.delay.process(this.synth, this.delayTime, this.feedback, this.filterFreq);

  }
}
