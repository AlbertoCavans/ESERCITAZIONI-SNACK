// Const-Elements
const bigNumb = document.querySelector(".text-danger");
const firstNumb = parseInt(prompt("Scrivi un numero"));
const secondNumb = parseInt(prompt("Scrivi un altro numero"));

console.log(typeof firstNumb);
console.log(secondNumb);

if (!isNaN(secondNumb) && !isNaN(firstNumb)) {
  if (firstNumb < secondNumb) {
    console.log(bigNumb);
    bigNumb.innerHTML = "Il numero maggiore è il secondo";
  } else if (secondNumb < firstNumb) {
    bigNumb.innerHTML = "Il numero maggiore è il primo";
    console.log(bigNumb);
  } else {
    bigNumb.innerHTML = "I due numeri sono uguali";
    console.log(bigNumb);
  }
} else {
  bigNumb.innerHTML = "Devi inserire dei numeri interi, non simboli o lettere";
}
