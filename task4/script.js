const promT = document.querySelector("a");

promT.onclick = function () {
  
  const userInput = prompt("Введите новый текст:");
    promT.textContent = userInput;
};
