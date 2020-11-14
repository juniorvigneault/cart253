class Home {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image){
    this.homePageImagex = 0;
    this.homePageImagey = 0;
    this.homePageImage = image
  }


  display(){
    image(this.homePageImage, this.homePageImagex, this.homePageImagey);
  }

  draw(){

  }

  mousePressed(){
  }
}
