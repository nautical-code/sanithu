let bird1, bird2;
let pipesUp = [];
let pipesDown = [];
let pipes = [];
let bird = {
    speed: 0,
    totalFood: 0,
    totalDistance: 0,
    gravity: 1,
    velocity: 0,
    xpos: 100,
    ypos: 200,
    stat: true
}
let phone = false;
let freefall = false;
function preload() {
    bird1 = loadImage('svg/green-1a.png');
    bird2 = loadImage('svg/green-1b.png');
    bird3 = loadImage('svg/green-2a.png');
    bird4 = loadImage('svg/green-2b.png');
}

function setup() {
    if (windowWidth < 600) {
        let cvn = createCanvas(windowWidth, windowHeight);
        cvn.style('display', 'block');
        cvn.style('position', 'absolute');
        cvn.style('top', '0');
        cvn.style('left', '0');
        phone = true;
    }else{
        createCanvas(windowWidth - 200, windowHeight - 120);
    }
    imageMode(CENTER);
}

function draw() {
    
    background( 180, 200, 255);
    fill( 255, 220, 225);
    rect(0, 0, windowWidth, 5);
    rect(0, windowHeight - 125, windowWidth, 5);
    bird.velocity += bird.gravity;
    if(bird.stat || freefall){ 
        border();
        noFill(); /* for dev purpose only*/
        stroke( 0, 0, 0); 
        ellipse(bird.xpos, bird.ypos, 50, 36);
        if (frameCount % 20 < 10) {
            image(bird1, bird.xpos, bird.ypos  += bird.velocity, 60, 60);
        } else {
            image(bird2, bird.xpos, bird.ypos  += bird.velocity, 60, 60);
        }
        // piping.drw();
        // if (frameCount % 30 == 0) {
        //     piping();
        // }
        if (frameCount % 1000 == 0) {
            bird.speed++;
        }
    }else{
        border();
        noFill(); /* for dev purpose only*/
        stroke( 0, 0, 0); 
        ellipse(bird.xpos, bird.ypos, 50, 36);
        if (frameCount % 20 < 10) {
            image(bird3, bird.xpos, windowHeight-156, 60, 60);
        } else {
            image(bird4, bird.xpos, windowHeight-156, 60, 60);
        }
    }  
}

function keyPressed() {
    if (key === ' ' && !gameOver.chk) { 
        bird.velocity = -16;
    }
    if (key === 'c') {
        bird.gravity = 0;
        bird.velocity = 0;
  }
}

function mousePressed() {
    if (!gameOver.chk){
        bird.velocity = -16;
    }
}

// function piping(){
//     let pint;
//     if (windowHeight > windowWidth){
//         pint = pipes.push(Math.random()*(windowHeight));
//     }else{
//         pint = pipes.push(Math.random()*(windowWidth - 200));
//     }
//     pipes.push(pint);
//     pipes.shift();
//     xpip = 100;
// }

// function drawPipe(){
//     pipes.forEach((elem) => {
//         fill(100,200,150);
//         rect(xpip, 0, 20, elem);
//         rect(xpip, elem - 30, 20, windowHeight);
//     })
// }

function border(){
    if(bird.ypos <= 36){
        gameOver.chk = true
        gameOver.img();
    }
    if(/*(phone && (bird.ypos > windowWidth)) || (!phone && (*/bird.ypos > windowHeight - 156/*))*/){
        gameOver.chk = true
        gameOver.img();
        gameOver.fall();
    }
}

gameOver = {
    img: function(){
        bird.stat = false;
        this.chk = false;
    },
    fall: function(){
        freefall = true;
        this.chk = false
    },
    chk: false
}