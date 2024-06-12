const number = document.querySelector(".numbers");

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    number.innerHTML += `<li class="number">Stampiamo n.o: ${i}</li>`;
  }
}
