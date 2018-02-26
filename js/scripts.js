//Business logic
function pingPong(number) {
  var myArray = [];
  for (var a = 0; a <= number; a++) {
    if (a % 15 === 0) {
      myArray.push("Ping Pong!");
    } else if (a % 5 === 0) {
      myArray.push("Pong!");
    } else if (a % 3 === 0) {
      myArray.push("Ping!");
    } else {
      myArray.push(a);
    }
  };
  return myArray;
};

//User Interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $(".col-result").empty();
    var number = parseInt($("input#number").val());
    var result = pingPong(number) + '';
    var num = result.split(",").join("<br>");
    $("div.result1").addClass("col-result").append("<li class='col-result'" + num + "</li>");
  });
});
