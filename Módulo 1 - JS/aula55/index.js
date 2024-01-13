const personagens = [
  { nível: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nível: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nível: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nível: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nível: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nível: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nível: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

/* const nomes = [];
for (let index = 0; index < personagens.length; index++) {
  const personagem = personagens[index];
  nomes.push(personagem.nome);
}
console.log(nomes); */

//map: permite obter um novo array a partir de um array existente.
const nomes = personagens.map(function (personagem) {
  return personagem.nome;
});
console.log(nomes);

/* const orcs = [];
for (let index = 0; index < personagens.length; index++) {
  const personagem = personagens[index];
  if (personagem.raca === "Orc") {
    orcs.push(personagem);
  }
}
console.log(orcs); */

//filter: permite obter um novo array contendo apenas elementos específicos de um array existente.
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});
console.log(orcs);

/* let nívelTotal = 0;
for (let index = 0; index < personagens.length; index++) {
  nívelTotal += personagens[index].nível;
}
console.log(nívelTotal);
 */

//reduce: serve para reduzir um array existente a um valor final qualquer
const nívelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nível;
}, 0);
console.log(nívelTotal);
const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem);
  } else {
    acumulador[personagem.raca] = [personagem];
  }
  return acumulador;
}, {});
console.log(racas);

//sort: ordena os elementos de um array a partir de comparações entre duplas de elementos.
//(É o único método que altera o array)

personagens.sort(function (a, b) {
  return b.nível - a.nível;
});
console.log("personagens:", personagens);
//DICA PARA NÃO MODIFICAR O ARRAY. Usar o slice() para duplicar o array.
const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return a.nível - b.nível;
});
console.log("personagensOrdenados:", personagensOrdenados);
