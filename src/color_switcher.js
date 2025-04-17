const themeCheckbox = document.querySelector(
  '#theme-slider input[type="checkbox"]'
);

let body = document.getElementById("theme_changer");

themeCheckbox.addEventListener("change", () => {
  body.classList.toggle("bg-[oklch(95.4%_0.038_75.164)]");
});
