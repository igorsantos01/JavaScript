const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

//Adicionar elementos no Array
//push: adiciona elementos no final do array
let tamanho = arr.push("Igor");
console.log(arr);
console.log(tamanho);

//unshift: adiciona elementos no começo do array
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

//Remover elementos no Array
//pop: remover elementos no final do array
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//shift: remover elementos no começo do array
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar por um elemento
//includes: pesquisa o elemento pelo valor passado de parâmetro da função.

const includes = arr.includes("Sam");
console.log(arr);
console.log(includes);

//indexOf: pesquisa o elemento pelo valor do índice do array.
const indexOf = arr.indexOf("Sam");
console.log(arr);
console.log(indexOf);

//Cortar e Concatenar
//slice: cria uma cópia de uma parte do array.
const slice = arr.slice(0, 4);
const negative = arr.slice(-4);
console.log(arr);
console.log(slice);
console.log(negative);

//concat: faz a concatenação de arrays.
const society = slice.concat(negative, "Roger Guedes");
console.log(society);

//Substituição dos elementos:
//splice: remove um grupo de elementos e os substitui por outro grupo.
const elementosRemovidos = society.splice(indexOf, 1, "Gandalf, o Cinzento");
console.log(society);
console.log(elementosRemovidos);

//Iterar sobre os elementos
for (let indexOf = 0; indexOf < society.length; indexOf++) {
  const element = society[indexOf];
  console.log(`${element} se encontra na posição ${indexOf}`);
}
