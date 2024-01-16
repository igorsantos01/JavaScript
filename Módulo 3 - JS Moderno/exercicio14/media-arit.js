const createNumbers = () => {
  const index = Number(
    prompt("Deseja criar um array de quantos números aleatórios?")
  );
  const numbers = new Array();
  while (numbers.length !== index) {
    numbers.push(Math.floor(Math.random() * 9));
  }
  console.log(numbers);
  return numbers;
};

const arithmeticAverage = (...numbers) =>
  numbers.reduce((initial, next) => initial + next) / numbers.length;

document.querySelector("#media-arit").addEventListener("click", () => {
  console.clear();
  console.log(arithmeticAverage(...createNumbers()));
});
