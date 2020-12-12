"use strict";

let vid

function setup() {
  createCanvas(0,0);
  vid = createVideo(`assets/images/theend.mp4`)
  vid.play();
  background(0)
}
