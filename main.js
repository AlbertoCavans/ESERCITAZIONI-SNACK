let userName = document.getElementById("user-name");
let userGender = document.getElementById("user-gender");
let button = document.getElementById("button");
let result = document.getElementById("result");

button.addEventListener("click", function () {
  if (userGender.value == "maschio") {
    result.className = "text-primary";
    console.log(result.className);
    result.innerText = "Il mio nome è " + userName.value;
  } else if (userGender.value == "femmina") {
    result.className = "text-danger";
    console.log(result.className);
    result.innerText = "Il mio nome è " + userName.value;
  } else {
    result.className = "text-success";
    console.log(result.className);
    result.innerText = "Il mio nome è " + userName.value;
  }
});
