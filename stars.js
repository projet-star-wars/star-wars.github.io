paper.install(window);
window.onload = function() {
  paper.setup('monCanvas');

  var stars = [];

  var maxWidth = document.getElementById("monCanvas").width;
  var maxHeight = document.getElementById("monCanvas").height;
  for (var i = 0; i < 105; i++) {
    var star = new Path.Star({
      center: [Math.random() * maxWidth, Math.random() * maxHeight],
      points: 12,
      radius1: 5,
      radius2: 5,
      fillColor: 'white',
      strokeColor: 'black'
    });
    star.strokeColor = 'black';
    stars.push(star);
  }

  for (var i = 85; i < 105; i++) {
    var star = new Path.Star({
      center: [Math.random() * maxWidth, Math.random() * maxHeight],
      points: 17,
      radius1: 9,
      radius2: 9,
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
    }
  }

}
