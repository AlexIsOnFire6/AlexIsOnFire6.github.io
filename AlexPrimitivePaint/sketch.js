// Primitve Paint
// Alex Delorme
// 2/14/2019
//
// Extra for Experts:
// - Did no extra work for experts
function setup() {
  createCanvas(1000, 1000);
}
// Just A Canvas

function draw() {
  //background(0, 0, 0);
  keyTyped();
  textSize(50);
  textFont("Georgia");
  text("Alex Delorme", 50, 100);
  fill(random(110), random(10), random(204));
}
//Background and name information

function keyTyped(){
  if (key === "a") {
    fill(112, 40, 255);
    rect(mouseX, mouseY, 50, 100);
  }
  if (key === "s") {
    fill(112, 40, 255);
    ellipse(mouseX, mouseY, 200, 100);
  }
  if (key === "d"){
    fill(112, 40, 255);
    quad(mouseX, mouseY, mouseX -25, mouseY +25, mouseX, mouseY +50, mouseX +25, mouseY +25);
  }
  if(key === " "){
    background(0);
  }
  arc(random(50), random(50), random(80), random(80), random(0), PI + QUARTER_PI, PIE);
}
//code that makes the key's function when press
//a animated arc for kicks and criteriaS


