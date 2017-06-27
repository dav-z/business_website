$(document).ready(function () {
  console.log('ready');

  var move = $('#car');

  var right = function () {
    move.animate({right: '100%'}, 5000, left);
  };

  var left = function () {
    move.animate({right: '-5%'}, 5000, right);
  };

  right();
});
