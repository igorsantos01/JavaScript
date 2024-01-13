function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const media = calcularMedia(10, 20);
//console.log(media);

function criarProduto(nome, preço) {
  const produto = { nome, preço, estoque: 1 };
  return produto;
}
const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000);
// console.log(notebook);
// console.log(criarProduto("Notebook Intel Core i3 8GB", 3000));

function areaRetangular(base, altura) {
  return base * altura;
}
function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}
//console.log(areaQuadrada(10));

function olaMundo() {
  let texto = "A função só roda até o return";
  return texto;
  texto = "Olá, mundo!";
  console.log(texto);
}
//console.log(olaMundo());

function maioridade(idade) {
  if (idade < 18) {
    return "Menor de idade";
  } else {
    return "Maior de Idade";
  }
}
// console.log(maioridade(17));
// console.log(maioridade(33));
