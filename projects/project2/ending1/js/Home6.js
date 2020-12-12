class Home6 {
  // class home is the home webpage of horse.com || displays the webpage and different things to click on

  constructor(image3, gif2, bgImg2, caring, ourMission, achievements, volunteer, screamingHorse, boss1, boss2, gun, boss11, boss22, bullet) {
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


    // screaming horse
    this.screamingHorse = screamingHorse;
    this.screamingHorsex = width / 2;
    this.screamingHorsey = height / 2;
    this.screamingHorseAppear = false;


    // horse pop up with his soul back
    this.curedHorse = curedHorse;
    this.curedHorsex = width / 2;
    this.curedHorsey = height / 2;
    this.curedHorseAppear = false;

    // enemy appear
    this.boss1 = boss1;
    this.boss11 = boss11;
    this.boss1x = width / 2 + 400;
    this.boss1y = height / 2;
    this.boss1Appear = true;
    this.boss1Lives = 2;
    this.boss1Speed = 10;
    this.boss1vx = 0;
    this.boss1vy = 0;
    this.changeDirection = undefined;

    this.boss2 = boss2;
    this.boss22 = boss22;
    this.boss2Lives = 2;
    this.boss2x = width / 2 - 400;
    this.boss2y = height / 2;
    this.boss2Appear = true;
    this.boss2Speed = 10;
    this.boss2vx = 0;
    this.boss2vy = 0;

    // gun appear
    this.gun = gun;
    this.gunx = undefined;
    this.guny = height - 200;
    this.gunAppear = true;

    // bullets
    this.bullet = bullet;
    this.bulletSize = 25;
    this.bulletx = width / 2;
    this.bullety = height / 2;
    this.bulletvx = 0;
    this.bulletvy = 0;
    this.bulletSpeed = 50;
    this.bulletFired = false;
  }


  display() {
    push();
    // display background website
    image(this.homePage2Image, this.homePage2Imagex, this.homePage2Imagey);
    pop();

    // displaying menu images
    push();
    imageMode(CENTER);
    image(this.ourMissionMenu, this.ourMissionMenux, this.ourMissionMenuy);
    image(this.caringMenu, this.caringMenux, this.caringMenuy);
    image(this.achievementsMenu, this.achievementsMenux, this.achievementsMenuy);
    image(this.volunteerMenu, this.volunteerMenux, this.volunteerMenuy);
    pop();



    // boss1 appear
    if (this.boss1Appear) {
      this.displayBoss1();
    }

    // boss2 appear
    if (this.boss2Appear) {
      this.displayBoss2();
    }

    // display bullet when shot
    this.displayBullet();

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

    // move & wrap bosses
    this.moveBoss1();
    this.wrapBoss1();

    this.moveBoss2();
    this.wrapBoss2();

    // move bullet when shot
    this.bulletMove();

    pop();


  }

  mousePressed() {
    if (this.bulletFired) {
      return;
    }

    this.bulletFired = true;
    this.bulletx = this.gunx;
    this.bullety = this.guny - 30;
    this.bulletvx = this.bulletSpeed;
    this.bulletvy = -this.bulletSpeed;
    bulletSFX.play();

  }

  // BOSS 1 APPEAR / DISAPPEAR

  displayBoss1() {
    push();
    if (this.boss1Lives === 2) {
      imageMode(CENTER);
      image(this.boss1, this.boss1x, this.boss1y);
    } else if (this.boss1Lives === 1) {
      image(this.boss11, this.boss1x, this.boss1y);
    }
    pop();
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
    if (this.boss2Lives === 2) {
      image(this.boss2, this.boss2x, this.boss2y);
    } else if (this.boss2Lives === 1) {
      image(this.boss22, this.boss2x, this.boss2y);
    }
    pop();
  }


  hideBoss2() {
    this.boss2Appear = false;
    // guitarMusic.loop();
    // isanybodythereSFX.stop();
  }

  moveBoss1() {
    this.changeDirection = random();
    if (this.changeDirection < 0.02) {
      this.boss1vx = random(-this.boss1Speed, this.boss1Speed);
      this.boss1vy = random(-this.boss1Speed, this.boss1Speed);
    }
    this.boss1x = this.boss1x + this.boss1vx;
    this.boss1y = this.boss1y + this.boss1vy;
  }

  moveBoss2() {
    this.changeDirection = random();
    if (this.changeDirection < 0.02) {
      this.boss2vx = random(-this.boss2Speed, this.boss2Speed);
      this.boss2vy = random(-this.boss2Speed, this.boss2Speed);
    }
    this.boss2x = this.boss2x + this.boss2vx;
    this.boss2y = this.boss2y + this.boss2vy;
  }

  wrapBoss1() {
    if (this.boss1x > width) {
      this.boss1x -= width;
    } else if (this.boss1x < 0) {
      this.boss1x += width;
    } else if (this.boss1y > width) {
      this.boss1y -= width;
    } else if (this.boss1y < 0) {
      this.boss1y += width;
    }
  }

  wrapBoss2() {
    if (this.boss2x > width) {
      this.boss2x -= width;
    } else if (this.boss2x < 0) {
      this.boss2x += width;
    } else if (this.boss2y > width) {
      this.boss2y -= width;
    } else if (this.boss2y < 0) {
      this.boss2y += width;
    }
  }
  // GUN APPEAR

  displayGun() {
    push();
    this.gunx = mouseX;
    imageMode(CENTER);
    image(this.gun, this.gunx, this.guny);
    pop();
  }

  hideGun() {
    this.gunAppear = false;
    // guitarMusic.loop();
    // isanybodythereSFX.stop();
  }

  bulletMove() {
    this.bulletx += this.bulletvx;
    this.bullety += this.bulletvy;

    if (this.bulletx > width) {
      this.bulletFired = false;
    }

    // killing boss 1

    let d = dist(this.bulletx, this.bullety, this.boss1x, this.boss1y);
    if (this.bulletFired && this.boss1Appear && d < this.bulletSize / 2 + this.boss1.width / 2) {
      // Stop the bullet
      this.bulletFired = false;
      // boss 1 disappear
      this.boss1Lives -= 1;
      this.boss1Speed = 50;
      if (this.boss1Lives === 0 && this.boss2Lives === 0) {
        killSFX.stop();
        currentState = new TheEnd();
      }
    }

    // killing boss 2
    let d2 = dist(this.bulletx, this.bullety, this.boss2x, this.boss2y);
    if (this.bulletFired && this.boss2Appear && d2 < this.bulletSize / 2 + this.boss2.width / 2) {
      // Stop the bullet
      this.bulletFired = false;
      this.boss2Speed = 50;
      // boss 2 disappear
      this.boss2Lives -= 1;
      if (this.boss2Lives === 0 && this.boss1Lives === 0) {
        killSFX.stop();
        currentState = new TheEnd();
      }
    }
  }

  displayBullet() {
    if (this.bulletFired) {
      push();
      imageMode(CENTER);
      image(this.bullet, this.bulletx, this.bullety, this.bulletSize, this.bulletSize);
      pop();
    }
  }

  keyTyped(){
  }
  KeyPressed(){
  }

}
