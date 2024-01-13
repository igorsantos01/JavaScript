function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(2, 8));
console.log(sum(2, 8, 8, 8, 8, 8, 8));
