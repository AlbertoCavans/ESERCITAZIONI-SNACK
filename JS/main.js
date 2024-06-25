const randomizerButton = document.querySelector(".btn-primary");
const minNumber = document.getElementById("min");
const maxNumber = document.getElementById("max");
let maxNumb = 0;
let minNumb = 0;

function newMaxNumbs() {
  maxNumb = parseInt(prompt("Scrivi il numero maggiore del range desiderato"));
  if (isNaN(maxNumb)) {
    alert("Devi inserire un numero!");
    maxNumb = parseInt(
      prompt("Scrivi il numero maggiore del range desiderato")
    );
  } else {
    console.log(maxNumb);
    return maxNumb;
  }
}

function newMinNumbs() {
  minNumb = parseInt(prompt("Scrivi il numero minore del range desiderato"));
  if (isNaN(minNumb)) {
    alert("Devi inserire un numero!");
    minNumb = parseInt(prompt("Scrivi il numero minore del range desiderato"));
  } else if (minNumb > maxNumb) {
    alert("Devi inserire un numero minore rispetto al maggiore del range!");
    minNumb = parseInt(prompt("Scrivi il numero minore del range desiderato"));
  } else {
    console.log(minNumb);
    return minNumb;
  }
}

newMaxNumbs();
newMinNumbs();

minNumber.innerText = minNumb;
maxNumber.innerText = maxNumb;

console.log(maxNumb);
console.log(minNumb);

function getRandomNumber(max, min) {
  const printedNumber = document.querySelector(".text-primary");
  console.log(maxNumb);
  console.log(minNumb);
  let numb = Math.floor(Math.random() * max) + min;
  console.log(numb);
  printedNumber.innerText = numb;
  return;
}

randomizerButton.addEventListener("click", function () {
  getRandomNumber(maxNumb, minNumb);
});
