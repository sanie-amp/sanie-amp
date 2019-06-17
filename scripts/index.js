// ------------------------------ Responsive Menu -----------------------------------------
// var x = document.getElementById("menu");
//
// function toggleMenu() {
//   if ((x.className === "content") && (x.style.maxHeight)) {
//     // x.className += " responsive";
//     x.style.maxHeight = null;
//   } else {
//     // x.className = "content";
//     x.style.maxHeight = x.scrollHeight + "px";
//   }
// }
//
// function mediaQuery(y) {
//   if ((y.matches) && (x.style.maxHeight)) { // If media query matches
//     // x.className = "content";
//     x.style.maxHeight = null;
//   }
// }
//
// var y = window.matchMedia("(max-width: 950px)")
// mediaQuery(y) // Call listener function at run time
// y.addListener(mediaQuery) // Attach listener function on state changes

// ------------------------------ Link Delay -----------------------------------------
// function delay (URL) {
//     setTimeout( function() { window.location = URL }, 900 );
// }

// ------------------------------ Platform -----------------------------------------

// var coll = document.getElementsByClassName("platform")[0];
// var i;
// var logo = document.getElementById("test");
//
//   logo.addEventListener("click", function() {
//     // this.classList.toggle("active");
//     if (coll.style.height){
//       coll.style.height = null;
//     } else {
//       coll.style.height = "calc(100% - 2em)";
//     }
//   });

// ------------------------------ Showing/Hiding divs -----------------------------------------

var url = window.location.href;
// Check if URL contains the keyword
if( url.search( 'profile' ) > -1 ) {
  console.log("Pro");
  openPro();
} else if( url.search( 'activities' ) > -1 ) {
  console.log("Act!");
  openAct();
} else if( url.search( 'contact' ) > -1 ) {
  console.log("Contact!");
  openCon();
} else if( url.search( 'menu' ) > -1 ) {
  console.log("Menu!");
  openNav();
} else {
  console.log("Main!");
  openText();
}

function openNav() {
  document.getElementById("menu").style.height = "calc(100% - 7em)";
  document.getElementsByClassName("menu-close")[0].style.display = "block";
  document.getElementById("text-overlay").style.height = "0";
  document.getElementById("act-overlay").style.height = "0";
  document.getElementById("pro-overlay").style.height = "0";
  document.getElementById("con-overlay").style.height = "0";

  document.getElementById("current").textContent="";
}

function openAct() {
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  setTimeout(function(){
    document.getElementById("act-overlay").style.height = "calc(100% - 7em)";
    document.getElementById("text-overlay").style.height = "0";
    document.getElementById("pro-overlay").style.height = "0";
    document.getElementById("con-overlay").style.height = "0";

    document.getElementById("current").textContent="Activities";
  }, 500);
}

function openPro() {
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  // setTimeout(function(){
    document.getElementById("act-overlay").style.height = "0";
    document.getElementById("text-overlay").style.height = "0";
    document.getElementById("pro-overlay").style.height = "calc(100% - 7em)";
    document.getElementById("con-overlay").style.height = "0";

    document.getElementById("current").textContent="Profile";
  // }, 500);
}

function openCon() {
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  setTimeout(function(){
    document.getElementById("act-overlay").style.height = "0";
    document.getElementById("text-overlay").style.height = "0";
    document.getElementById("pro-overlay").style.height = "0";
    document.getElementById("con-overlay").style.height = "calc(100% - 7em)";

    document.getElementById("current").textContent="Contact";
  }, 500);
}

function openText() {
  document.getElementById("act-overlay").style.height = "0";
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("text-overlay").style.height = "calc(100% - 7em)";
  document.getElementById("menu").style.height = "0";
  document.getElementById("pro-overlay").style.height = "0";
  document.getElementById("con-overlay").style.height = "0";

  document.getElementById("current").textContent="";
}

function openPlatform() {
  document.getElementById("platform").style.height = "calc(100% - 2em)";
  document.getElementById("logo-main").style.display = "none";
}

// ------------------------------ Activities -----------------------------------------

// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }

// Initialize your slider in your script file or an inline script tag
$(document).ready(function(){
  // $('.carousel').slick({
  //
  // });

    $('.carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
