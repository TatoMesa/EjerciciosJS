const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

document.getElementById("sumar").addEventListener("click", () => operar("+"));
document.getElementById("restar").addEventListener("click", () => operar("-"));
document.getElementById("multiplicar").addEventListener("click", () => operar("*"));
document.getElementById("dividir").addEventListener("click", () => operar("/"));

function operar(tipo) {
  if (num1.value === "" || num2.value === "") {
    resultado.textContent = "⚠️ Debes ingresar ambos números";
    return;
  }

  const a = Number(num1.value);
  const b = Number(num2.value);

  if (tipo === "/" && b === 0) {
    resultado.textContent = "❌ No se puede dividir por cero";
    return;
  }

  let res;

  switch (tipo) {
    case "+": res = a + b; break;
    case "-": res = a - b; break;
    case "*": res = a * b; break;
    case "/": res = a / b; break;
  }

  document.getElementById('resultado').value = res;
}