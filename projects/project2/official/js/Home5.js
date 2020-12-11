class Home5 {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image3, gif2, bgImg2, caring, ourMission, achievements, volunteer, slideshowImages2, screamingHorse, glitchHorse, flask1, curedHorse, boss1, boss2, gun) {
    // home page background glitch happy/dark
    this.homePage2Imagex = 0;
    this.homePage2Imagey = 0;
    this.homePage2Image = image3;
    // glitter gif
    this.horseDotCom2Gif = gif2;
    this.horseDotCom2Gifx = this.homePage2Imagex + 50;
    this.horseDotCom2Gify = this.homePage2Imagey + 30;
    this.horseDotcom2GifWidth = 439.5;
    this.horseDotcom2GifHeight = 180;
    // background filling the canvas (not final)
    this.background2 = bgImg2;
    this.background2x = 0;
    this.background2y = 0;

    // menu column
    this.ourMissionMenu = ourMission
    this.ourMissionMenux = 150;
    this.ourMissionMenuy = 300;

    this.caringMenu = caring;
    this.caringMenux = 150;
    this.caringMenuy = 400;

    this.achievementsMenu = achievements;
    this.achievementsMenux = 150;
    this.achievementsMenuy = 500;

    this.volunteerMenu = volunteer;
    this.volunteerMenux = 150;
    this.volunteerMenuy = 600;

    // slideshow 2
    this.home2Slideshow = new Slideshow(slideshowImages2);

    // screaming horse
    this.screamingHorse = screamingHorse;
    this.screamingHorsex = width / 2;
    this.screamingHorsey = height / 2;
    this.screamingHorseAppear = false;

    // glitch horse pop up after clicking home Icon not appearing
    this.horsePopUp = true;
    this.glitchHorse = glitchHorse;
    this.glitchHorsex = width / 2;
    this.glitchHorsey = height / 2;

    // flask to return soul to glitch horse
    this.flask1 = flask1;
    this.flask1Appear = true;

    // horse pop up with his soul back
    this.curedHorse = curedHorse;
    this.curedHorsex = width / 2;
    this.curedHorsey = height / 2;
    this.curedHorseAppear = false;

    // enemy appear
    this.boss1 = boss1;
    this.boss1x = width/2 + 400;
    this.boss1y = height/2;
    this.boss1Appear = false;

    this.boss2 = boss2;
    this.boss2x = width/2 - 400;
    this.boss2y = height/2;
    this.boss2Appear = false;

    // gun appear
    this.gun = gun;
    this.gunx = width/2;
    this.guny = height - 200;
    this.gunAppear = false;
    }


  display() {
    push();
    // display background website
    image(this.homePage2Image, this.homePage2Imagex, this.homePage2Imagey);

    // display horse.com glitter gif
    // image(this.horseDotCom2Gif, this.horseDotCom2Gifx, this.horseDotCom2Gify, this.horseDotcom2GifWidth, this.horseDotcom2GifHeight);
    pop();

    // displaying menu images
    push();
    imageMode(CENTER);
    image(this.ourMissionMenu, this.ourMissionMenux, this.ourMissionMenuy);
    image(this.caringMenu, this.caringMenux, this.caringMenuy);
    image(this.achievementsMenu, this.achievementsMenux, this.achievementsMenuy);
    image(this.volunteerMenu, this.volunteerMenux, this.volunteerMenuy);
    pop();

    // slideshow dark
    //  this.home2Slideshow.display();

    // displaying horsePopUp
    if (this.horsePopUp) {
      this.displayPopUp();
    }

    // before giving the soul back
    if (this.flask1Appear) {
      this.displayFlask();
    }

    // before giving the soul back
    if (this.curedHorseAppear) {
      this.displayCuredHorse();
    }

    // boss1 appear
    if (this.boss1Appear) {
      this.displayBoss1();
    }

    // boss2 appear
    if (this.boss2Appear) {
      this.displayBoss2();
    }

    // gun appear
    if (this.gunAppear) {
      this.displayGun();
    }

  }

  draw() {
    push();
    // drawing background and website template image
    background(this.background2);
    this.display();
    pop();
  }

  mousePressed() {

    if (mouseX > this.glitchHorsex - this.glitchHorse.width / 2 &&
      mouseX < this.glitchHorsex + this.glitchHorse.width / 2 &&
      mouseY > this.glitchHorsey - this.glitchHorse.height / 2 &&
      mouseY < this.glitchHorsey + this.glitchHorse.height / 2) {
      // hides the pop up parchemin
      this.hideFlask();
      this.hidePopUp();
      setTimeout(this.toggleCuredHorse.bind(this), 50);
      setTimeout(this.toggleGun.bind(this), 300000);
      setTimeout(this.hideCuredHorse.bind(this), 400000);
      setTimeout(this.hideCuredHorse.bind(this), 400000);
      setTimeout(function(){currentState = new Home6(homePageImage3, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, slideshowImages2, screamingHorse, boss1, boss2, gun)
}, 4000);


    }
  }

  displayPopUp() {
    push();
    imageMode(CENTER);
    image(this.glitchHorse, this.glitchHorsex, this.glitchHorsey);
    pop();
  }

  hidePopUp() {
    this.horsePopUp = false;
    this.hideFlask();
    // guitarMusic.loop();
    // isanybodythereSFX.stop();
  }

  // display flask before giving back to horse
  displayFlask() {
    push();
    imageMode(CENTER);
    image(this.flask1, mouseX, mouseY);
    pop();
  }

  // hide flask when soul is back to horse
  hideFlask() {
    this.flask1Appear = false;
  }

  displayCuredHorse() {
    push();
    imageMode(CENTER);
    image(this.curedHorse, this.curedHorsex, this.curedHorsey);
    pop();
  }

  toggleCuredHorse() {
    this.curedHorseAppear = true;
    darkSFX.stop();
    guitarMusic.loop();
    isanybodythereSFX.stop();
    ghostSFX.stop();
    curedSFX.play();
    // setTimeout(this.hidePopUp.bind(this), 6000);
  }

  hideCuredHorse() {
    this.curedHorseAppear = false;
    setTimeout(this.toggleBoss1.bind(this), 100000);
    setTimeout(this.toggleBoss2.bind(this), 100000);
    // guitarMusic.loop();
    // isanybodythereSFX.stop();

  }

