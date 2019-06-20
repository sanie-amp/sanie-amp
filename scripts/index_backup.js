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
//     setTimeout( function() { window.location = URL }, 500 );
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
  // openText();
  landPage();
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
  document.getElementById("current").textContent="Activities";
  document.getElementById("act-overlay").style.height = "calc(100% - 7em)";
  document.getElementById("text-overlay").style.height = "0";
  document.getElementById("pro-overlay").style.height = "0";
  document.getElementById("con-overlay").style.height = "0";
}

function openActDelay() {
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  document.getElementById("current").textContent="Activities";
  setTimeout(function(){
    document.getElementById("act-overlay").style.height = "calc(100% - 7em)";
    document.getElementById("text-overlay").style.height = "0";
    document.getElementById("pro-overlay").style.height = "0";
    document.getElementById("con-overlay").style.height = "0";
  }, 500);
}

function openPro() {
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  document.getElementById("current").textContent="Profile";
  document.getElementById("act-overlay").style.height = "0";
  document.getElementById("text-overlay").style.height = "0";
  document.getElementById("pro-overlay").style.height = "calc(100% - 7em)";
  document.getElementById("con-overlay").style.height = "0";
}

function openProDelay() {
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  document.getElementById("current").textContent="Profile";
  setTimeout(function(){
    document.getElementById("act-overlay").style.height = "0";
    document.getElementById("text-overlay").style.height = "0";
    document.getElementById("pro-overlay").style.height = "calc(100% - 7em)";
    document.getElementById("con-overlay").style.height = "0";
  }, 500);
}

function openCon() {
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  document.getElementById("current").textContent="Contact";
  document.getElementById("act-overlay").style.height = "0";
  document.getElementById("text-overlay").style.height = "0";
  document.getElementById("pro-overlay").style.height = "0";
  document.getElementById("con-overlay").style.height = "calc(100% - 7em)";
}

function openConDelay() {
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  document.getElementById("current").textContent="Contact";
  setTimeout(function(){
    document.getElementById("act-overlay").style.height = "0";
    document.getElementById("text-overlay").style.height = "0";
    document.getElementById("pro-overlay").style.height = "0";
    document.getElementById("con-overlay").style.height = "calc(100% - 7em)";
  }, 500);
}

function openText() {
    document.getElementsByClassName("menu-close")[0].style.display = "none";
    document.getElementById("menu").style.height = "0";
    document.getElementById("current").textContent="";
    document.getElementById("act-overlay").style.height = "0";
    document.getElementById("text-overlay").style.height = "calc(100% - 7em)";
    document.getElementById("pro-overlay").style.height = "0";
    document.getElementById("con-overlay").style.height = "0";
}

function openTextDelay() {
    document.getElementsByClassName("menu-close")[0].style.display = "none";
    document.getElementById("menu").style.height = "0";
    document.getElementById("current").textContent="";
    setTimeout(function(){
      document.getElementById("act-overlay").style.height = "0";
      document.getElementById("text-overlay").style.height = "calc(100% - 7em)";
      document.getElementById("pro-overlay").style.height = "0";
      document.getElementById("con-overlay").style.height = "0";
    }, 500);
}

function openPlatform() {
  document.getElementById("flex-container").style.height = "100%";
  document.getElementById("platform").style.height = "calc(100% - 2em)";
  document.getElementById("platform").style.opacity = "1";
  console.log("Opened plat");
}

function landPage() {
  // document.getElementById("logo-main").style.display = "flex";
  document.getElementById("logo-main-cont").style.display = "flex";

  document.getElementById("platform").style.height = "0";
  document.getElementById("platform").style.opacity = "0";
  document.getElementsByClassName("menu-close")[0].style.display = "none";
  document.getElementById("menu").style.height = "0";
  document.getElementById("current").textContent="";
}

// ------------------------------ Lazy Load Images -----------------------------------------

// ------------------------------ Lazy Load Video -----------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

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
