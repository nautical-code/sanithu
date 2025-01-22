let line1, line2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); 

  // Define the initial positions of the lines (relative to a stable "ground")
  line1 = [createVector(-100, 0, 0), createVector(100, 0, 0)]; 
  line2 = [createVector(0, 0, -100), createVector(0, 0, 100)]; 
}

function draw() {
  background(0);

  // Apply device orientation rotations (but keep the lines fixed relative to the "ground")
  push(); 
  rotateX(-radians(rotationX)); // Invert X rotation to counteract device tilt
  rotateY(-radians(rotationY)); // Invert Y rotation to counteract device tilt
  rotateZ(-radians(rotationZ)); // Invert Z rotation to counteract device tilt

  // Draw the lines (now aligned with the "ground")
  stroke(255);
  strokeWeight(3);
  line(line1[0].x, line1[0].y, line1[0].z, line1[1].x, line1[1].y, line1[1].z);
  line(line2[0].x, line2[0].y, line2[0].z, line2[1].x, line2[1].y, line2[1].z);

  pop(); 
}
