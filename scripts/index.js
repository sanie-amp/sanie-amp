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
function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}

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
  openPlatform();
  openPro();
} else if( url.search( 'activities' ) > -1 ) {
  console.log("Act!");
  openPlatform();
  openAct();
} else if( url.search( 'contact' ) > -1 ) {
  console.log("Contact!");
  openPlatform();
  openCon();
} else if( url.search( 'menu' ) > -1 ) {
  console.log("Menu!");
  openPlatform();
  openNav();
} else {
  console.log("Main!");
  // openPlatform();
  openStart();
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

function openPlatformDelay() {
  // document.getElementById("platform").style.minHeight = "0";
  setTimeout(function(){
    // document.getElementById("platform").style.minHeight = "calc(100% - 2em)";

    // close big logo:
    document.getElementById("logo-main").style.display = "none";
    document.getElementById("logo-main-cont").style.display = "none";

    //open platform:
    console.log("Opened plat");
    document.getElementById("platform").style.opacity = "1";
  }, 800);
}

function openStart() {
  // close big logo:
  document.getElementById("logo-main").style.display = "block";
  document.getElementById("logo-main-cont").style.display = "flex";
}

function openPlatform() {
    // close big logo:
    document.getElementById("logo-main").style.display = "none";
    document.getElementById("logo-main-cont").style.display = "none";
    //open platform:
    console.log("Opened plat");
    document.getElementById("platform").style.opacity = "1";
    openText();
}

// ------------------------------ Lazy Load Images -----------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

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

// $('#next_nav').click(function () {
//   $( "#stories" ).animate({
//     scrollRight: '+=156px'
//   });
// });
// $('#prev_nav').click(function () {
//   $( "#nav" ).animate({
//     scrollLeft: '-=156px'
//   });
// });

// ------------------------------  Buttons -----------------------------------------

// var button = document.getElementById('slide');
// button.onclick = function () {
//     var container = document.getElementById('stories');
//     var scrollX = container.offsetWdith / 6;
//     sideScroll(container,'right',25,200,10);
// };
//
// var back = document.getElementById('slideBack');
// back.onclick = function () {
//     var container = document.getElementById('stories');
//     var scrollX = container.offsetWdith / 6;
//     sideScroll(container,'left',25,200,10);
// };
//
// function sideScroll(element,direction,speed,distance,step){
//     scrollAmount = 0;
//     var slideTimer = setInterval(function(){
//         if(direction == 'left'){
//             // var scrollPercentage = container.offsetWidth;
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if(scrollAmount >= distance){
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }

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
