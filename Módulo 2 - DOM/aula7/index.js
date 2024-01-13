function addContact() {
  const sectionContact = document.getElementById("contacts-list");

  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");

  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone: ";
  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phone";
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement("br"));

  const addressLi = document.createElement("li");
  addressLi.innerText = "Endereço: ";
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "phone";
  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  ul.appendChild(document.createElement("br"));

  sectionContact.append(h3, ul);
}

function removeContact() {
  const sectionContact = document.getElementById("contacts-list");

  const titles = document.getElementsByTagName("h3");
  const ul = document.getElementsByTagName("ul");

  sectionContact.removeChild(titles[titles.length - 1]);
  sectionContact.removeChild(ul[ul.length - 1]);
}
