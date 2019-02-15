// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let img;

function preload() {
  img = loadImage("assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}


function draw() {
  background(220);
  image(img, mouseX, mouseY, 200, 200);
}
