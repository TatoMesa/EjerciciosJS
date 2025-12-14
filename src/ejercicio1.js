
const boton = document.getElementById("btnColor");

boton.addEventListener("click", () => {
  const colorAleatorio = generarColor();
  document.body.style.backgroundColor = colorAleatorio;
});

function generarColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}