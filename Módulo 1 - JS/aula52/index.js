function somar(a, b) {
  return a + b;
}

let operação = somar;
console.log(operação(1, 2));

operação = function (a, b) {
  return a - b;
};

console.log(operação(1, 2));
