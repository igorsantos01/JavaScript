let number = Number(
  prompt("Escreva um número de 1 a 20 e descubra sua tabuada: ")
);
let multiTable = " ";
for (let i = 1; i <= 20; i++) {
  let result = number * i;
  multiTable += `${number} x ${i} = ${result}\n`;
}
alert(multiTable);
