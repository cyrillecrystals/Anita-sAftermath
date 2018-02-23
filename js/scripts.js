var pingpong = function(number) {
  for (var a = 0; a <= number.length; a += 1) {
    if (number % 15 === 0) {
      return true;
    } else if (number % 5 === 0) {
      return true;
    } else if (number % 3 === 0) {
      return true;
    }
  };
};

// User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventionDefault();
    var number = parseInt($("input#number").val());
    var result = pingpong(number);
    $("#result").text(result);
  });
});
