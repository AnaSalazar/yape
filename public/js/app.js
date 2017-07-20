var api = {
  url:       'http://localhost:8080/api/registerNumber',
  urlResend: 'http://localhost:8080/api/resendCode',
  urlCreate: 'http://localhost:8080/api/createUser'
};

var habilitarContinuar = function () {
  var numeroTelefonico = $("#numeroTelefonico").val().length;
  var checkbox = $("#checkbox");
  if(numeroTelefonico == 10 && checkbox.prop("checked",true)) {
    $("#continuar").removeAttr("disabled");
  } else {
    $("#continuar").attr("disabled", true);
  }
}

var generarCodigo = function () {
  $.post(api.url,{
    "phone": $("#numeroTelefonico").val(),
    "terms": true
  }).then(function (response){
    console.log(response.data)
    alert("Código de Validación: " + response.data.code);
    window.location.href="codigo.html ";
  }).catch(function (error) {
    console.log(error);
    alert("Número Telefónico inválido, ya se encuentra registrado");
  })
}

var funcionEjecutadora = function () {
  $('.carousel.carousel-slider').carousel();
  $("#numeroTelefonico").keyup(habilitarContinuar);
  $("#continuar").click(generarCodigo);
}

$(document).ready(funcionEjecutadora);
