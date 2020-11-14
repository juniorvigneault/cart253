class Home {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image, gif, bgGif){
    this.homePageImagex = 0;
    this.homePageImagey = 0;
    this.homePageImage = image;
    this.horseDotComGif = gif;
    this.horseDotComGifx = this.homePageImagex + 100;
    this.horseDotComGify = this.homePageImagey + 80;
    this.background = bgGif;
    this.backgroundx = 0;
    this.backgroundy = 0;
  }


  display(){
    // display background website
    image(this.homePageImage, this.homePageImagex, this.homePageImagey);

    // display horse.com glitter gif
    image(this.horseDotComGif, this.horseDotComGifx, this.horseDotComGify)
  }

  draw(){
    background(this.background);
    this.display();
  }

  mousePressed(){
  }
}
