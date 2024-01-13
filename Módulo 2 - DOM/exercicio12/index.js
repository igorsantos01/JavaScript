/* function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.innerText = text;
  label.htmlFor = htmlFor;
  return label;
}
function createInput(type, name, id, value) {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.id = id;
  input.value = value;
  return input;
}
function createLi(id, className) {
  const li = document.createElement("li");
  li.id = id;
  li.className = className;
  return li;
}
function createButton(text, id, type) {
  const button = document.createElement("button");
  button.innerText = text;
  button.id = id;
  button.type = type;
  return button;
}
let developers = [];
const formDevRegister = document.querySelector("#register-dev");
const addTechBtn = document.querySelector("#add-tech");
const stackInput = document.querySelector("#stack-input");
let index = 0;

addTechBtn.addEventListener("click", function (ev) {
  let idIndex = 1;
  const newRow = createLi("rowTech" + index, "rowTech");
  const techNameLabel = createLabel("Nome: ", "tech-" + index);
  const techNameInput = createInput("text", "tech-name", "tech-" + index, "");
  let idRadio = "techExp-" + index + ".";

  const ExpLabel = createLabel("Experiência:", "");

  const techExpLabel1 = createLabel("0-2 anos", idRadio + idIndex);
  const techExpInput1 = createInput(
    "radio",
    "techExp-" + index,
    idRadio + idIndex++,
    "0-2 anos"
  );

  const techExpLabel2 = createLabel("3-4 anos", idRadio + idIndex);
  const techExpInput2 = createInput(
    "radio",
    "techExp-" + index,
    idRadio + idIndex++,
    "3-4 anos"
  );

  const techExpLabel3 = createLabel("5+ anos", idRadio + idIndex);
  const techExpInput3 = createInput(
    "radio",
    "techExp-" + index,
    idRadio + idIndex++,
    "5+ anos"
  );

  const removeTechBtn = createButton("Remover", "remove-tech", "button");
  removeTechBtn.addEventListener("click", function (ev) {
    ev.currentTarget.parentNode.remove();
  });
  newRow.append(
    techNameLabel,
    techNameInput,
    ExpLabel,
    techExpInput1,
    techExpLabel1,
    techExpInput2,
    techExpLabel2,
    techExpInput3,
    techExpLabel3,
    removeTechBtn
  );
  stackInput.append(newRow);

  index++;
});
formDevRegister.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const nameDev = document.getElementById("name-dev");
  const techRow = document.querySelectorAll(".rowTech");

  let technologies = [];
  techRow.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="tech-name"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, exp: techExp });

    const newDev = { fullName: nameDev, tech: technologies };
    developers.push(newDev);
    alert("Cadastrado com sucesso!");

    nameDev.value = "";
    techRow.forEach(function (row) {
      row.remove();
    });
  });
  console.log(developers);
});
 */
function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = "text", placeholder = "") {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}
const addTechBtn = document.getElementById("addTechBtn");
const form = document.getElementById("devForm");
const developers = [];
let inputRows = 0;
addTechBtn.addEventListener("click", function (ev) {
  const stackInputs = document.getElementById("stackInputs");

  const newRow = document.createElement("li");
  const rowIndex = inputRows;
  inputRows++;
  newRow.id = "inputRow-" + rowIndex;
  newRow.className = "inputRow";

  const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex);
  const techNameInput = createInput("techName-" + rowIndex, null, "techName");

  const expLabel = createLabel("Experiência: ");
  const id1 = "expRadio-" + rowIndex + ".1";
  const expRadio1 = createInput(
    id1,
    "0-2 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel1 = createLabel("0-2 anos", id1);
  const id2 = "expRadio-" + rowIndex + ".2";
  const expRadio2 = createInput(
    id2,
    "3-4 anos",
    "techExp-" + rowIndex,
    "radio"
  );
  const expLabel2 = createLabel("3-4 anos", id2);
  const id3 = "expRadio-" + rowIndex + ".3";
  const expRadio3 = createInput(id3, "5+ anos", "techExp-" + rowIndex, "radio");
  const expLabel3 = createLabel("5+ anos", id3);

  const removeRowBtn = document.createElement("button");
  removeRowBtn.type = "button";
  removeRowBtn.innerText = "Remover";
  removeRowBtn.addEventListener("click", function () {
    stackInputs.removeChild(newRow);
  });

  newRow.append(
    techNameLabel,
    techNameInput,
    expLabel,
    expRadio1,
    expLabel1,
    expRadio2,
    expLabel2,
    expRadio3,
    expLabel3,
    removeRowBtn
  );

  stackInputs.appendChild(newRow);
});
form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullnameInput = document.getElementById("fullname");
  const inputRows = document.querySelectorAll(".inputRow");

  let technologies = [];
  inputRows.forEach(function (row) {
    // #rowId input[name="techName"]
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { fullname: fullnameInput.value, technologies: technologies };
  developers.push(newDev);
  alert("Dev cadastrado com sucesso!");

  fullnameInput.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });

  console.log(developers);
});
