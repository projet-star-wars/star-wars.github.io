paper.install(window);
window.onload = function() {
  paper.setup('monCanvas');

  var stars = [];

  var maxWidth = document.getElementById("monCanvas").width;
  var maxHeight = document.getElementById("monCanvas").height;
  for (var i = 0; i < 1000; i++) {
    var star = new Path.Star({
      center: [Math.random() * maxWidth, Math.random() * maxHeight],
      points: 11,
      radius1: 1,
      radius2: 5,
      fillColor: 'white',
      strokeColor: 'black'
    });
    star.strokeColor = 'black';
    stars.push(star);
  }

  for (var i = 45; i < 365; i++) {
    var star = new Path.Star({
      center: [Math.random() * maxWidth, Math.random() * maxHeight],
      points: 17,
      radius1: 2,
      radius2: 5,
      fillColor: 'white',
      strokeColor: 'black'
    });
    star.strokeColor = 'black';
    stars.push(star);
  }







  var destination = Point.random() * view.size;

  view.onFrame = function(event) {
    for (var i = 0; i < stars.length; i++) {
      stars[i].translate(Math.random(), 0);
      if (stars[i].position.x > maxWidth){
        stars[i].position.x = -50;
      }
    }
  }

}
