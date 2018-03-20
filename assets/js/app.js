$(document).ready(function() {
  $('.parallax').parallax();

  document.querySelector('.menu')
    .addEventListener('click', function() {
      document.querySelector('.menu-screen').classList.add('.active');
    });
});

