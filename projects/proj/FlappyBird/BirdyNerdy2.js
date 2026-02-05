let bird = {
    yvelocity: 0,
    xvelocity: 5,
    totalFood: 0,
    totalDistance: 0,
    gravity: 1,
    ypos: 200,
    xpos: 100,
    stat: true,
    freefall: false
}
let gameOver = false;
let pipesDrw = [];
let pose = 500;

function setup() {
    createCanvas( windowWidth , windowHeight );
    imageMode(CENTER);
    bird.phone = ((windowWidth < windowHeight) || (windowHeight< 600)) ? true : false
}

function preload() {
    bird1 = loadImage('svg/green-1a.png');
    bird2 = loadImage('svg/green-1b.png');
    bird3 = loadImage('svg/green-2a.png');
    bird4 = loadImage('svg/green-2b.png');
}

function draw(){
    background( 100, 180, 255);
    fill( 255, 180, 200);
    rect(0, 0, windowWidth, 5);
    rect(0, windowHeight-5, windowWidth, 5);
    bird.yvelocity += bird.gravity;
    frameRate(20);
    flap();
    pipe();
    hit();
}

function keyPressed() {
    if (key === ' ' && bird.stat) { 
        bird.yvelocity = -16;
    }
    if (key === 'c') {
        bird.gravity = 0;
        bird.yvelocity = 0;
        bird.stat = false;
        console.info( bird.xpos - 50, "   ", pose, "   ", pose + 20,"   ",bird.xpos + 30);
  }
}

function mousePressed() {
    if (bird.stat){
        bird.yvelocity = -16;
    }
}

function flap(){
    if((bird.stat) && (bird.ypos > 40 || bird.ypos < windowHeight - 26)){ 
        if (frameCount % 20 < 10) {
            image(bird1, bird.xpos, bird.ypos  += bird.yvelocity, 60, 60);
        } else {
            image(bird2, bird.xpos, bird.ypos  += bird.yvelocity, 60, 60);
        }
    }else if(!bird.stat){
        if (frameCount % 20 < 10) {
            image(bird3, bird.xpos, bird.ypos  += bird.yvelocity, 60, 60);
        } else {
            image(bird4, bird.xpos, bird.ypos  += bird.yvelocity, 60, 60);
        }
    }
    if(bird.ypos >= windowHeight - 26){
        bird.stat = false;
        bird.gravity = 0;
        bird.yvelocity = 0;
        bird.ypos = windowHeight - 26;
    }
    if(bird.ypos <= 40){
        bird.stat = false;
        bird.gravity = 2;
    }
}

function pipe(){
    while(pipesDrw.length < 25){
        pipePos = Math.random()*(windowHeight -200) + 60;
        pipesDrw.push(pipePos);
    }
    if(pose < -20){
        pipePos = Math.random()*windowHeight;
        pipesDrw.shift();
        pose = 250 + pose;
    }
    // pipesDrw = [ 300, 400, 500, 200]; //this line is for error checking only
    let i = 0;
    pipesDrw.forEach((elem)=>{
        
        fill( 20, 100, 60);
        rect(pose + i * 250, 0, 20, elem);
        rect(pose + i * 250, elem + 150, 20, windowHeight - elem - 150);
        i++;
        if(frameCount % 1000 == 0){console.log(pose + i * 80, "/t:" , elem)}; // for dev people only.😉
    })
    if(bird.stat){pose = pose - bird.xvelocity;};
}

function hit(){
    if(((bird.xpos + 25 > pose) && (bird.xpos - 20 < pose + 20)) && ((bird.ypos - 18 < pipesDrw[0]) || (bird.ypos + 18 > pipesDrw[0] + 150))){
        bird.stat = false;
    }
}