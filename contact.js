// Variables
// Inputs
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const msg = document.getElementById("msg");
const subject = document.getElementById("subject");

// Outputs
const fnameErr = document.getElementById("fname-err");
const lnameErr = document.getElementById("lname-err");
const emailErr = document.getElementById("email-err");
const countErr = document.getElementById("count-err");
const txtCounter = document.getElementById("txt-counter");

// Buttons

// Validation functions
function validateName() {
   const fnameValue = firstName.value;
   const lettersOnly = /^[a-zA-Z]+$/;

   if (!lettersOnly.test(fnameValue)) {
      showError(firstName, fnameErr, "Field can only contain letters!");
      return false;
   }
   firstName.classList.add("valid-border");
   return true;
}

function validateLastName() {
   const lnameValue = lastName.value;
   const lettersOnly = /^[a-zA-Z]+$/;

   if (!lettersOnly.test(lnameValue)) {
      showError(lastName, lnameErr, "Field can only contain letters!");
      return false;
   }
   lastName.classList.add("valid-border");
   return true;
}

function validateEmail() {
   const emailValue = email.value;

   if (!emailValue.includes("@")) {
      showError(email, emailErr, "Field must contain '@'");
      return false;
   }
   email.classList.add("valid-border");
   return true;
}

function validateMessage() {
   const messageValue = msg.value.length;

   if (messageValue < 20) {
      showError(msg, countErr, "Field must have at least 20 characters");
      return false;
   } else {
      msg.classList.add("valid-border");
      return true;
   }
}

function showError(inputElement, outputElement, errMsg) {
   inputElement.classList.add("error-border");
   outputElement.classList.add("show");
   outputElement.textContent = errMsg;
}

function clearError(inputElement, outputElement) {
   inputElement.classList.remove("error-border", "valid-border");
   outputElement.classList.remove("show");
   outputElement.textContent = "";
}

function clearForm() {}

// Eventlisteners
firstName.addEventListener("input", function () {
   const lettersOnly = /^[a-zA-Z]+$/;

   if (lettersOnly.test(firstName.value) || firstName.value === "") {
      clearError(firstName, fnameErr);
   }
});

lastName.addEventListener("input", function () {
   const lettersOnly = /^[a-zA-Z]+$/;

   if (lettersOnly.test(lastName.value) || lastName.value === "") {
      clearError(lastName, lnameErr);
   }
});

email.addEventListener("input", function () {
   const emailValue = email.value;

   if (emailValue.includes("@")) {
      clearError(email, emailErr);
   }
});

subject.addEventListener("change", function () {
   const subjectValue = subject.value;

   if (subjectValue !== "") {
      subject.classList.add("valid-border");
   } else subject.classList.remove("valid-border");
});

msg.addEventListener("input", function () {
   const text = msg.value;
   const count = text.length;
   txtCounter.textContent = count + " / " + "20";

   txtCounter.classList.remove("under", "over");

   if (count === 0) {
      return;
   }
   if (count < 20) {
      txtCounter.classList.add("under");
   } else {
      clearError(msg, countErr);
      txtCounter.classList.add("over");
   }
});
