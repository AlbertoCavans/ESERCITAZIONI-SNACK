const randomizerButton = document.querySelector(".btn-primary");

function getRandomNumber() {
  const printedNumber = document.querySelector(".text-primary");

  let numb = Math.floor(Math.random() * 100);
  console.log(numb);
  printedNumber.innerText = numb;
  return;
}

randomizerButton.addEventListener("click", getRandomNumber);
