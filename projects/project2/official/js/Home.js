class Home {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image, gif, bgImg, riding, caring, images, about){
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

    // menu column
    this.ridingMenu = riding;
    this.ridingMenux = 150;
    this.ridingMenuy = 300;

    this.caringMenu = caring;
    this.caringMenux = 150;
    this.caringMenuy = 400;

    this.imagesMenu = images;
    this.imagesMenux = 150;
    this.imagesMenuy = 500;

    this.aboutMenu =  about;
    this.aboutMenux = 150;
    this.aboutMenuy = 600;

    this.textInfo = `
    Welcome to horse.com, a place where the love for horses unite us all!
    If this is your first visit, we recommend you create an account.
    This website contains a multitude of information, pictures and games
    all centered around our common passion for horses. Have a great stay
    and don't forget to bookmark us!

      - horse.com`;

    // login/create account
    this.loginMenu = `login/create account`
  }


  display(){
    push();
    // display background website
    image(this.homePageImage, this.homePageImagex, this.homePageImagey);

    // display horse.com glitter gif
    image(this.horseDotComGif, this.horseDotComGifx, this.horseDotComGify, this.horseDotcomGifWidth, this.horseDotcomGifHeight);
    pop();
  }

  draw(){
    push();
    // drawing background and website template image
    background(this.background);
    this.display();
    // drawing the text menu and information text
    this.textMenu(this.textInfo, 350, 240, 13, LEFT, 50);
    this.textMenu(this.informationMenu, 150, 300, 40, CENTER, 50);
    this.textMenu(this.imagesMenu, 150, 400, 40, CENTER, 50);
    this.textMenu(this.gamesMenu, 150, 500, 40, CENTER, 50);
    this.textMenu(this.aboutMenu, 150, 600, 40, CENTER, 50);
    this.textMenu(this.loginMenu, 860, 200, 15, CENTER, 255);
    pop();
  }

  mousePressed(){
    if (mouseX > this.enterGifx - this.enterGifWidth / 2 &&
      mouseX < this.enterGifx + this.enterGifWidth / 2 &&
      mouseY > this.enterGify - this.enterGifHeight / 2 &&
      mouseY < this.enterGify + this.enterGifHeight / 2) {
      // current state definition
      currentState = new Home(homePageImage, horseDotComGif, backgroundHorse);
      guitarMusic.loop();
    }
  }

  textMenu(textinfo, x, y, size, align, color){
    push();
    fill(color);
    textAlign(align);
    textSize(size);
    text(textinfo, x, y);
    pop();
  }


}
