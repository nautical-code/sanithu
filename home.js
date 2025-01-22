window.addEventListener('scroll', () => {
   const scrollPosition = window.scrollY || window.pageYOffset; 
   document.getElementById("home").style.background = `linear-gradient(${scrollPosition/20.4 + 90}deg, rgba(255, 170, 0, 0.74),hsla(40, 100%, 50%, 0.5), rgba(255, 255, 255, 0.5))`;
 });
 document.addEventListener('contextmenu', (event) => {
  event.preventDefault(); 
});
