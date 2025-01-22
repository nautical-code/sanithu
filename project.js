var rx = 45, ry = 45, rz = 45, inter, shake = false;
function setup() {
   createCanvas(window.innerWidth, window.innerHeight, WEBGL);
 
   angleMode(DEGREES);
 
   describe('A cube drawn against a gray background. The intensity of the light changes when the user double-clicks.');
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
   inter = setInterval(rot,400);
   setTimeout(hault,8000);
}
rot = () => {
   rx = Math.random()*360;
   ry = Math.random()*360;
   rz = Math.random()*360;
}
hault = () => {
   shake = false;
   clearInterval(inter);
   setMoveThreshold(10);
}
