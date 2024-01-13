const vehicle1 = prompt("Digite o nome do Primeiro Veículo:");
const speedVehicle1 = prompt("Digite a velocidade do Primeiro Veículo(KM/H): ");
const vehicle2 = prompt("Digite o nome do Segundo Veículo:");
const speedVehicle2 = prompt("Digite a velocidade do Segundo Veículo(KM/H):");
if (speedVehicle1 > speedVehicle2) {
  alert(`${vehicle1} é mais rapido que o(a) ${vehicle2}`);
} else if (speedVehicle1 < speedVehicle2) {
  alert(`${vehicle2} é mais rapido que o(a) ${vehicle1}`);
} else if (speedVehicle1 === speedVehicle2) {
  alert(`${vehicle1} e ${vehicle2} tem a mesma velocidade`);
} else {
  alert("INFORMAÇÕES INVALIDAS");
}