// BOSS 1 APPEAR / DISAPPEAR

  displayBoss1() {
    push();
    imageMode(CENTER);
    image(this.boss1, this.boss1x, this.boss1y);
    pop();
  }

  toggleBoss1() {
    this.boss1Appear = true;
    // guitarMusic.stop();
    // isanybodythereSFX.loop();
    // setTimeout(this.hidePopUp.bind(this), 6000);
  }

  hideBoss1() {
    this.boss1Appear = false;
    // guitarMusic.loop();
    // isanybodythereSFX.stop();
  }

  // BOSS 2 APPEAR / DISAPPEAR

  displayBoss2() {
    push();
    imageMode(CENTER);
    image(this.boss2, this.boss2x, this.boss2y);
    pop();
  }

  toggleBoss2() {
    this.boss2Appear = true;
    // guitarMusic.stop();
    // isanybodythereSFX.loop();
    // setTimeout(this.hidePopUp.bind(this), 6000);
  }

  hideBoss2() {
    this.boss2Appear = false;
    // guitarMusic.loop();
    // isanybodythereSFX.stop();
  }

  // GUN APPEAR

  displayGun() {
    push();
    imageMode(CENTER);
    image(this.gun, mouseX, this.guny);
    pop();
  }

  toggleGun() {
    this.gunAppear = true;
    // guitarMusic.stop();
    // isanybodythereSFX.loop();
    // setTimeout(this.hidePopUp.bind(this), 6000);
  }

  hideGun() {
    this.gunAppear = false;
    // guitarMusic.loop();
    // isanybodythereSFX.stop();
  }
}
