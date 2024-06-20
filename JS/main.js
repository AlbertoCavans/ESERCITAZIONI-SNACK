// Const-Elements
const longerWord = document.querySelector(".text-danger");
const firstWord = prompt("Scrivi una parola");
const secondWord = prompt("Scrivi un'altra parola");

if (firstWord.length < secondWord.length) {
  longerWord.innerHTML = `La parola più lunga è la seconda`;
} else if (secondWord.length < firstWord.length) {
  longerWord.innerHTML = `La parola più lunga è la prima`;
} else {
  longerWord.innerHTML = "Le due parole sono lunghe uguali";
}
