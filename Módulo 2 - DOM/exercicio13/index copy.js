const inputChk = document.querySelector("#chk");
const selectorBall = document.querySelector(".slider");
const startBtn = document.querySelector("#start");
const playedArea = document.querySelectorAll(".box");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");

startBtn.addEventListener("click", function () {
  if (name1.value == "" || name2.value == "") {
    alert("Preencha com os nomes dos jogadores!");
  } else {
    const player1 = document.querySelector("#player1");
    const player2 = document.querySelector("#player2");
    player1.innerText = name1.value;
    player2.innerText = name2.value;
    tableRow.forEach(function (row) {
      row.classList.add("cursor-pointer");
      row.addEventListener("click", function (ev) {
        const position = ev.currentTarget;
        if (selectorBall.innerText === "X") {
          position.innerText = "X";
          inputChk.checked = true;
          selectorBall.innerText = "O";
        } else {
          position.innerText = "O";
          inputChk.checked = false;
          selectorBall.innerText = "X";
        }
      });
    });
  }
});
