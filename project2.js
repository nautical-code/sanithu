let line1, line2;
let initialRotationX, initialRotationY, initialRotationZ; 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); 

  // Define the initial positions of the lines
  line1 = [createVector(-100, 0, 0), createVector(100, 0, 0)];
  line2 = [createVector(0, 0, -100), createVector(0, 0, 100)];

  // Store initial device orientation
  initialRotationX = rotationX; 
  initialRotationY = rotationY;
  initialRotationZ = rotationZ;
}

function draw() {
  background(0);

  // Calculate the difference in device orientation 
  let deltaRotationX = rotationX - initialRotationX;
  let deltaRotationY = rotationY - initialRotationY;
  let deltaRotationZ = rotationZ - initialRotationZ;

  // Apply only the delta rotations to the scene
  rotateX(radians(deltaRotationX));
  rotateY(radians(deltaRotationY));
  rotateZ(radians(deltaRotationZ));

  // Draw the lines
  stroke(255);
  strokeWeight(3);
  line(line1[0].x, line1[0].y, line1[0].z, line1[1].x, line1[1].y, line1[1].z);
  line(line2[0].x, line2[0].y, line2[0].z, line2[1].x, line2[1].y, line2[1].z); 
}
