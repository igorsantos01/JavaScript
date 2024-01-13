const numbers = [2, 4, 5, 7, 42, 99, 5];
document.querySelector("#mediana").addEventListener("click", () => {
  const index = parseInt(numbers.length / 2);

  console.log(index);
});
