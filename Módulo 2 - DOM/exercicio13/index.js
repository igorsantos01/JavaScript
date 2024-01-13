const startBtn = document.querySelector("#start");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const gameBoard = document.querySelector("#game-board");
const spaces = document.querySelectorAll(".box");
const chkPlayer = document.querySelector("#chk");
const sliderPlayer = document.querySelector(".switch span");
let area = [[], [], []];
startBtn.addEventListener("click", initializeGame);

function initializeGame() {
  if (player1.value === "" || player2.value === "") {
    alert("Digite o nome dos jogadores!");
  } else {
    const player1Lbl = document.querySelector("#player1-label");
    const player2Lbl = document.querySelector("#player2-label");

    player1Lbl.innerText = player1.value;
    player2Lbl.innerText = player2.value;
    spaces.forEach(function (space) {
      space.classList.add("cursor-pointer");
      space.addEventListener("click", markSpaces);
    });
  }
}

function markSpaces(ev) {
  const space = ev.currentTarget;

  if (space.innerText === "") {
    if (sliderPlayer.innerText === "X") {
      space.innerText = "X";
      chkPlayer.checked = true;
      sliderPlayer.innerText = "O";
    } else {
      space.innerText = "O";
      chkPlayer.checked = false;
      sliderPlayer.innerText = "X";
    }
  }
  space.classList.remove("cursor-pointer");
  space.removeEventListener("click", markSpaces);
}

function checkWinner(space) {
  con;
}
