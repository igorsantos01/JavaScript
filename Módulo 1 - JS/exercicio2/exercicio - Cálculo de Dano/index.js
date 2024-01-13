let damage;
const charNameAttack = prompt("Digite o nome do personagem que atacará:");
const attackPower = Number(prompt("Digite o poder de ataque do personagem:"));
const charNameDefense = prompt("Digite o nome do personagem que defenderá:");
const health = Number(
  prompt("Digite a quantidade de pontos de vida do outro personagem:")
);
const defensePower = Number(
  prompt("Digite o poder de defesa do outro personagem:")
);
const shield = confirm(
  "O personagem possui um escudo?\n Se sim: Ok\n Se não: Cancelar"
);
let newHealt = health;
const answer = shield === true ? "Sim" : "Não";
if (attackPower > defensePower && shield == false) {
  damage = attackPower - defensePower;
  newHealt = health - damage;
} else if (attackPower > defensePower && shield == true) {
  damage = (attackPower - defensePower) / 2;
  newHealt = health - damage;
} else if (attackPower <= defensePower) {
  damage = 0;
}
alert(
  `${charNameAttack} causou ${damage} pontos de dano em ${charNameDefense}.`
);
alert(`Nome: ${charNameAttack}
Poder de Ataque: ${attackPower}
`);
alert(`Nome: ${charNameDefense}
Poder de Defesa: ${defensePower}
Escudo: ${answer}
Dano sofrido: ${damage}
Pontos de vida: ${newHealt}
 `);
