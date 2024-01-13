document.querySelector("#session-btn").addEventListener("click", function () {
  const input = document.querySelector("#session-input");
  sessionStorage.setItem("info", input.value);
  input.value = "";
});
document.querySelector("#read-session").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert(`A informação coletada foi: ${info}`);
});

document.querySelector("#local-btn").addEventListener("click", function () {
  const input = document.querySelector("#local-input");
  localStorage.setItem("info", input.value);
  input.value = "";
});
document.querySelector("#read-local").addEventListener("click", function () {
  const info = localStorage.getItem("info");
  alert(`A informação coletada foi: ${info}`);
});

document.querySelector("#cookies-btn").addEventListener("click", function () {
  const input = document.querySelector("#cookies-input");
  const info = "info=" + input.value + ";";
  const expires = "expires=" + new Date("2023", "11", "27");
  const path = "path=/";
  document.cookie = info + expires + path;
});
document.querySelector("#cookies-btn2").addEventListener("click", function () {
  const input = document.querySelector("#cookies-input2");
  const info = "text=" + input.value + ";";
  const expires = "expires=" + new Date("2023", "11", "28");
  const path = "path=/";
  document.cookie = info + expires + path;
});
console.log(document.cookie);
