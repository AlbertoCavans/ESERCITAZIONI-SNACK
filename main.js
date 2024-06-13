const number = document.querySelector(".numbers");

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    number.innerHTML += `<div class="col-2"><div class="card my-2">Stampiamo n.o: ${i}</div></div>`;
  }
}
