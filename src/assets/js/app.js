var habilitarContinuar = function () {
  var numeroTelefonico = $("#numeroTelefonico").val().length;
  var checkbox = $("#checkbox");
  if(numeroTelefonico == 10 && checkbox.prop("checked",true)) {
    $("#continuar").removeAttr("disabled");
  } else {
    $("#continuar").attr("disabled", true);
  }
}

var funcionEjecutadora = function () {
  $('.carousel.carousel-slider').carousel();
  $("#numeroTelefonico").keyup(habilitarContinuar);
}

$(document).ready(funcionEjecutadora);
