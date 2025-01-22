var rx = 45, ry = 45, rz = 45, inter; 

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
  describe('A cube drawn against a gray background. The cube rotates for a few seconds when the device is moved.');
}

function draw() {
  background(0);
  orbitControl(); 
  rotateX(rx);
  rotateY(ry);
  rotateZ(rz);
  ambientLight(255, 170, 0);
  pointLight(255, 170, 0, mouseX/10, mouseY/10, 100);
  pointLight(100, 100, 100, -mouseX/10, -mouseY/10, -100);
  noStroke();
  box();
}

function deviceMoved() {
  // Clear any existing interval
  clearInterval(inter); 

  // Start a new interval to rotate the cube for a limited time
  inter = setInterval(rot, 400); 
  setTimeout(() => {
    clearInterval(inter); 
  }, 3000); // Rotate for 3 seconds (adjust as needed)
}

function rot() {
  rx = Math.random() * 360;
  ry = Math.random() * 360;
  rz = Math.random() * 360;
}
