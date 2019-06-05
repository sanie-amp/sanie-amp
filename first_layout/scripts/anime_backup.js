//all animations at the same time:

var btn = document.getElementById('logo');

btn.onmouseover = function() {

  var morphing = anime({
    targets: '.polymorph',
    points: [
      { value: '0,50.2 0,50.2 8.1,50.2 8.1,50.2' }
    ],
    easing: 'easeInExpo',
    duration: 500,
    loop: false
  });

  anime({
    targets: '.polymorph2',
    points: [
      { value: '39.4,50.2 39.4,50.2 47.5,50.2 47.5,50.2' }
    ],
    easing: 'easeInExpo',
    duration: 500,
    loop: false
  });

  anime({
    targets: '.polymorph3',
    points: [
      { value: '70.7,50.2 70.7,50.2 78.8,50.2 78.8,50.2' }
    ],
    easing: 'easeInExpo',
    duration: 500,
    loop: false
  });

  anime({
    targets: '.polymorph4',
    points: [
      { value: '110.1,50.2 110.1,50.2 118.2,50.2 118.2,50.2' }
    ],
    easing: 'easeInExpo',
    duration: 500,
    loop: false
  });

  var promise = morphing.finished.then(() =>{
    anime({
      targets: '.polymorph5',
      points: [
        { value: '31.3,50.2 31.3,50.2 39.3,50.2 39.3,50.2' }
      ],
      easing: 'easeInExpo',
      duration: 500,
      loop: false
    });

    anime({
      targets: '.polymorph6',
      points: [
        { value: '70.7,50.2 70.7,50.2 78.8,50.2 78.8,50.2' }
      ],
      easing: 'easeInExpo',
      duration: 500,
      loop: false
    });

    anime({
      targets: '.polymorph7',
      points: [
        { value: '102,50.2 102,50.2 110.1,50.2 110.1,50.2' }
      ],
      easing: 'easeInExpo',
      duration: 500,
      loop: false
    });

    anime({
      targets: '.polymorph8',
      points: [
        { value: '137.1,31.3 137.1,31.3 145.1,31.3 145.1,31.3' }
      ],
      easing: 'easeInExpo',
      duration: 500,
      loop: false
    });

  })

}
