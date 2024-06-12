const number = document.querySelector(".numbers");

for (let i = 100; i > 0; i--) {
  number.innerHTML += `<li class="number">Stampiamo n.o: ${i}</li>`;
}
