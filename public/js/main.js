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

$('#logopic').hide();
$('#logopic').slideDown(2000);
$('.homearticle').hide();
$('.homearticle').slideDown(500);
$('.questionsbody').hide();
$('.questionsbody').slideDown(500);
$('#contactform').hide();
$('#contactform').slideDown(500);
$('.aboutbody').hide();
$('.aboutbody').slideDown(500);
$('.bodybody').hide();
$('.bodybody').slideDown(500);
