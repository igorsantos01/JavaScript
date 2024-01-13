const main = document.querySelector("main");
const input = document.querySelector("input");
const root = document.querySelector(":root");
const resultInput = document.querySelector("#result");
const allowedKeys = [
  "(",
  ")",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "%",
  " ",
];
input.focus();
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
});

document.querySelector("#clear").addEventListener("click", function () {
  input.value = "";
});

const charKeys = document.querySelectorAll(".charKey");
charKeys.forEach(function (charKey) {
  charKey.addEventListener("click", function () {
    input.focus();
    const key = charKey.dataset.value;
    input.value += key;
  });
});

document.querySelector("#equal").addEventListener("click", calculate);
function calculate() {
  resultInput.classList.add("error");
  resultInput.value = "ERROR";
  resultInput.value = eval(input.value);
  resultInput.classList.remove("error");
}

const themeSwitcher = document.querySelector("#themeSwitcher");
themeSwitcher.addEventListener("click", function () {
  const theme = main.dataset.theme;
  if (theme == "dark") {
    main.dataset.theme = "light";
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--border-color", "#212529");
    root.style.setProperty("--primary-color", "#1bb249");
  } else {
    main.dataset.theme = "dark";
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
  }
});

const copyToClipboard = document.querySelector("#copyToClipboard");
copyToClipboard.addEventListener("click", function (ev) {
  if (copyToClipboard.innerText === "Copy") {
    copyToClipboard.innerText = " Copied";
    copyToClipboard.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    copyToClipboard.innerText = "Copy";
    copyToClipboard.classList.remove("success");
  }
});
