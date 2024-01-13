function addInput() {
  const ul = document.getElementById("inputs");
  const newLi = document.createElement("li");
  const newInput = document.createElement("input");

  newLi.className = "list-item";
  newLi.innerText = "Novo input: ";

  newInput.type = "text";
  newInput.name = "input";

  newLi.appendChild(newInput);
  ul.appendChild(newLi);
}
