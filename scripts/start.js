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
    setTimeout( function() { window.location = URL }, 900 );
}

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
