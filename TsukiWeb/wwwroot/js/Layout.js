// Layout Master JS

//Scroll Resize 
window.onscroll = function() { ScrollResize() };

var header = $("#myHeader");
var logo = $("#logo");
var searchBar = $("#searchbar");
var headerBackground = $("#header");
var background = $("#background");
var login = $("#login");
var navHeader = $("#navHeader");
var sticky = header.offsetTop;

function ScrollResize() {
  if (window.pageYOffset > 50) {
    $("#myHeader").addClass("sticky");
    $("#header").addClass("resizeHeader");

    $("#logo").addClass("resizeLogo1");
    $("#logo").removeClass("resizeLogo2");

    $("#searchbar").addClass("resizeBar1");
    $("#searchbar").removeClass("resizeBar2");
    
    $("#login").addClass("resizeLogin1");
    $("#login").removeClass("resizeLogin2");

    $("#navHeader").addClass("navHeader");
  } else {
    $("#myHeader").removeClass("sticky");
    $("#header").removeClass("resizeHeader");

    $("#logo").removeClass("resizeLogo1");
    $("#logo").addClass("resizeLogo2");

    $("#searchbar").removeClass("resizeBar1");
    $("#searchbar").addClass("resizeBar2");

    $("#login").removeClass("resizeLogin1");
    $("#login").addClass("resizeLogin2");
    

    $("#navHeader").removeClass("navHeader");
  }
}