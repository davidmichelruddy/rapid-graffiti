var n = 200;
var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  angleMode(DEGREES);
  noFill();
  for (var i = 0; i < n; i++) {
    var c = new Particle();
    circles.push(c);
  }

}

function draw() {
  circles.forEach(c =>
    c.update()
  );
  circles.forEach(c =>
    c.display()
  );
}