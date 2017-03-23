$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("select#age").val());
    var location = $("select#location").val();
    var gender = $("select#gender").val();

    if (gender === '3' && age === 29) {
    $(".justin").show();
    $(".diaz").hide();
    $(".ryan").hide();
    }
    else if (location === 'Not from America' || age === 30 ) {
    $(".ryan").show();
    $(".justin").hide();
    $(".diaz").hide();
    }
    else {
      (gender === 'male')
    $(".justin").hide();
    $(".diaz").show();
    $(".ryan").hide();
    }
});
});
