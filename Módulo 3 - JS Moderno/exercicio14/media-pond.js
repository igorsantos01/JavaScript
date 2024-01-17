const weightedArithmeticMean = (...numbers) => {
  return (
    numbers
      .map((number) => number.n * number.w)
      .reduce((initial, next) => initial + next) /
    numbers.map((number) => number.w).reduce((initial, next) => initial + next)
  );
};

document.querySelector("#media-pond").addEventListener("click", () => {
  const numbers = [
    { n: 7, w: 2 },
    { n: 9, w: 5 },
    { n: 3, w: 1 },
  ];

  console.clear();
  console.log(numbers, weightedArithmeticMean(...numbers));
});
