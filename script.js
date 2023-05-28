const newsletter = document.querySelector(".newsletter");
const errorMessage = document.querySelector(".errorMessage");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector("form");
const successContainer = document.querySelector(".success-container");
const dismissBtn = document.querySelector(".dismissBtn");
const verifyEmailLink = document.querySelector(".verify");


validateInput();

let isValid = false;

function validateInput() {
  input.addEventListener("input", () => {
    if (input.value == "") {
      input.classList.add("error");
      errorMessage.innerHTML = `Valid email required`;
      isValid = false;
    } else if ( input.value != "" &&
      input.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      input.classList.remove("error");
      errorMessage.innerHTML = "";
      isValid = true;
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (isValid) {
    validateInput();
    newsletter.classList.add("hide");
    successContainer.classList.remove("hide");
    verifyEmailLink.innerHTML = input.value
  }
});

dismissBtn.addEventListener('click', ()=>{
  newsletter.classList.remove("hide");
  successContainer.classList.add("hide");
  input.value = ''
})