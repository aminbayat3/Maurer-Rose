const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
let n = 0;
let d = 0;

function setup() {
  // create canvas
  createCanvas(650, 490);
  angleMode(DEGREES);
}

function draw() {
  n = input1.value;
  d = input2.value;
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();
  beginShape();
  strokeWeight(1);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();

  noFill();
  stroke(255, 0, 255, 255);
  strokeWeight(4);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
}
