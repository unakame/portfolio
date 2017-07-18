var lastScrollTop = 100;

window.addEventListener("scroll", function(){
  var currentScroll = window.scrollY;
  if (currentScroll < 100) {
  document.getElementById("ul").classList.remove("active");
} if (currentScroll > lastScrollTop){
  document.getElementById("ul").classList.add("active");
} if( currentScroll >= 420 && currentScroll < 1160) {
  document.getElementById("ul").classList.add("active");
} 

 lastScrollTop = currentScroll;
});