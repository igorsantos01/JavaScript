const calculate = () => {
  console.clear();
  const resultInput = document.querySelector("#result");
  resultInput.classList.add("error");
  resultInput.value = "ERROR";
  resultInput.value = eval(input.value);
  resultInput.classList.remove("error");
};

export { calculate };
