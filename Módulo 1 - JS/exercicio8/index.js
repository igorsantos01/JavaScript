let optionMenu;
let countProperty = 0;
let property = [];
let count = 0;
let exhibition = "===================================\n";
do {
  optionMenu = prompt(
    "Quantidade de Imóveis Cadastrados: " +
      countProperty +
      "\n\n" +
      " ======== Cadastro de Imóveis ======== \n" +
      " 1 - > Salvar Novo Imóvel\n" +
      " 2 -> Exibir Todos os Imóveis Salvos\n" +
      " 3 -> Sair"
  );
  switch (optionMenu) {
    case "1":
      newProperty();
      break;
    case "2":
      exhibitAllProperty();
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção Inválida");
      break;
  }
} while (optionMenu !== "3");
function newProperty() {
  property.push({});
  for (count = count; count < property.length; count++) {
    property[count].nameOwner = prompt("Digite o nome do Proprietário: ");
    property[count].amountRoom = prompt(
      "Digite a quantidade de quartos do imóvel: "
    );
    property[count].amountBath = prompt(
      "Digite a quantidade de banheiros do imóvel: "
    );
    property[count].garage = prompt("O imóvel possui garagem?(Sim/Não)");
    let confirmation = confirm("Deseja salvar este imóvel?");
    if (confirmation == true) {
      countProperty++;
      alert("Imóvel salvo com sucesso!");
    } else {
      property.pop();
      alert("Voltando ao Menu");
    }

    exhibition +=
      "Nome do Proprietário: " +
      property[count].nameOwner +
      "\nQuantidade de Quartos: " +
      property[count].amountRoom +
      "\nQuantidade de banheiros: " +
      property[count].amountBath +
      "\nPossui garagem: " +
      property[count].garage +
      "\n===================================\n";
  }
}
function exhibitAllProperty() {
  alert(exhibition);
}
