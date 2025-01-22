window.addEventListener('scroll', () => {
   const scrollPosition = window.scrollY || window.pageYOffset; 
   if(1 == state%2){
    document.getElementById("home").style.background = `linear-gradient(${scrollPosition/20.4 + 90}deg, hsla(40, 100%, 50%, 0.5), hsla(40, 100.00%, 41.00%, 0.50), hsla(40, 100.00%, 18.40%, 0.50), hsla(40, 100.00%, 42.20%, 0.50))`;
  } else {
    document.getElementById("home").style.background = `linear-gradient(${scrollPosition/20.4 + 90}deg, hsla(40, 100%, 50%, 0.5),hsla(40, 100%, 53%, 0.5),hsla(40, 100%, 71%, 0.5), hsla(40, 100%, 56%, 0.5))`;
  }
 });
 document.addEventListener('contextmenu', (event) => {
  event.preventDefault(); 
});

var state = 1;
var light = () => {
  state ++;
  if(1 == state%2){
    document.getElementById("lit").textContent = "brightness_5";
    document.getElementById("home").style.background = "linear-gradient(to right, hsla(40, 100%, 50%, 0.5), hsla(40, 100.00%, 41.00%, 0.50), hsla(40, 100.00%, 18.40%, 0.50), hsla(40, 100.00%, 42.20%, 0.50))"
  } else {
    document.getElementById("lit").textContent = "brightness_2";
    document.getElementById("home").style.background = "linear-gradient(to right, hsla(40, 100%, 50%, 0.5),hsla(40, 100%, 53%, 0.5),hsla(40, 100%, 71%, 0.5), hsla(40, 100%, 56%, 0.5))";
  }
  console.log("done");
}
window.addEventListener('load', () => {
  setInterval(() => {document.getElementById("cover").style.display = "none"; document.getElementById("html").style.overflow = "visible";}, 4000);
  
});
