function show() {
  const nameElement = document.getElementsByName("contact1");
  console.log(nameElement);

  const classElement = document.getElementsByClassName("contact-input");
  console.log(classElement);

  const tagNameElement = document.getElementsByTagName("li");
  console.log(tagNameElement);

  const queryAllElement = document.querySelectorAll(".contact-input");
  console.log(queryAllElement);

  const queryElement = document.querySelector("#contact1");
  console.log(queryElement);

  const iDElement = document.getElementById("contact1");
  console.log(iDElement);
}
