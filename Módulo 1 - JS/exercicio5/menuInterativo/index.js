let answer;
do {
  answer = prompt(
    "Escolha uma opção: \n1 -> Opção 1\n2 -> Opção 2\n3 -> Opção 3\n4 -> Opção 4\n5 -> Encerrar"
  );
  switch (answer) {
    case "1":
      alert("Você escolheu Opção 1");
      break;
    case "2":
      alert("Você escolheu Opção 2");
      break;
    case "3":
      alert("Você escolheu Opção 3");
      break;
    case "4":
      alert("Você escolheu Opção 4");
      break;
    case "5":
      alert("Você encerrou o programa!");
      break;
    default:
      alert("Opção inválida.");
  }
} while (answer !== "5");
