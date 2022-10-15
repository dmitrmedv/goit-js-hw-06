const form = document.querySelector(".login-form");
const buttunLoginRef = document.querySelector(".login-form button");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
