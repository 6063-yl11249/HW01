let ellipses = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }

  // Add a new ellipse at the mouse cursor's position
  ellipses.push({ x: mouseX, y: mouseY, alpha: 255 });

  // Limit the number of ellipses to 5
  if (ellipses.length > 5) {
    ellipses.shift();
  }

  // Draw and update the ellipses
  for (let i = 0; i < ellipses.length; i++) {
    let currentEllipse = ellipses[i];
    ellipse(currentEllipse.x, currentEllipse.y, 80, 80);
    currentEllipse.alpha -= 5; // Reduce the alpha (fade out)
    fill(255, currentEllipse.alpha);
  }

  // Remove completely faded out ellipses
  ellipses = ellipses.filter(ellipse => ellipse.alpha > 0);
}
