function addPlayer() {
  const namePlayer = document.getElementById("player-name").value;
  const positionPlayer = document.getElementById("player-position").value;
  const numberPlayer = document.getElementById("player-number").value;

  const confirmation = confirm(
    `Deseja adicionar o ${namePlayer} como ${positionPlayer}?`
  );
  if (confirmation) {
    const selectedPlayer = document.getElementById("player-list");
    const players = document.createElement("li");
    players.id = "player-" + numberPlayer;
    players.innerText = `${positionPlayer}: ${namePlayer} (${numberPlayer})`;

    selectedPlayer.appendChild(players);

    document.querySelector("#player-name").value = "";
    document.querySelector("#player-position").value = "";
    document.querySelector("#player-number").value = "";
  }
}

function removePlayer() {
  const numberRemoved = document.getElementById("removed-player").value;
  const playerToRemove = document.getElementById("player-" + numberRemoved);

  const confirmation = confirm(
    "Remover o jogador" + playerToRemove.innerText + "?"
  );
  if (confirmation) {
    playerToRemove.remove();
    document.getElementById("removed-player").value = "";
  }
}
