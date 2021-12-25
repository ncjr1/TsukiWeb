// Layout Master JS

//Scroll Resize 
window.onscroll = function() { ScrollResize() };

var header = $("#myHeader");
var sticky = header.offsetTop;

function ScrollResize() {
  if (window.pageYOffset > 10) {
    $("#header").addClass("transition");
    $("#header").addClass("sticky");
    $("#logo").addClass("resizeLogo");
    $("#searchbar").addClass("resizeSearchBar");
    $("#login").addClass("resizeLogin");
    $("#navHeader").addClass("resizeNav");
  } else {
    $("#header").removeClass("transition");
    $("#header").removeClass("sticky");
    $("#logo").removeClass("resizeLogo");
    $("#searchbar").removeClass("resizeSearchBar");
    $("#login").removeClass("resizeLogin");
    $("#navHeader").removeClass("resizeNav");
  }
}