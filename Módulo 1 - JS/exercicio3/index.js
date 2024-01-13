alert("Conversor de Medidas");
const number = Number(
  prompt("Digite o valor que será convertido(em metros): ")
);
const unitOfMeasurement = prompt(
  "Digite o número para escolher qual unidade de medida esse valor será convertido:\n1- Milímetro(mm)\n2- Centímetro(cm)\n3- Decímetro(dm)\n4- Decâmetro(dam)\n5- Hectômetro(hm)\n6- Quilômetro(km)"
);
let newNumber;
switch (unitOfMeasurement) {
  case "1":
    newNumber = number / 1000;
    alert(`Valor em Metros: ${number}\nValor em Milímetros: ${newNumber}`);
    break;
  case "2":
    newNumber = number / 100;
    alert(`Valor em Metros: ${number}\nValor em Centímetros: ${newNumber}`);
    break;
  case "3":
    newNumber = number / 10;
    alert(`Valor em Metros: ${number}\nValor em Decímetros: ${newNumber}`);
    break;
  case "4":
    newNumber = number * 10;
    alert(`Valor em Metros: ${number}\nValor em Decâmetros: ${newNumber}`);
    break;
  case "5":
    newNumber = number * 100;
    alert(`Valor em Metros: ${number}\nValor em Hectômetros: ${newNumber}`);
    break;
  case "6":
    newNumber = number * 1000;
    alert(`Valor em Metros: ${number}\nValor em Quilômetros: ${newNumber}`);
    break;
  default:
    alert("Opção Invalida");
    break;
}
