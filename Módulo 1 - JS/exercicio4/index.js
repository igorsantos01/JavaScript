const nameTourist = prompt("Olá Turista! Nos diga seu nome: ");
let answer = prompt("Você já visitou alguma cidade? (Sim/Não)");
let citys = " ";
let cont = 0;
while (answer == "Sim") {
  let city = prompt("Qual o nome da cidade: ");
  citys += " - " + city + "\n";
  cont++;
  answer = prompt("Você já visitou outra cidade?(Sim/Não)");
}
alert(
  `Nome do Turista: ${nameTourist}\nQuantidade de Cidades Visitadas: ${cont}\nCidades visitadas:\n${citys}`
);
