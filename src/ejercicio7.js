const input = document.getElementById("longitud");
const boton = document.getElementById("generar");
const resultado = document.getElementById("resultado");

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]<>?";

boton.addEventListener("click", generarPassword);

function generarPassword() {
  const longitud = Number(input.value);

  if (!longitud || longitud < 4) {
    resultado.textContent = "❌ La longitud debe ser mayor o igual a 4";
    return;
  }

  let password = "";

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    password += caracteres[indice];
  }

  resultado.textContent = `Contraseña: ${password}`;
}