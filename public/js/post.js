var api = {
  url:       'http://localhost:8080/api/registerNumber',
  urlResend: 'http://localhost:8080/api/resendCode',
  urlCreate: 'http://localhost:8080/api/createUser'
};
var numeroIngresado;
var codigoEnviado;

var generarCodigo = function () {
  $.post(api.url,{
    "phone": $("#numeroTelefonico").val(),
    "terms": true
  }).then(function (response){
    console.log(response.data)
    guardarCodigo(response);
    alert("Código de Validación: " + response.data.code);
    window.location.href="codigo.html ";
  }).catch(function (error) {
    console.log(error);
    alert("Número Telefónico inválido, ya se encuentra registrado");
  })
}

var guardarCodigo = function (response) {
  if (response.success == true){
    var responseData = response.data;
    console.log(response.data);
    var numeroTelefonico = response.data.phone;
    var codigo = response.data.code;

    codigoEnviado = localStorage.setItem("codigo", codigo);
    numeroIngresado = localStorage.setItem("telefono", numeroTelefonico);
    console.log(numeroIngresado);

    // me marca undefined
  }
}

var funcionEjecutadora = function () {
  $("#continuar").click(generarCodigo);
}

$(document).ready(funcionEjecutadora);
