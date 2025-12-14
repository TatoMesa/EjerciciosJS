const input = document.getElementById("texto");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
  const valor = input.value.trim();

  if (valor === "") return;

  const li = document.createElement("li");
  li.textContent = valor;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnEliminar);
  lista.appendChild(li);

  input.value = "";
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") boton.click();
});

function actualizarMensaje() {
  mensaje.style.display = lista.children.length === 0 ? "block" : "none";
}

actualizarMensaje();

boton.addEventListener("click", () => {
  // ... código existente
  actualizarMensaje();
});

btnEliminar.addEventListener("click", () => {
  li.remove();
  actualizarMensaje();
});