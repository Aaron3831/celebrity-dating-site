$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("select#age").val());
    var location = $("select#location").val();
    var gender = $("select#gender").val();

    if (gender === '3' || '1') {
    $(".justin").show();
    $(".diaz").hide();
    }

    else {
      (gender === 'male')
    $(".justin").hide();
    $(".diaz").show();
    }
});
});
