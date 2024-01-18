const median = (...numbers) => {
  numbers.sort((a, b) => a - b);
  const middle = Math.floor(numbers.length / 2);
  if (numbers.length % 2 !== 0) {
    return numbers[middle];
  } else {
    const firstMedian = numbers[middle - 1];
    const lastMedian = numbers[middle];
    return (firstMedian + lastMedian) / 2;
  }
};
document.querySelector("#mediana").addEventListener("click", () => {
  const numbers = [2, 4, 5, 7, 42, 99, 6];
  console.log(median(...numbers), numbers);
});
