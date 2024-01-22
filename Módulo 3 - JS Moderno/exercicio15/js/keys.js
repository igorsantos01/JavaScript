import { calculate } from "./calculate.js";

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
const input = document.querySelector("#input");

const keysPress = (ev) => {
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
};

const clear = () => (input.value = "");

const charKey = (ev) => {
  input.focus();
  const key = ev.currentTarget.dataset.value;
  input.value += key;
};

input.focus();

export { keysPress, clear, charKey };
