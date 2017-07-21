var habilitarContinuar = function () {
  var numeroTelefonico = $("#numeroTelefonico").val().length;
  if(numeroTelefonico == 10 && $("#checkbox").prop("checked")) {
    $("#continuar").removeAttr("disabled");
  } else {
    $("#continuar").attr("disabled", true);
  }
}

var habilitarBotonDatosUsuario = function () {
  var botonFormDatos = $("#form-datos");
  var nombre = $("#nombre").val();
  var correo = $("#correo").val()
  var password = $("#password").val()
  if (nombre != "" && correo != "" && password != ""){
      botonFormDatos.removeAttr("disabled");
      botonFormDatos.click(function () {
        // necesito enviar los datos al API
        window.location.href= "splash.html";
      })
  } else{
       botonFormDatos.attr("disabled",true);
  }
}

var funcionEjecutadora = function () {
  $('.carousel.carousel-slider').carousel();
  $("#numeroTelefonico").keyup(habilitarContinuar);
  $("#checkbox").click(habilitarContinuar);
  $("#nombre").keyup(habilitarBotonDatosUsuario);
  $("#correo").keyup(habilitarBotonDatosUsuario);
  $("#password").keyup(habilitarBotonDatosUsuario);
}

$(document).ready(funcionEjecutadora);
