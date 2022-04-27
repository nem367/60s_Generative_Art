let x; //x of eye
let y; //y of eye
let s; //size of eye
let Xs; //x of square
let Ys; //y of square

function setup() {
  createCanvas(700, 600);
  background(224, 210, 214);
  noStroke();
  ellipseMode(CENTER);
  rectMode(CENTER);

  for (let i = 0; i < random(4, 6); i++) {
    for (let w = 700; w >= 200; w = w - 100) {
      sqwrz(random(width), random(height), random(w - 100, w));
      eye(random(width), random(height), random(w - 100, w));
    }
    // fill(random(255), random(255), random(255), random(50, 100));
    // textSize(random(5, 50));
    // text("surprise!", random(width), random(height));
  }
}

function mousePressed() {
  if (mouseIsPressed) {
    for (let i = 0; i < random(4, 6); i++) {
      for (let w = 700; w >= 200; w = w - 100) {
        sqwrz(random(width), random(height), random(w - 100, w));
        eye(random(width), random(height), random(w - 100, w));
      }
      // fill(random(255), random(255), random(255), random(50, 100));
      // textSize(random(5, 50));
      // text("surprise!", random(width), random(height));
    }
  }
}

function sqwrz(x, y, s) {
  fill(random(255), random(255), random(255));
  rect(x, y, s);
  fill(random(255), random(255), random(255));
  rect(x, y, s - 50);
  fill(random(255), random(255), random(255));
  rect(x, y, s - 100);
}
function eye(x, y, s) {
  fill(random(30, 200), random(50, 180), random(60, 200));
  ellipse(x, y, s);
  fill(random(200, 255), random(150, 200), random(150, 230));
  ellipse(x, y, s - 50);
  fill(random(90, 150), random(140, 200), random(100, 200));
  ellipse(x, y, s - 100);
}
