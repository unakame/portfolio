var lastScrollTop = 100;

window.addEventListener("scroll", function(){
  var currentScroll = window.scrollY;
  if (currentScroll < 100) {
  document.getElementById("ul").classList.remove("active");
  document.getElementsByClassName("nav-info")[0].classList.remove("color-letters");
  document.getElementsByClassName("nav-info")[1].classList.remove("color-letters");
  document.getElementsByClassName("nav-info")[2].classList.remove("color-letters");
} if (currentScroll > lastScrollTop){
  document.getElementById("ul").classList.add("active");
  document.getElementsByClassName("nav-info")[0].classList.add("color-letters");
  document.getElementsByClassName("nav-info")[1].classList.add("color-letters");
  document.getElementsByClassName("nav-info")[2].classList.add("color-letters");
  document.getElementsByClassName("nav-info")[0].classList.add("color-hover");
  document.getElementsByClassName("nav-info")[1].classList.add("color-hover");
  document.getElementsByClassName("nav-info")[2].classList.add("color-hover");
} if( currentScroll >= 420 && currentScroll < 1160) {
  document.getElementById("ul").classList.add("active");
} 

 lastScrollTop = currentScroll;
});