// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x,y;
let xSpeed,ySpeed;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  xSpeed = random(-3, 3)
  ySpeed = random(-3, 3)
}

function draw() {
  //background(0, 0, 0);
  ellipse(x, y, 25, 25);
  x += xSpeed;
  y += ySpeed;
  fill(random(250), random(250), random(250))
}

function mousePressed(){
  //fill(255,0,0)
  xSpeed = random(-3, 3)
  ySpeed = random(-3, 3)
}
 