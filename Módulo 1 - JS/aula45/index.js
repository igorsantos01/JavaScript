function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}
// dobro(8);

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}
// dizerOla();
// dizerOla("Igor");

function soma(a, b) {
  alert("A soma de " + a + " + " + b + " é: " + (a + b));
}
// soma(1, 5);
function criarUsuário(nome, email, senha, tipo = "leitor") {
  const usuário = { nome, email, senha, tipo };
  console.log(usuário);
}

function novoUsuário(nome, tipo = "leitor", email, senha) {
  const usuário = { nome, email, senha, tipo };
  console.log(usuário);
}

//criarUsuário("Isaac", "isaac@email.com", "1234");
//novoUsuário("Isaac", "isaac@email.com", "1234");

function váriosParâmetros(
  nome,
  telefone,
  endereço,
  aniversario,
  email,
  senha
) {}
function poucosParâmetros(usuário) {
  console.log(usuário);
}
const dadosUsuário = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereço: "",
};
poucosParâmetros(dadosUsuário);
