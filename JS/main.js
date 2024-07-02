const myArray = [2, 5, 6, 7, 8, 8, 5, 4, 3, 2, 1, 5];
const myNumber = 5;

const myNumb = document.getElementById("myNumber");
const myNumbers = document.getElementById("numbersArray");
const countButton = document.querySelector(".btn-primary");
const printResult = document.querySelector(".text-success");

// Print myArray
let listNumbers = "";
for (let i = 0; i < myArray.length; i++) {
  if (i < myArray.length - 1) {
    listNumbers += myArray[i] + " - ";
  } else {
    listNumbers += myArray[myArray.length - 1] + ".";
  }
}
myNumbers.innerText = listNumbers;

// Print myNumber
myNumb.innerText = myNumber;

// Count function
function countNumber(startArray, countingNumber) {
  let counter = 0;

  for (let i = 0; i < startArray.length; i++) {
    if (startArray[i] == countingNumber) {
      counter++;
    }
  }
  console.log(counter);
  printResult.innerText = counter;
  return counter;
}

countButton.addEventListener("click", function () {
  countNumber(myArray, myNumber);
});
