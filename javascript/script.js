window.onscroll = function() {
  navbarSticky();
};

// Get the navbar
var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarSticky() {
  if (window.pageYOffset >= sticky) {
    logo.classList.remove("hide");
    logo.classList.add("show");
    navbar.classList.add("sticky");
    navbar.classList.remove("clip-path");
  } else {
    logo.classList.add("hide");
    logo.classList.remove("show");
    navbar.classList.add("clip-path");
    navbar.classList.remove("sticky");
  }
}

var s1 = document.getElementById("service1");
var s2 = document.getElementById("service2");
var s3 = document.getElementById("service3");

var s1clicker = document.getElementById("service1-clicker");
var s2clicker = document.getElementById("service2-clicker");
var s3clicker = document.getElementById("service3-clicker");

function services(service) {
    s1.classList.remove("service-single-active");
    s2.classList.remove("service-single-active");
    s3.classList.remove("service-single-active");

    s1clicker.classList.remove("active");
    s2clicker.classList.remove("active");
    s3clicker.classList.remove("active");
    
    if (service == 's1') {
        s1clicker.classList.add("active");
        s1.classList.add("service-single-active");
    } else if (service == 's2') {
        s2clicker.classList.add("active");
        s2.classList.add("service-single-active");
    } else {
        s3clicker.classList.add("active");
        s3.classList.add("service-single-active");
    }
}
