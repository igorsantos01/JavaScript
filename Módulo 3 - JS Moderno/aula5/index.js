const normalSum = function (a, b) {
  return a + b;
};
console.log(`Soma normal: ${normalSum(5, 8)}`);

const arrowSum = (a, b) => {
  return a + b;
};
console.log(`Soma arrow function: ${arrowSum(2, 8)}`);

const multiply = (a, b) => a * b;
console.log(`Multiplicação: ${multiply(5, 5)}`);

const double = (a) => a * 2;
const number = 2;
console.log(`O dobro de ${number} é ${double(number)}`);

const variableNames = [
  "Felipe Marques de Quintana",
  "Ângela Gabrielle Caldeira Corona",
  "Natal Aranda Igreja",
  "Helena Lutero Quintana",
  "Daiane Correia dos Santos",
  "Michel Delgado Galhardo",
  "Bárbara Dias Pedrosa",
  "Alan Emanuel Faria de Pontes",
  "Luis Vicente Garcia Sobrinho",
  "Carlos Jacinto Cortês",
  "Gian Ali Gusmão de Martines",
  "Ademar Leonardo Correia",
];

const onlyWithA = variableNames.filter(
  (variableName) => variableName[0] === "M"
);
console.log(onlyWithA);
