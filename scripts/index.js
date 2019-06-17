$(document).ready(function() {
 //Circle
  $('.circle').on('click', function() {
    $(this).toggleClass('big');
  });

  $('.circle').on('mouseenter', function() {
    $(this).addClass('spin');
  });
  //Box
  $('.box').on('click', function() {
    $(this).toggleClass('big');
  });

  $('.box').on('mouseenter', function() {
    $(this).addClass('spin');
  });

  //Box to circle and Circle to box
  $('.boxtocircle').on('mouseenter', function() {
    $(this).addClass('change-shape');
  });

  $('.circletobox').on('mouseenter', function() {
    $(this).addClass('change-shape');
  });
});
