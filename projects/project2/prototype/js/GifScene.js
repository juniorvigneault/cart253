class GifScene extend Scene{

  constructor(x, y, gif){

    super();

    // gif properties
    this.x = x;
    this.y = y;
    this.image = gif;

    // textbox properties
    this.textbox = new Typewriter();
  }
}

  displyGif(){
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y);
    pop();
  }
