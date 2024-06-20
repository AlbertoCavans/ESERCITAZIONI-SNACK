const secretList = ["Mike", "Teto", "Nico", "Giada", "Rovvi", "Albe"];
const result = document.querySelector(".text-primary");
let userName = prompt("Scrivi il tuo nome");
let userInvited = false;

for (let i = 0; i < secretList.length; i++) {
  const listMember = secretList[i];

  if (listMember == userName) {
    console.log(userName);
    console.log(listMember);
    userInvited = true;
    console.log(userInvited);
  }

  if (userInvited) {
    result.innerText = "Fai parte della lista";
  } else {
    result.innerText = "Non fai parte della lista";
  }
}
