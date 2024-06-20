// Const-Elements
let totNumber = document.querySelector(".text-primary");
let arrayNumbers = [];
let partialTot = 0;

while (arrayNumbers.length < 10) {
  let factorNumber = parseInt(prompt("Scrivi un numero"));

  console.log(factorNumber);
  console.log(typeof factorNumber);
  partialTot += factorNumber;
  console.log(partialTot);
  arrayNumbers.push(factorNumber);
  console.log(arrayNumbers);
  totNumber.innerHTML += `<li class="text-primary">${factorNumber}</li>`;
}

totNumber.innerHTML += `<li class="text-danger">Tot: ${partialTot}</li>`;
