function lightTheme() {
  document.body.style.color = "#050505";
  document.body.style.backgroundColor = "#f1f5f9";
}
function darkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#010509";
}
function switchColor() {
  document.body.classList.toggle("is-dark");
  document.body.classList.toggle("is-light");
}

document.getElementById("light-btn").addEventListener("click", lightTheme);
document.getElementById("dark-btn").addEventListener("click", darkTheme);
document.getElementById("switch-btn").addEventListener("click", switchColor);
