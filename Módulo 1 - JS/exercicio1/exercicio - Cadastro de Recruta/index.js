alert("Cadastro de Recruta");
let name = prompt("Digite seu nome: ");
let lastName = prompt("Digite seu sobrenome: ");
let campoDeEstudo = prompt("Digite seu campo de estudo: ");
let birthYear = prompt("Digite seu ano de nascimento: ");
let age = 2023 - Number(birthYear);
alert(`Nome Completo: ${name} ${lastName}\n
Campo de estudo: ${campoDeEstudo}\n
Idade: ${age}\n
`);
