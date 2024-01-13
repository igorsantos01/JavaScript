const startBtn = document.querySelector("#start");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player1Lbl = document.querySelector("#player1-label");
const player2Lbl = document.querySelector("#player2-label");
const gameBoard = document.querySelector("#game-board");
const spaces = document.querySelectorAll(".box");
const chkPlayer = document.querySelector("#chk");
const sliderPlayer = document.querySelector(".switch span");
let vArea = [];
startBtn.addEventListener("click", initializeGame);

function initializeGame() {
  vArea = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  player1Lbl.innerText = "Jogador 1";
  player2Lbl.innerText = "Jogador 2";
  restartGame();
  if (player1.value === "" || player2.value === "") {
    alert("Digite o nome dos jogadores!");
  } else {
    player1Lbl.innerText = player1.value;
    player2Lbl.innerText = player2.value;
    player1.value = "";
    player2.value = "";
    spaces.forEach(function (space) {
      space.innerText = "";
      space.classList.remove("win");

      space.classList.add("cursor-pointer");
      space.addEventListener("click", markSpaces);
    });
  }
}
function restartGame() {
  spaces.forEach(function (space) {
    space.innerText = "";
    space.classList.remove("win");
  });
  sliderPlayer.innerText = "X";
  chkPlayer.checked = false;
  player1Lbl.classList.remove("hidden-name");
  player2Lbl.classList.remove("hidden-name");
}

function markSpaces(ev) {
  const space = ev.currentTarget;
  const area = space.dataset.area;
  const rowColumnPair = area.split(".");
  const row = rowColumnPair[0];
  const column = rowColumnPair[1];
  chkPlayer.checked = true;

  if (space.innerText === "") {
    if (sliderPlayer.innerText === "X") {
      space.innerText = "X";
      chkPlayer.checked = true;
      sliderPlayer.innerText = "O";
      player2Lbl.classList.remove("hidden-name");
      player1Lbl.classList.add("hidden-name");
      vArea[row][column] = "X";
    } else {
      space.innerText = "O";
      chkPlayer.checked = false;
      sliderPlayer.innerText = "X";
      player1Lbl.classList.remove("hidden-name");
      player2Lbl.classList.add("hidden-name");
      vArea[row][column] = "O";
    }
  }
  const winAreas = checkWin();

  if (winAreas.length > 0) {
    handleWin(winAreas);
  }
  console.log(winAreas.length == 0);
  space.classList.remove("cursor-pointer");
  space.removeEventListener("click", markSpaces);
}

function checkWin() {
  const winAreas = [];
  if (vArea[0][0] && vArea[0][0] === vArea[0][1] && vArea[0][0] === vArea[0][2])
    winAreas.push("0.0", "0.1", "0.2");
  if (vArea[1][0] && vArea[1][0] === vArea[1][1] && vArea[1][0] === vArea[1][2])
    winAreas.push("1.0", "1.1", "1.2");

  if (vArea[2][0] && vArea[2][0] === vArea[2][1] && vArea[2][0] === vArea[2][2])
    winAreas.push("2.0", "2.1", "2.2");

  if (vArea[0][0] && vArea[0][0] === vArea[1][0] && vArea[0][0] === vArea[2][0])
    winAreas.push("0.0", "1.0", "2.0");

  if (vArea[0][1] && vArea[0][1] === vArea[1][1] && vArea[0][1] === vArea[2][1])
    winAreas.push("0.1", "1.1", "2.1");

  if (vArea[0][2] && vArea[0][2] === vArea[1][2] && vArea[0][2] === vArea[2][2])
    winAreas.push("0.2", "1.2", "2.2");

  if (vArea[0][0] && vArea[0][0] === vArea[1][1] && vArea[0][0] === vArea[2][2])
    winAreas.push("0.0", "1.1", "2.2");

  if (vArea[0][2] && vArea[0][2] === vArea[1][1] && vArea[0][2] === vArea[2][0])
    winAreas.push("0.2", "1.1", "2.0");
  return winAreas;
}
function handleWin(areas) {
  areas.forEach(function (area) {
    document.querySelector("[data-area='" + area + "']").classList.add("win");
  });
  console.log;
  if (sliderPlayer.innerText === "X") {
    alert(`${player2.value} VENCEU`);
    chkPlayer.checked = true;
    sliderPlayer.innerText = "O";
    player2Lbl.classList.remove("hidden-name");
  } else if (sliderPlayer.innerText === "O") {
    alert(`${player1.value} VENCEU`);
    chkPlayer.checked = false;
    sliderPlayer.innerText = "X";
    player1Lbl.classList.remove("hidden-name");
  }
  spaces.forEach(function (space) {
    space.removeEventListener("click", markSpaces);
  });
}
