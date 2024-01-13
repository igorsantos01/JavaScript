let options;
do {
  options = prompt(
    "                Calculadora Geométrica\n" +
      "=========================================\n" +
      "Deseja calcular a área de qual figura geométrica?" +
      "\n 1 -> Calcular Área do Triângulo" +
      "\n 2 -> Calcular Área do Retângulo" +
      "\n 3 -> Calcular Área do Quadrado" +
      "\n 4 -> Calcular Área do Trapézio" +
      "\n 5 -> Calcular Área do Círculo" +
      "\n 6 -> Sair"
  );
  switch (options) {
    case "1":
      const TriangleArea = triangleArea();
      alert("A área do Triângulo é de " + TriangleArea);
      break;
    case "2":
      const RectangleArea = rectangleArea();
      alert("A área do Retângulo é de " + RectangleArea);
      break;
    case "3":
      const SquareArea = squareArea();
      alert("A área do Quadrado é de " + SquareArea);
      break;
    case "4":
      const TrapezeArea = trapezeArea();
      alert("A área do Trapézio é de " + TrapezeArea);
      break;
    case "5":
      const CircleArea = circleArea();
      alert("A área do Trapézio é de " + CircleArea);
      break;
    case "6":
      alert("Saindo...");
      break;
    default:
      alert("Opção Inválida");
      break;
  }
} while (options != "6");
function triangleArea(base, height) {
  base = prompt("Digite a base do triângulo:");
  height = prompt("Digite a altura do triângulo:");
  let area = (base * height) / 2;
  return area;
}
function rectangleArea(base, height) {
  base = prompt("Digite a base do retângulo:");
  height = prompt("Digite a altura do retângulo:");
  let area = base * height;
  return area;
}
function squareArea(side) {
  side = prompt("Digite o lado do quadrado:");
  let area = side ** 2;
  return area;
}
function trapezeArea(biggerBase, minorBase, height) {
  biggerBase = Number(prompt("Digite a base maior do trapézio:"));
  minorBase = Number(prompt("Digite a base menor do trapézio:"));
  height = prompt("Digite a altura do trapézio:");
  area = ((biggerBase + minorBase) * height) / 2;
  return area;
}
function circleArea(radius) {
  radius = prompt("Digite o raio do círculo: ");
  area = Math.round(Math.PI * radius ** 2);
  return area;
}
