let contador = 0;

const botonS = document.getElementById("btnSumar");
const botonR = document.getElementById("btnRestar");
const texto = document.getElementById("contador");

botonS.addEventListener("click", () => {
  contador++;
  texto.textContent = `Clics: ${contador}`;
});

botonR.addEventListener("click", () => {
  contador--;
  texto.textContent = `Clics: ${contador}`;
});