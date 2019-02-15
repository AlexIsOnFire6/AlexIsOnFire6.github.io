// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200;
let y = 200;
let Rsize = 50;
let pickedUp = false;
let mouseOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(0);
  fill(110, 52, 244);
  mouseOver = false;
  if(mouseX >= x - Rsize/2 && mouseX <= x + Rsize/2){
    if(mouseY >= y - Rsize/2 && mouseY <= y + Rsize/2)
    fill(143, 100, 244);
    mouseOver = true;
  }
  if (pickedUp){
    x = mouseX;
    y = mouseY;
  }
  rect(x,y,Rsize,Rsize);
}