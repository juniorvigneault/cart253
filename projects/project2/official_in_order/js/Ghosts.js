class Ghosts{

  constructor(soulImages,x,y){

    this.soulImages = soulImages;
    this.numSouls = 20;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;

  }

  move() {
    this.x += this.vx;
    this.x += this.vy;
  }

  wrap(){
    if (this.x > width) {
      this.x -= width;
    }
    else if (this.x < 0) {
      this.x += width;
    }
  }

  display() {
    push();
    image(this.soulImages, this.x, this.y);
    pop();
  }
}
