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
  background(0, 0, 0);
  textSize(50);
  textFont("Georgia");
  text("Alex Delorme", 50, 100);
  fill(random(110), random(10), random(204));
  arc(1000, 1000, random(255), random(255), random(255), random(255), random(255), PI + QUARTER_PI, PIE);
}
//Background and name information

function keyTyped(){
  if (key === "a") {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, 50, 100);
  }
  if (key === "s") {
    fill(112, 40, 255);
    ellipse(random(255), random(255), random(255));
  }
  if (key === "d"){
    fill(random(255), random(255), random(255));
    quad(mouseX, mouseY, mouseX -25, mouseY +25, mouseX, mouseY +50, mouseX +25, mouseY +25);
  }
  if(key === " "){
    background(0);
  }
}
//code that makes the key's function when press
//a animated arc for kicks and criteriaS


