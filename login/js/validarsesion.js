const boton = document.querySelector(".form_Login-button");
const correoCorrecto = "animegeek@alura.com";
const contrasenhaCorrecta = "12902";

function verificarUsuario() {
  let correo = document.getElementById("email").value;
  let contrasenha = document.getElementById('password').value;

  if (correo === correoCorrecto && contrasenha === contrasenhaCorrecta) {
    alert("Bienvenido al sistema " + correo); 
    window.location.href = "/productos/productos.html";
  } else {
    alert("Correo y contraseña incorrectos");
  }
}

boton.addEventListener("click", verificarUsuario);
