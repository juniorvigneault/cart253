class Enter {

  // enter gif with horse montage
  constructor(collage, enterGif, petalGif) {
    // enter gif
    this.enterGif = enterGif;
    this.enterGifx = width / 2
    this.enterGify = height * .8
    this.enterGifWidth = 300
    this.enterGifHeight = 200

    // collage of horses
    this.enterCollage = collage;
    this.enterCollagex = width / 2;
    this.enterCollagey = height / 2;

    // petal gif
    this.petalGif = petalGif;
    this.petalGifx = width / 2;
    this.petalGify = height *.6;
    this.petalGifWidth = 800;
    this.petalGifHeight = 800;
  }

  display() {
    imageMode(CENTER);
    background(234, 216, 202);
    // collage
    image(this.enterCollage, this.enterCollagex, this.enterCollagey);
    //enter gif
    image(this.enterGif, this.enterGifx, this.enterGify, this.enterGifWidth, this.enterGifHeight);
    // rose petal gif
    image(this.petalGif, this.petalGifx, this.petalGify, this.petalGifWidth, this.petalGifHeight);
  }

  draw() {
    this.display();
  }

  mousePressed() {
    if (mouseX > this.enterGifx - this.enterGifWidth / 2 &&
      mouseX < this.enterGifx + this.enterGifWidth / 2 &&
      mouseY > this.enterGify - this.enterGifHeight / 2 &&
      mouseY < this.enterGify + this.enterGifHeight / 2) {
      // current state definition
      currentState = new Home(homePageImage, horseDotComGif, backgroundHorse);
      guitarMusic.loop();
    }
  }
}
