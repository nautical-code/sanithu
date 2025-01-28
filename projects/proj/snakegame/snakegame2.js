var sx = [0], sy = [0],
    fx, fy, n=0, length=2, a=0, ends=false;

function setup(){
   createCanvas(1500,700);
   background(20,20,20);
   mov();
   paint();
   frameRate(6);
}

function snake(){
   while(a < length/2){
      rect(sx[a], sy[a], 25, 25);
      fill("red");
      noStroke();
      a++;
   }
   a = 0;
}

function food(){
   rect(fx, fy, 25, 25);
   fill("green");
   noStroke();
}

function mov(){
   fx = Math.round(Math.random() * 59) * 25;
   fy = Math.round(Math.random() * 27) * 25;
   
}

function locate(){
   if(sx[0] == fx && sy[0] == fy){
      length++;
      document.getElementById("score").innerHTML = length - 2;
   }
   while(sx[0] == fx && sy[0] == fy){
      mov();
   }
}

function paint(){
   background(20,20,20);
   food();
   snake();
}

function crawl(){
   
   n++;
   if(keyCode === UP_ARROW){
       sy.unshift(sy[0] - 25);
       sx.unshift(sx[0]);
       if(!(sx[0] == fx && sy[0] == fy)){sy.pop();}
       if(sy[0] < 0){
           sy[0] = 675;
       }
   }else if(keyCode === DOWN_ARROW){
       sy.unshift(sy[0] + 25);
       sx.unshift(sx[0]);
       if(!(sx[0] == fx && sy[0] == fy)){sy.pop();}
       if(sy[0] > 675){
           sy[0] = 0;
       }
   }else if(keyCode === LEFT_ARROW){
       sx.unshift(sx[0] - 25);
       sy.unshift(sy[0]);
       if(!(sx[0] == fx && sy[0] == fy)){sx.pop();}
       if(sx[0] < 0){
           sx[0] = 1475;
       }
   }else if(keyCode === RIGHT_ARROW){
       sx.unshift(sx[0] + 25);
       sy.unshift(sy[0]);
       if(!(sx[0] == fx && sy[0] == fy)){sx.pop();}
       if(sx[0] > 1475){
           sx[0] = 0;
       }
   }
   while(a+1 < length/2){
      if(sx[0] === sx[a+1] && sy[0] === sy[a+1]){
         ends = true;
      }
      a++;
   }
   a = 0;
   locate();
   paint();
}

function draw(){
   if (keyIsPressed === true) {crawl();}
   overprot(ends);
}

function overprot(truth){
   if(truth){
      background(20,20,20);
      textStyle(BOLD);
      text('Game Over,reload page', 50, 90);
}
}