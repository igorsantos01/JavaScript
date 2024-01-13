const form = document
  .querySelector("#orderForm")
  .addEventListener("submit", function (ev) {
    ev.preventDefault();

    const name = document.querySelector('input[name="name"]').value;

    const orderAddrees = document.querySelector('input[name = "name"]').value;

    const breadType = document.querySelector("select[name='bread-type']").value;

    const principal = document.querySelector('input[name ="principal"]').value;

    let salad = "";
    document
      .querySelectorAll('input[name="salad"]:checked')
      .forEach(function (item) {
        salad += item.value + " - ";
      });

    const observation = document.querySelector(
      'textarea[name ="observation"]'
    ).value;

    console.log({
      name,
      orderAddrees,
      breadType,
      principal,
      salad,
      observation,
    });
  });
