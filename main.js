const number = document.querySelector(".numbers");

for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    number.innerHTML += `<li class="number text-danger">Stampiamo n.o: ${i}</li>`;
  } else {
    number.innerHTML += `<li class="number text-primary">Stampiamo n.o: ${i}</li>`;
  }
}
