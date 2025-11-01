let img;
let confetti = [];

function preload() {
  img = loadImage('ampulheta.png'); 
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);
  
  for (let i = confetti.length - 1; i >= 0; i--) {
    let c = confetti[i];
    fill(c.col);
    noStroke();
    circle(c.x, c.y, 8);
    c.x += c.vx;
    c.y += c.vy;
    c.vy += 0.2;
    if (c.y > height) {
      confetti.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    for (let i = 0; i < 120; i++) {
      confetti.push({
        x: mouseX,
        y: mouseY,
        vx: random(-4, 4),
        vy: random(-6, -2),
        col: color(random(150, 255), random(100, 255), random(150, 255))
      });
    }
  }
}
