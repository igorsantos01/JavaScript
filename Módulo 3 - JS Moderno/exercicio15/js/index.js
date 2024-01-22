import { keysPress, clear, charKey } from "./keys.js";
import { copyToClipboard } from "./copyToClipboard.js";
import { themeSwitcher } from "./switchTheme.js";
import { calculate } from "./calculate.js";

document.querySelector("input").addEventListener("keydown", keysPress);

document
  .querySelectorAll(".charKey")
  .forEach((key) => key.addEventListener("click", charKey));

document.querySelector("#equal").addEventListener("click", calculate);

document.querySelector("#clear").addEventListener("click", clear);

document
  .querySelector("#copyToClipboard")
  .addEventListener("click", copyToClipboard);

document
  .querySelector("#themeSwitcher")
  .addEventListener("click", themeSwitcher);
