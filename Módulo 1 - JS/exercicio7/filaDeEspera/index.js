let choiceMenu;
let patients = [];
do {
  choiceMenu = prompt(
    `Pacientes: \n${patients}\n\tMENU\n1-> Novo Paciente\n2-> Consultar Paciente\n3->Sair`
  );
  switch (choiceMenu) {
    case "1":
      newPatient();
      break;
    case "2":
      let consultedPatient = consultPatient();
      if (consultedPatient) {
        alert(`${consultedPatient} foi consultado!`);
      } else {
        alert("Não há pacientes na fila!");
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção Invalida");
      break;
  }
} while (choiceMenu !== "3");

function newPatient() {
  let newPatients = prompt("Digite o nome do paciente");
  patients.push(newPatients);
}
function consultPatient() {
  let consultedPatient = patients.shift();
  return consultedPatient;
}
