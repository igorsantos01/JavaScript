let answerMoney = Number(prompt("Quantos reais você tem disponível?"));
let decisionMoney;
do {
  decisionMoney = prompt(`Dinheiro disponível:R$ ${answerMoney}\n
  1 -> Adicionar Dinheiro\n
  2 -> Remover Dinheiro\n
  3 -> Sair`);
  switch (decisionMoney) {
    case "1":
      sumMoney();
      break;
    case "2":
      subtractionMoney();
      break;
    case "3":
      alert("Saindo do Programa!");
      break;
    default:
      alert("Opção Inválida!");
      break;
  }
} while (decisionMoney !== "3");

function sumMoney() {
  let sum = Number(prompt("Quantos reais gostaria de adicionar?"));
  answerMoney = answerMoney + sum;
  return answerMoney;
}
function subtractionMoney() {
  let subtraction = Number(prompt("Quantos reais gostaria de remover?"));
  answerMoney = answerMoney - subtraction;
  return answerMoney;
}
