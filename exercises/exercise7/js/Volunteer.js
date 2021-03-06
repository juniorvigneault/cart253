class Volunteer {

  constructor(volunteerBg, homeIcon){
    this.volunteerBg = volunteerBg
    this.volunteerBgx = 0;
    this.volunteerBgy = 0;

    // checking if the user visited the caring page
    this.volunteerChecked = false;

    // home icon
    this.homeIcon = homeIcon;
    this.homeIconx = 700;
    this.homeIcony = 800;
  }

  // display background
  display(){
    push();
    image(this.volunteerBg, this.volunteerBgx, this.volunteerBgy);
    pop();

    // display home Icon
    push();
    imageMode(CENTER);
    image(this.homeIcon, this.homeIconx, this.homeIcony);
    pop();
  }

  draw(){
    push();
    this.display();
    pop();
  }

  mousePressed(){
    if (mouseX > this.homeIconx - this.homeIcon.width / 2 &&
       mouseX < this.homeIconx + this.homeIcon.width / 2 &&
       mouseY > this.homeIcony - this.homeIcon.height / 2 &&
       mouseY < this.homeIcony + this.homeIcon.height / 2) {
       // current state definition
       currentState = new Home(homePageImage, horseDotComGif, backgroundHorse, caring, ourMission, achievements, volunteer);
       this.volunteerChecked = true;
     }
  }
}
