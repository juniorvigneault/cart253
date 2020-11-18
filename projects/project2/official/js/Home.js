class Home {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image, gif, bgImg){
    // home page background template
    this.homePageImagex = 0;
    this.homePageImagey = 0;
    this.homePageImage = image;
    // glitter gif
    this.horseDotComGif = gif;
    this.horseDotComGifx = this.homePageImagex + 50;
    this.horseDotComGify = this.homePageImagey + 30;
    this.horseDotcomGifWidth = 439.5;
    this.horseDotcomGifHeight = 180;
    // background filling the canvas (not final)
    this.background = bgImg;
    this.backgroundx = 0;
    this.backgroundy = 0;
  }


  display(){
    // display background website
    image(this.homePageImage, this.homePageImagex, this.homePageImagey);

    // display horse.com glitter gif
    image(this.horseDotComGif, this.horseDotComGifx, this.horseDotComGify, this.horseDotcomGifWidth, this.horseDotcomGifHeight);
  }

  draw(){
    background(this.background);
    this.display();
  }

  mousePressed(){
  }
}
