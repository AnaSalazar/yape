var habilitarBotonContinuarTelefono = function () {
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
  var password = $("#password").val().length;
  if (nombre != "" && correo != "" && password == 6 ){
      botonFormDatos.removeAttr("disabled");
      botonFormDatos.click(function () {
        // necesito enviar los datos al API
        window.location.href= "splash.html";
      })
  } else {
       botonFormDatos.attr("disabled",true);
  }
}

var habilitarBotonContinuarTarjeta = function () {
  var botonContinuarTarjeta = $("#continuarTarjeta");
  var numeroTarjeta = $("#numeroTarjeta").val().length;
  var mesVencimiento = $("#mes").val();
  var ageVencimiento = $("#age").val();

  if(numeroTarjeta == 16 && mesVencimiento > 1 && mesVencimiento < 12){}
}

var funcionEjecutadora = function () {
  $('.carousel.carousel-slider').carousel();
  $("#numeroTelefonico").keyup(habilitarBotonContinuarTelefono);
  $("#checkbox").click(habilitarBotonContinuarTelefono);
  $("#nombre").keyup(habilitarBotonDatosUsuario);
  $("#correo").keyup(habilitarBotonDatosUsuario);
  $("#password").keyup(habilitarBotonDatosUsuario);
}

$(document).ready(funcionEjecutadora);
