const myArray = [2, 5, 6, 7, 8, 8, 5, 4, 3, 2, 1, 5];
const myNumber = 5;
let counter = 0;

const myNumb = document.getElementById("myNumber");
const myNumbers = document.getElementById("numbersArray");
const countButton = document.querySelector("btn-primary");

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

countButton.addEventListener("click", function () {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] == myNumber) {
      counter++;
      console.log(counter);
    }
  }
});
