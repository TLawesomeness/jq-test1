'use strict';

$(document).ready(init);

function init() {
  $('#getNums').click(getNumbers);
}

function getNumbers() {
  var url = 'https://qrng.anu.edu.au/API/jsonI.php?length=20&type=uint8';

  $.getJSON(url, function(response) {
    console.log(response);

    response.data.forEach(function(n) {
      var $evenDiv = $('<div>');
      $evenDiv.addClass('even');
      var $oddDiv = $('<div>');
      $oddDiv.addClass('odd');

      var $threes = $('<div>');
      $threes.addClass('three');

      if (n % 2 === 0) {
        $evenDiv.text(n);
        $('#evens').append($evenDiv);
      }
      else if (n % 3 === 0) {
        $threes.text(n);
        $('#odds').append($threes);
      } else if (n % 2 === 1) {
        $oddDiv.text(n);
        $('#odds').append($oddDiv);
      }

    });

    $('.even').click(function() {
      var text = $(this).text();
      console.log(text);
      var sqrt = Math.sqrt(text).toFixed(2);
      $(this).text(sqrt);
    });
  });
}
