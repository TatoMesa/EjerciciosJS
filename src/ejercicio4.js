const datos = ["Perro", "Gato", "Pez", "Delfin", "Cocodrilo", "Oso", "Perra"];
const lista = document.getElementById("listaAnimales");
const input = document.getElementById("buscador");

function render(filtro = "") {
  lista.innerHTML = "";

  datos
    .filter(item => item.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      lista.appendChild(li);
    });
}

input.addEventListener("input", e => {
  render(e.target.value);
});

render();