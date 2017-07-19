var habilitarContinuar = function () {
  console.log("si esta entrando");
  var numeroTelefonico = $("#numeroTelefonico").val().length;
  console.log(numeroTelefonico);
  if(numeroTelefonico == 10) {
    $("#continuar").removeClass("disabled");
    console.log(continuar);
  };
}

var funcionEjecutadora = function () {
  $('.carousel.carousel-slider').carousel();
  habilitarContinuar();
  alert("sigue");
}

$(document).ready(funcionEjecutadora);
