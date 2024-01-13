const input = document.querySelector("#input");

document.querySelector("#value").addEventListener("click", function () {
  input.value = input.value === "" ? "Olá, mundo!" : "";

  input.getAttribute("value");
});

document.querySelector("#type").addEventListener("click", function () {
  input.type = input.type === "text" ? "radio" : "text";

  input.setAttribute("type", "radio");
});

document.querySelector("#placeholder").addEventListener("click", function () {
  input.placeholder = "Digita algo...";

  input.setAttribute("placeholder", "Digita...");
});

document.querySelector("#disable").addEventListener("click", function () {
  input.disabled = true;

  input.setAttribute("disabled", true);
});

document.querySelector("#data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log(`Valor do atributo data-something-else: ${data}`);
  input.dataset.somethingElse = "Novo valor";
  console.log(
    `Novo valor do atributo data-something-else: ${input.dataset.somethingElse}`
  );
});
