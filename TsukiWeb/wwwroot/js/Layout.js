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
    header.addClass("sticky");
    headerBackground.addClass("resizeHeader");

    logo.addClass("resizeLogo1");
    logo.removeClass("resizeLogo2");

    searchBar.addClass("resizeBar1");
    searchBar.removeClass("resizeBar2");
    
    login.addClass("resizeLogin1");
    login.removeClass("resizeLogin2");

    navHeader.addClass("navHeader");
  } else {
    header.removeClass("sticky");
    headerBackground.removeClass("resizeHeader");

    logo.removeClass("resizeLogo1");
    logo.addClass("resizeLogo2");

    searchBar.removeClass("resizeBar1");
    searchBar.addClass("resizeBar2");

    login.removeClass("resizeLogin1");
    login.addClass("resizeLogin2");
    

    navHeader.removeClass("navHeader");
  }
}