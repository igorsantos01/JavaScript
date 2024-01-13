const vagas = [];
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, índice) {
    textoFinal += índice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}
function novaVaga() {
  const nome = prompt("Informe um nome");
  const descrição = prompt("Informe uma descrição para a vaga:");
  const dataLimite = prompt(
    "Informe uma data limite (dd/mm/yyyy) para a vaga:"
  );
  const confirmação = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descrição +
      "\nData limite: " +
      dataLimite
  );
  if (confirmação) {
    const novaVaga = { nome, descrição, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada");
  }
}
function exibirVaga() {
  const índice = prompt("Informe o índice da vaga que deseja exibir:");
  if (índice >= vagas.length || índice < 0) {
    alert("Índice inválido");
    return;
  }
  const vaga = vagas[índice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n -" + candidato;
  },
  "");
  alert(
    "Vaga nº: " +
      índice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descrição +
      "\nData limite " +
      vaga.dataLimite +
      "\nQuantidade de Candidatos :" +
      vaga.candidatos.length +
      "\nCandidatos Inscritos: " +
      candidatosEmTexto
  );
}
function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a):");
  const índice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever: "
  );
  const vaga = vagas[índice];

  const confirmação = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      índice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descrição +
      "\nData limite: " +
      vaga.dataLimite
  );
  if (confirmação) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}
function excluirVaga() {
  const índice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[índice];
  const confirmação = confirm(
    "Tem certeza que deseja excluir a vaga" +
      índice +
      "?\n" +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descrição +
      "\nData limite " +
      vaga.dataLimite
  );
  if (confirmação) {
    vaga.splice(índice, 1);
    alert("Vaga excluída.");
  }
}
function exibirMenu() {
  const opção = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );

  return opção;
}
function executar() {
  let opção = "";

  do {
    opção = exibirMenu();

    switch (opção) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opção !== "6");
}

executar();
