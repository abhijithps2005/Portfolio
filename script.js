
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
});

document.getElementById("year").textContent =
  new Date().getFullYear();
