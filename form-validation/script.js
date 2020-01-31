const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
  formControl.classList.remove("error");
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value).toLowerCase())) {
    showSuccess(email);
  } else {
    showError(email, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.trim().length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} char`);
  } else if (input.value.trim().length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} char`);
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.previousElementSibling.innerHTML;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 4, 10);
  checkLength(password, 6, 50);
  checkLength(password2, 6, 50);
  isValidEmail(email);
});

// if (username.value === "") {
//   showError(username, "Username is required");
// } else {
//   showSuccess(username);
// }

// if (email.value === "") {
//   showError(email, "Email is required");
// } else if (!isValidEmail(email.value)) {
//   showError(email, "Please input a valid email")
// } else {
//   showSuccess(email);
// }

// if (password.value === "") {
//   showError(password, "Password is required");
// } else {
//   showSuccess(password);
// }

// if (password2.value === "") {
//   showError(password2, "Password is required");
// } else {
//   showSuccess(password2);
// }
