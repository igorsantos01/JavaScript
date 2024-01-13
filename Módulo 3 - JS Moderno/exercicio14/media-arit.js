document.querySelector("#media-arit").addEventListener("click", () => {
  console.clear();
  const lengthArray = Number(
    prompt("Deseja gerar a média de quantos números?")
  );
  const numbers = randomNumbers(lengthArray);
});

const randomNumbers = (lengthArray) => {
  let numbers = [];
  while (numbers.length !== lengthArray) {
    numbers.push(Math.floor(Math.random() * 9));
  }
  const sumNumbers = sum(...numbers);
  const mediaArit = mediaCalc(sumNumbers, lengthArray);
  console.log(
    `A média aritmética dos números: ${numbers} é igual a ${mediaArit}`
  );
};

const sum = (...numbers) => {
  let sumNumbers = 0;
  numbers.forEach((number) => {
    sumNumbers += number;
  });
  return sumNumbers;
};

const mediaCalc = (sumNumbers, lengthArray) => {
  let media = sumNumbers / lengthArray;
  return media.toFixed(1);
};
