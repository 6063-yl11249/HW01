let numLines = 16;
let startTime;
let speed = 1; // Adjust the speed of movement

function setup() {
  createCanvas(windowWidth,windowHeight);
  startTime = millis();
}

function draw() {
  let currentTime = millis() - startTime;
  background(220, 10, 100);
  for (let l = 0; l <= numLines; l += 1) {
    let x0 = map(l, 0, numLines, 0, width);
    let t = (currentTime * 0.001) * speed; // Adjust the speed factor
    let x1 = map(l, 0, numLines, (4 / 10) * width, (6 / 10) * width);
    x1 += map(t, 0, 1, 0, width - ((6 / 10) * width));
    let x2 = map(l, 0, numLines, -width, 2 * width);
    let y1 = map(t, 0, 1, height / 2, 0);
    line(x0, 0, x1, y1);
    line(x1, y1, x2, height);
  }
}

