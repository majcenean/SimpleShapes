function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER);
 }

function draw() {
  background('#484569');
  fill('#fff');
  text("Simple Shapes", width/2, height/2)
}