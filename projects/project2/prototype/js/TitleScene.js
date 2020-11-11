class TitleScene extends Scene {



  constructor(x, y, image){

    super();

    this.x = x;
    this.y = y;
    this.image = image;
  }
}

display(){
  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y);
  pop();
}

mousePressed(){
    if (mouseX > this.x - this.image.width / 2 &&
        mouseX < this.x + this.image.width / 2 &&
        mouseY > this.y - this.image.height / 2 &&
        mouseY < this.y + this.image.height / 2){
          state = 'loadingScene';
      }
    }
}
