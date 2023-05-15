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
    return;
  }
  // console.log(`email: ${email.value}, password: ${password.value}`);
  event.currentTarget.reset();
  console.log(form.elements.email);
  console.log(form.elements.email.event);
}
