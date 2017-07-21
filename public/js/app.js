var habilitarContinuar = function () {
  var numeroTelefonico = $("#numeroTelefonico").val().length;
  if(numeroTelefonico == 10 && $("#checkbox").prop("checked")) {
    $("#continuar").removeAttr("disabled");
  } else {
    $("#continuar").attr("disabled", true);
  }
}

var funcionEjecutadora = function () {
  $('.carousel.carousel-slider').carousel();
  $("#numeroTelefonico").keyup(habilitarContinuar);
  $("#checkbox").click(habilitarContinuar);
}

$(document).ready(funcionEjecutadora);
