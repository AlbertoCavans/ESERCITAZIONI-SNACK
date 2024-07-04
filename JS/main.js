// ! Counter number Snack
/* const myArray = [2, 5, 6, 7, 8, 8, 5, 4, 3, 2, 1, 5];
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
}); */

// ! Add numbers until the user submit "zero"
const printResult = document.getElementById("result");
let printArray = document.getElementById("myArray");
const userNumbers = [];
let result = 0;
let userNumber;

userNumber = parseInt(
  prompt(
    'Inserisci un numero diverso da "zero", se invii "zero" otterrai solo lo "zero" stesso'
  )
);

while (userNumber != 0) {
  if (isNaN(userNumber)) {
    userNumber = parseInt(
      prompt(
        'Hai inserito un input che non è un numero! Devi Inserire un numero, verrà sommato ai numeri precedentemente inseriti. Se invii "zero" otterrai la somma, se invii un numero diverso da "zero" puoi inserire dei nuovi numeri da sommare'
      )
    );
  } else {
    userNumbers.push(userNumber);
    console.log(userNumbers);
    result += userNumber;
    console.log("Somma temporanea = " + result);
    userNumber = parseInt(
      prompt(
        'Inserisci un altro numero, verrà sommato ai numeri precedentemente inseriti. Se invii "zero" otterrai la somma, se invii un numero diverso da "zero" puoi inserire dei nuovi numeri da sommare'
      )
    );
  }
}

for (let i = 0; i < userNumbers.length; i++) {
  if (i < userNumbers.length - 1) {
    printArray.innerText += userNumbers[i] + `-`;
    console.log(userNumbers[i]);
  } else {
    printArray.innerText += `${userNumbers[i]}.`;
    console.log(userNumbers[i]);
  }
}

printResult.innerText = result;
