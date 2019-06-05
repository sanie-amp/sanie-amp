// animations in one direction, with delay:

var btn = document.getElementById('logo');

btn.onmouseenter = function() {

  var tl = anime.timeline({
    easing: 'easeInExpo',
    duration: 1000
  });

  tl
  .add({
    targets: '.polymorph',
    points: [
      { value: '0,50.2 0,50.2 8.1,50.2 8.1,50.2' }
    ],
    duration: 500,
    loop: false
  }, 0)
  .add({
    targets: '.polymorph2',
    points: [
      { value: '39.4,50.2 39.4,50.2 47.5,50.2 47.5,50.2' }
    ],
    duration: 500,
    loop: false
  }, 0)
  .add({
    targets: '.polymorph3',
    points: [
      { value: '70.7,50.2 70.7,50.2 78.8,50.2 78.8,50.2' }
    ],
    duration: 500,
    loop: false
  }, 0)
  .add({
    targets: '.polymorph4',
    points: [
      { value: '110.1,50.2 110.1,50.2 118.2,50.2 118.2,50.2' }
    ],
    duration: 500,
    loop: false
  }, 0)
  .add({
    targets: '.polymorph5',
    points: [
      { value: '31.3,50.2 31.3,50.2 39.3,50.2 39.3,50.2' }
    ],
    duration: 500,
    loop: false
  }, 500)
  .add({
    targets: '.polymorph6',
    points: [
      { value: '70.7,50.2 70.7,50.2 78.8,50.2 78.8,50.2' }
    ],
    duration: 500,
    loop: false
  }, 500)
  .add({
    targets: '.polymorph7',
    points: [
      { value: '102,50.2 102,50.2 110.1,50.2 110.1,50.2' }
    ],
    duration: 500,
    loop: false
  }, 500)
  .add({
    targets: '.polymorph8',
    points: [
      { value: '137.1,31.3 137.1,31.3 145.1,31.3 145.1,31.3' }
    ],
    duration: 500,
    loop: false
  }, 500);


  var promise = tl.finished.then(() => {
    console.log("finished");
    tl.reverse;
  })

}
