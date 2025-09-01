const $ = (sel) => document.querySelector(sel);

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();

  $("#cta")?.addEventListener("click", () => {
    alert("Estamos trabajando en ello");
  });

  $("#enviar")?.addEventListener("click", () => {
    const email = $("#email").value.trim();
    if (!email) return;
    $("#mensaje").hidden = false;
  });
});
