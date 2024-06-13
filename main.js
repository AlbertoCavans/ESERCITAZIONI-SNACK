const numbers = document.querySelector(".numbers");
const array = [2, 5, 18, 45, 8, 6];

// numbers.innerHTML = `<div class="col-2">`;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    numbers.innerHTML += `<div class="col-2 card m-2">Stampiamo n.o: ${array[i]}</div>`;
  }
}
// numbers.innerHTML += `</div>`;
// `<div class="col-2"><div class="card my-2">Stampiamo n.o: ${i}</div></div>`
