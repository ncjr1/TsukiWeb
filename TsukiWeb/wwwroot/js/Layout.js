// Layout Master JS

//Scroll Resize 
window.onscroll = function() { ScrollResize() };

function ScrollResize() {
  if (window.pageYOffset > 90) {
    $("#consertaHeader").addClass("consertarHeader");
    $("#header").addClass("transition");
    $("#header").addClass("sticky");
    $("#logo").addClass("resizeLogo");
    $("#searchbar").addClass("resizeSearchBar");
    $("#login").addClass("resizeLogin");
    $("#navHeader").addClass("resizeNav");
  } else {
    $("#consertaHeader").removeClass("consertarHeader");
    $("#header").removeClass("transition");
    $("#header").removeClass("sticky");
    $("#logo").removeClass("resizeLogo");
    $("#searchbar").removeClass("resizeSearchBar");
    $("#login").removeClass("resizeLogin");
    $("#navHeader").removeClass("resizeNav");
  }
}