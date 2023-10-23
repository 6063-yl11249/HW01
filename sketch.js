let numLines = 16;
let startTime;
let speed = 1; // Adjust the speed of movement

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function draw() {
  let currentTime = millis() - startTime;
  background(220, 10, 100);

  for (let l = 0; l <= numLines; l += 1) {
    let x0 = map(l, 0, numLines, 0, width); // Use sin with an offset of PI/2 to start from the straight line

    let t = sin(currentTime * 0.001 * speed + PI / 2); // Adjust the speed factor with a phase shift
    let x1Initial = map(l, 0, numLines, (4 / 10) * width, (6 / 10) * width);
    let x2 = map(l, 0, numLines, 0, width);
    let x1 = x1Initial;

    if (l <= numLines / 2) {
      // Move to the left for the first half
      let moveDistance = map(abs(t), 0, 1, 0, (4 / 10) * width);
      if (t > 0) {
        x1 = max(x0, x1Initial - moveDistance);
      } else {
        x1 = min(x1Initial, x1Initial + moveDistance);
      }
    } else {
      // Move to the right for the second half
      let moveDistance = map(abs(t), 0, 1, 0, width - (6 / 10) * width);
      if (t > 0) {
        x1 = min(x2, x1Initial + moveDistance);
      } else {
        x1 = max(x1Initial, x1Initial - moveDistance);
      }
    }

    let y1 = height / 2;
    line(x0, 0, x1, y1);
    line(x1, y1, x2, height);
  }
}
