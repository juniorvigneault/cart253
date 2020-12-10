"use strict";

let circle = {
  x: 250,
  y: 250,
  size: 100
};

let bullet = {
  x: -100,
  y: -100,
  size: 10,
  vx: 0,
  vy: 0,
  speed: 20,
  fired: false
};

let enemy = {
  x: 800,
  y: 250,
  size: 200,
  active: true
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  circle.x = mouseX;
  circle.y = mouseY;

  bullet.x += bullet.vx;
  bullet.y += bullet.vy;

  if (bullet.x > width) {
    bullet.fired = false;
  }

  let d = dist(bullet.x, bullet.y, enemy.x, enemy.y);
  if (bullet.fired && enemy.active && d < bullet.size / 2 + enemy.size / 2) {
    // Stop the bullet
    bullet.fired = false;
    // Kill the enemy
    enemy.active = false;
  }

  fill(255);
  ellipse(circle.x, circle.y, circle.size);

  if (bullet.fired) {
    ellipse(bullet.x, bullet.y, bullet.size);
  }

  if (enemy.active) {
    fill(255, 0, 0);
    ellipse(enemy.x, enemy.y, enemy.size);
  }
}

function mousePressed() {
  if (bullet.fired) {
    return;
  }

  bullet.fired = true;
  bullet.x = circle.x;
  bullet.y = circle.y;
  bullet.vx = bullet.speed;
}
