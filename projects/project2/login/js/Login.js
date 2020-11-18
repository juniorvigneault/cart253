class Login {

  constructor(image){
    this.backgroundImage = image;
    this.backgroundImagex = width / 2;
    this.backgroundImagey = height / 2;
  }

  display(){
    // display image backgroundI
    imageMode(CENTER);
    image(this.backgroundImage, this.backgroundImagex, this.backgroundImagey);
  }

  draw(){
    // beige background
    background(234, 216, 202);
    // display images
    this.display();

  }

  mousePressed(){

  }





}
