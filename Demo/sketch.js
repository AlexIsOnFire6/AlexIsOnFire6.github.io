// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0; 
let rectSize = 30;
let x = 0;
let y = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(state === 0)
  x += 1;
  if(x > windowWidth - rectSize) state = 1;

else if (state === 1){
 
}
rect(x,y,rectSize,rectSize);
}
