"use strict";

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 0, 2, 2, 1],
  [1, 0, 0, 0, 0, 0, 1, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
let rows = 10;
let cols = 10;
let tileSize = 60;

let player = {
  x: 1,
  y: 1
};

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  checkVictory();

  drawMap();
  drawPlayer();
}

function checkVictory() {
  if (map[player.y][player.x] === 2) {
    console.log("You win!");
  }
}

function drawMap() {
  for (let y = 0; y < map.length; y++) {
    let row = map[y];
    for (let x = 0; x < row.length; x++) {
      let tile = row[x];
      push();
      if (tile === 1) {
        fill(0);
      }
      else if (tile === 2) {
        fill(0, 255, 0);
      }
      else {
        noFill();
      }
      noStroke();
      rect(x * tileSize, y * tileSize, tileSize);
      pop();
    }
  }
}

function drawPlayer() {
  push();
  fill(255, 0, 0);
  noStroke();
  rect(player.x * tileSize, player.y * tileSize, tileSize);
  pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && map[player.y][player.x - 1] !== 1) {
    player.x -= 1;
  }
  else if (keyCode === RIGHT_ARROW && map[player.y][player.x + 1] !== 1) {
    player.x += 1;
  }
  else if (keyCode === UP_ARROW && map[player.y - 1][player.x] !== 1) {
    player.y -= 1;
  }
  else if (keyCode === DOWN_ARROW && map[player.y + 1][player.x] !== 1) {
    player.y += 1;
  }
}
