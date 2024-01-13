const names = [
  "Felipe Marques de Quintana",
  "Ângela Gabrielle Caldeira Corona",
  "Natal Aranda Igreja",
  "Helena Lutero Quintana",
  "Daiane Correia dos Santos",
  "Michel Delgado Galhardo",
  "Bárbara Dias Pedrosa",
  "Alan Emanuel Faria de Pontes",
  "Luis Vicente Garcia Sobrinho",
  "Carlos Jacinto Cortês",
  "Gian Ali Gusmão de Martines",
  "Ademar Leonardo Correia",
];

console.log(names);
console.log(...names);
console.log(...names[0]);

const newNames = names;
newNames.pop();
newNames.pop();
newNames.pop();
newNames.push("Igor dos Santos");

console.log({ newNames, names });
const namesClone = [...names];
console.log({ newNames, names, namesClone });
namesClone.pop();
namesClone.push("Heleno Lucas");
namesClone.push("Roberto Carlos");

const namesCloneObj = { ...names };
console.log({ newNames, names, namesClone, namesCloneObj });
