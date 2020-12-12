class Home5 {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(glitchHorse, flask1, curedHorse, boss1, boss2, gun) {

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
    imageMode(CENTER);
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
    pop();

  }

  draw() {
    push();
    // drawing background and website template image
    background(0);
    this.display();
    pop();
  }

  mousePressed() {

    if (mouseX > this.glitchHorsex - this.glitchHorse.width / 2 &&
      mouseX < this.glitchHorsex + this.glitchHorse.width / 2 &&
      mouseY > this.glitchHorsey - this.glitchHorse.height / 2 &&
      mouseY < this.glitchHorsey + this.glitchHorse.height / 2) {
      // hides the pop up parchemin
      this.glitchHorsex = 2000;
      this.glitchHorsey = 2000;
      this.hideFlask();
      this.hidePopUp();
      setTimeout(this.toggleCuredHorse.bind(this), 50);
      setTimeout(this.toggleBoss1.bind(this), 29000);
      setTimeout(this.toggleBoss2.bind(this), 29000);
      setTimeout(this.toggleGun.bind(this), 38000);
      setTimeout(this.hideCuredHorse.bind(this), 39000);
      setTimeout(function(){currentState = new Home6(homePageImage3, horseDotComGif2, backgroundHorse2, caring, ourMission, achievements, volunteer, screamingHorse, boss1, boss2, gun, boss11, boss22, bullet)
}, 39500);


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
    bgGlitchSFX.stop();
    // setTimeout(this.hidePopUp.bind(this), 6000);
  }

  hideCuredHorse() {
    this.curedHorseAppear = false;
    killSFX.play();
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
    guitarMusic.stop();
    curedSFX.stop();
    ohnoSFX.play();
    ohnomuSFX.play();

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
    gunSFX.play();
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
