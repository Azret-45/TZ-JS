const inputField = document.querySelector("input");
const duplicateField = document.querySelector("#duplicateField");
const form = document.querySelector("form");

inputField.addEventListener("input", function () {
  duplicateField.textContent = inputField.value;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(inputField.value);

  inputField.value = "";
  duplicateField.textContent = "";
});
