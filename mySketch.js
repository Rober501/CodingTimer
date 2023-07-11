var r = 200;
var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function windowResized() {
  resizeCanvas(windowwidth, windowHeight);
}

function draw() {
  background(0, 5);
  translate(width / 2, height / 2);
  var s = second();
  var m = minute();
  var h = hour();

  fill(255);
  textSize(60);
  text(h + " : " + m, -90, 20);

  let f = 0.01 / 2;
  let w = TWO_PI * f;
  let t = frameCount;

  let x = r * sin(w * t);
  let y = r * cos(w * t);

  if (mouseY < height / 2) {
    noStroke();
    fill(236, 240, 248);
    ellipse(x, 0, 40, 40);
    ellipse(y, 0, 120, 120);
  } else {
    ellipse(x, y, 40, 40);
    ellipse(y, x, 120, 120);
  }

  if (mouseX < width / 2) {
    rotate(angle++);
  } else {
    rotate((0.8 * frameCount) / 60);
  }
  fill(35, 200, 234);
  rect(x, 0, random(120), 3);
  rect(0, y, 8, random(30));
}
