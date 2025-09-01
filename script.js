const $ = (sel) => document.querySelector(sel);

document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en el footer
  $("#year").textContent = new Date().getFullYear();

  // Botón CTA de la sección Hero (solo en index.html)
  $("#cta")?.addEventListener("click", () => {
    alert("¡Funcionó! 🎉");
  });

  // Formulario de contacto (solo en index.html)
  $("#enviar")?.addEventListener("click", () => {
    const email = $("#email")?.value?.trim();
    if (!email) return;
    $("#mensaje").hidden = false;
  });
});
