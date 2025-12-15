const textarea = document.getElementById("texto");
const info = document.getElementById("info");

textarea.addEventListener("input", () => {
  const texto = textarea.value;

  // Caracteres SIN espacios ni saltos de línea
  const caracteres = texto.replace(/\s/g, "").length;

  // Palabras separadas por espacios
  const palabras = texto
    .trim()
    .split(/\s+/)
    .filter(p => p.length > 0).length;

  info.textContent = `Caracteres: ${caracteres} | Palabras: ${palabras}`;
});