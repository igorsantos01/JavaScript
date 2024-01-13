let options;
let jobs = [];
do {
  options = prompt(
    "---------- Vagas de Emprego ----------\n" +
      "\n" +
      "1 -> Listar vagas disponíveis\n" +
      "2 -> Criar uma nova vaga\n" +
      "3 -> Visualizar uma vaga \n" +
      "4 -> Inscrever um candidato em uma vaga\n" +
      "5 -> Excluir uma vaga\n" +
      "6 -> Sair"
  );
  switch (options) {
    case "1":
      listingJobs();
      break;
    case "2":
      createJobs();
      break;
    case "3":
      visualizeJobs();
      break;
    case "4":
      registerCandidates();
      break;
    case "5":
      deleteJob();
      break;
    case "6":
      alert("Saindo!");
      break;
    default:
      alert("Opção Inválida!");
      break;
  }
} while (options != "6");
function createJobs(
  name,
  description,
  deadline,
  numberCandidates,
  nameCandidate
) {
  name = prompt("Digite o nome da vaga: ");
  description = prompt("Digite a descrição da vaga: ");
  deadline = prompt("Digite a data limite da vaga: ");
  numberCandidates = 0;
  nameCandidate = "";
  let yesOrNo = prompt(
    "Nome da vaga: " +
      name +
      "\n" +
      "Descrição da vaga: " +
      description +
      "\n" +
      "Data Limite: " +
      deadline +
      "\n" +
      "\n" +
      "Deseja salvar essa vaga?\n" +
      "1 -> Sim\n" +
      "2 -> Não"
  );
  if (yesOrNo == "1") {
    jobs.push({
      name,
      description,
      deadline,
      numberCandidates,
      nameCandidate,
    });
  } else {
    alert("Vaga não foi salva!");
  }
}
function listingJobs() {
  for (let index = 0; index < jobs.length; ) {
    let options = prompt(
      "Índice da vaga: " +
        (index + 1) +
        "\n" +
        "Nome da vaga: " +
        jobs[index].name +
        "\n" +
        "Descrição da vaga:" +
        jobs[index].description +
        "\n" +
        "Quantidades de Candidatos: " +
        jobs[index].numberCandidates +
        "\n" +
        "\n" +
        "Deseja seguir para a próxima vaga ou retornar para a vaga anterior?" +
        "\n" +
        "1 -> Vaga Anterior\n" +
        "2 -> Próxima Vaga"
    );
    if (options == "1" && index != 0) {
      index--;
    } else if (options == "2") {
      index++;
    }
  }
}
function visualizeJobs() {
  let index = prompt("Digite o índice da vaga: ");
  alert(
    "Índice da vaga: " +
      index +
      "\n" +
      "Nome da vaga: " +
      jobs[index - 1].name +
      "\n" +
      "Descrição da vaga:" +
      jobs[index - 1].description +
      "\n" +
      "Data Limite: " +
      jobs[index - 1].deadline +
      "\n" +
      "Quantidades de Candidatos: " +
      jobs[index - 1].numberCandidates +
      "\n" +
      "Nome dos Candidatos: " +
      jobs[index - 1].nameCandidate +
      "\n"
  );
}
function registerCandidates() {
  let index = 0;
  index = prompt("Digite o índice da vaga: ");
  jobs[index - 1].nameCandidate = prompt("Digite o nome do candidato: ");
  let options = prompt(
    "Índice da vaga: " +
      index +
      "\n" +
      "Nome da vaga: " +
      jobs[index - 1].name +
      "\n" +
      "Descrição da vaga:" +
      jobs[index - 1].description +
      "\n" +
      "Data Limite: " +
      jobs[index - 1].deadline +
      "\n" +
      "Quantidades de Candidatos: " +
      jobs[index - 1].numberCandidates +
      "\n" +
      "Nome dos Candidatos: " +
      jobs[index - 1].nameCandidate +
      "\n" +
      "\n" +
      "Deseja se cadastrar nessa vaga: " +
      "\n" +
      "1 -> Sim \n" +
      "2 -> Não \n" +
      "3 -> Sair"
  );
  if (options === "1") {
    jobs[index - 1].numberCandidates += 1;
  } else if (options === "2") {
    registerCandidates();
  } else {
    alert("Saindo...");
  }
}
function deleteJob() {
  let index = prompt("Digite o índice da vaga: ");
  let options = prompt(
    "Índice da vaga: " +
      index +
      "\n" +
      "Nome da vaga: " +
      jobs[index - 1].name +
      "\n" +
      "Descrição da vaga:" +
      jobs[index - 1].description +
      "\n" +
      "Data Limite: " +
      jobs[index - 1].deadline +
      "\n" +
      "Quantidades de Candidatos: " +
      jobs[index - 1].numberCandidates +
      "\n" +
      "Nome dos Candidatos: " +
      jobs[index - 1].nameCandidate +
      "\n" +
      "\n" +
      "Deseja excluir essa vaga? " +
      "\n" +
      "1 -> Sim \n" +
      "2 -> Não \n" +
      "3 -> Sair"
  );
  if (options === "1") {
    jobs.splice(index - 1, 1);
  } else if (options === "2") {
    deleteJob();
  } else {
    alert("Saindo...");
  }
}
