const button = document.getElementById("register-button");
function register(ev) {
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert(`Usuário ${username} cadastrado!`);
  } else {
    alert(`As senhas não conferem!`);
  }
}
button.addEventListener("click", register);

function removeListener() {
  button.removeEventListener("click", register);
  alert("Evento removido");
}

button.addEventListener("mouseover", function (ev) {
  console.log(ev.currentTarget.parentNode);
});
