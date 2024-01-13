function calcular(a, b, operação) {
  console.log("Realizando uma operação");
  const resultado = operação(a, b);
  return resultado;
}
function somar(x, y) {
  console.log("Realizando uma soma");
  return x + y;
}

//console.log(calcular(2, 4, somar));
console.log(
  calcular(2, 4, function (x, y) {
    console.log("Realizando uma multiplicação");
    return x * y;
  })
);
console.log(
  calcular(2, 4, function (x, y) {
    console.log("Realizando uma subtração");
    return x - y;
  })
);

function exibirElementos(elemento, índice, array) {
  console.log({
    elemento,
    índice,
    array,
  });
}
const lista = ["Maça", "Banana", "Uva", "Laranja"];
for (i = 0; i < lista.length; i++) {
  exibirElementos(lista[i], i, lista);
}

//ForEach: permite executar uma função para cada item de um array.
lista.forEach(exibirElementos);
lista.forEach(function (elemento, índice, array) {
  console.log({
    elemento,
    índice,
    array,
  });
});
