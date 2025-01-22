// function setup() {
//    createCanvas(100, 100, WEBGL);
//  }
 
//  function draw() {
//    background(200);
//    //rotateZ(radians(rotationZ));
//    rotateX(radians(rotationX));
//    //rotateY(radians(rotationY));
//    box(200, 200, 200);
//    describe(`red horizontal line right, green vertical line bottom.
//      black background.`);
//  }
let line1, line2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); 

  // Define the initial positions of the lines
  line1 = [createVector(-100, 0, 0), createVector(100, 0, 0)];
  line2 = [createVector(0, 0, -100), createVector(0, 0, 100)]; 
}

function draw() {
  background(220);

  // Rotate the scene to match device orientation
  rotateX(radians(rotationX)); 
  rotateY(radians(rotationY)); 
  rotateZ(radians(rotationZ)); 

  // Draw the lines
  stroke(255);
  strokeWeight(3);
  line(line1[0].x, line1[0].y, line1[0].z, line1[1].x, line1[1].y, line1[1].z); 
  line(line2[0].x, line2[0].y, line2[0].z, line2[1].x, line2[1].y, line2[1].z); 
}