var api = {
  url:       'http://localhost:8080/api/registerNumber',
  urlResend: 'http://localhost:8080/api/resendCode',
  urlCreate: 'http://localhost:8080/api/createUser'
};

var spanNumeroIngresado = $("#numeroIngresado");
spanNumeroIngresado.html(localStorage.phone);

var generarCodigo = function () {
  $.post(api.url,{
    "phone": $("#numeroTelefonico").val(),
    "terms": true
  }).then(function (response){
    console.log(response.data)
    guardarDatos(response);
    alert("Código de Validación: " + response.data.code);
    window.location.href="codigo.html ";
  }).catch(function (error) {
    console.log(error);
    alert("Número Telefónico inválido, ya se encuentra registrado");
  })
}

var guardarDatos = function (response) {
  var data = response.data;
    // localStorage.setItem("telefono", telefono);
    // localStorage.setItem("codigo", codigo);
    // var numeroTelefonico = localStorage.getItem("telefono");
    // var codigoGuardado = localStorage.getItem("codigo")

    // ocupando set y get me lo "escribe" antes de que se carge la siguiente pantalla
    // opción de solucion: Otro archivo js exclusivo de la siguiente pantalla

    localStorage.phone = data.phone;
    localStorage.code = data.code;
    // metodo key()
}

var validarCodigo = function () {
  var inputCodigoIngresado = $("#codigoIngresado");
  if(inputCodigoIngresado.val() === localStorage.code){
    window.location.href = "datos.html";
  }
    setTimeout(function(res){
      $.post(api.resendCode,{
          // buscar que va aqui, sospecho debo sacarla de aqui
      }).then(function (response){
      		console.log(response.data);
      		alert("Código inválido, Nuevo código de Validación: ");
      		localStorage.code = response.data;
          inputCodigoIngresado.val("");
      }).catch(function (error) {
        alert("no me está funcionando");
      })
    }, 21000)
}

var funcionEjecutadora = function () {
  $("#continuar").click(generarCodigo);
  $("#codigoIngresado").keyup(validarCodigo);
}

$(document).ready(funcionEjecutadora);
