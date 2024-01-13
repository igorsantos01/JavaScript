let choiceOption;
let decks = [];
do {
  choiceOption = prompt(
    `Cartas do Baralho:\n${decks}\nMenu:\n1 -> Adicionar uma carta\n2 ->Puxar uma carta\n3 -> Sair`
  );
  switch (choiceOption) {
    case "1":
      addCard();
      break;
    case "2":
      removeCard();
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção Inválida!");
      break;
  }
} while (choiceOption !== "3");
function addCard() {
  let newCard = prompt("Digite qual a carta será adicionada: ");
  decks.push(newCard);
}
function removeCard() {
  let removedCard = decks.pop();
  alert(`${removedCard} foi removida`);
}
