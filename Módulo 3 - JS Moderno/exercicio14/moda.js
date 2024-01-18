const mode = (...numbers) => {
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};
document.querySelector("#moda").addEventListener("click", () => {
  const numbers = [1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4];
  console.log(mode(...numbers));
});
