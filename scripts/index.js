// var coll = document.getElementsByClassName("collapsible");
// var i;
// //
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     // this.classList.toggle("active");
//     // var content = this.nextElementSibling;
//     var content = document.getElementById("menu");
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//       // document.getElementById("page").style.paddingTop = "5.6em";
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       // document.getElementById("page").style.paddingTop = content.scrollHeight / 18 + 8.1 + "em";
//
//       // console.log(content.scrollHeight / 18 + 6.1 + "em");
//       // content.style.maxHeight = 100 + "%";
//     }
//   });
// }

var x = document.getElementById("menu");

function toggleMenu() {
  if ((x.className === "content") && (x.style.maxHeight)) {
    // x.className += " responsive";
    x.style.maxHeight = null;
  } else {
    // x.className = "content";
    x.style.maxHeight = x.scrollHeight + "px";
  }
}

function mediaQuery(y) {
  if ((y.matches) && (x.style.maxHeight)) { // If media query matches
    // x.className = "content";
    x.style.maxHeight = null;
  }
}

var y = window.matchMedia("(max-width: 950px)")
mediaQuery(y) // Call listener function at run time
y.addListener(mediaQuery) // Attach listener function on state changes
