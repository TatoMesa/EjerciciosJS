const input = document.getElementById("tareaInput");
const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");
const lista = document.getElementById("lista");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Render inicial
renderizar();

btnAgregar.addEventListener("click", agregarTarea);
btnLimpiar.addEventListener("click", limpiarCompletadas);

function agregarTarea() {
  const texto = input.value.trim();
  if (texto === "") return;

  tareas.push({
    texto,
    completada: false
  });

  input.value = "";
  guardar();
  renderizar();
}

function renderizar() {
  lista.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completada;

    checkbox.addEventListener("change", () => {
      tareas[index].completada = checkbox.checked;
      guardar();
    });

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    if (tarea.completada) {
      span.style.textDecoration = "line-through";
    }

    li.appendChild(span);
    li.appendChild(checkbox);
    lista.appendChild(li);
  });
}

function limpiarCompletadas() {
  tareas = tareas.filter(tarea => !tarea.completada);
  guardar();
  renderizar();
}

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}