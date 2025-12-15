let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

const timer = document.getElementById("timer");

document.getElementById("iniciar").addEventListener("click", iniciar);
document.getElementById("pausar").addEventListener("click", pausar);
document.getElementById("reiniciar").addEventListener("click", reiniciar);

function iniciar() {
  if (intervalo !== null) return; // evita múltiples intervalos

  intervalo = setInterval(() => {
    segundos++;

    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }

    if (minutos === 60) {
      minutos = 0;
      horas++;
    }

    actualizar();
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
  document.getElementById("iniciar").textContent = "Continuar";
}

function reiniciar() {
  pausar();
  segundos = 0;
  minutos = 0;
  horas = 0;
  actualizar();
  document.getElementById("iniciar").textContent = "Iniciar";
}

function actualizar() {
  timer.textContent =
    `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
}

function formato(valor) {
  return valor < 10 ? "0" + valor : valor;
}