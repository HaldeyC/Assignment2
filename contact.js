// Variables
// Inputs
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const msg = document.getElementById("msg");
const subject = document.getElementById("subject");
const formSent = document.getElementById("form-sent");

// Outputs
const fnameErr = document.getElementById("fname-err");
const lnameErr = document.getElementById("lname-err");
const emailErr = document.getElementById("email-err");
const countErr = document.getElementById("count-err");
const txtCounter = document.getElementById("txt-counter");
const thanksTxt = document.getElementById("thanksTxt");

// Buttons
form.addEventListener("reset", function (e) {
   e.preventDefault();
   clearForm();
});

form.addEventListener("submit", function (e) {
   const isFirstNameValid = validateName();
   const isLastNameValid = validateLastName();
   const isEmailValid = validateEmail();
   const isMsgValid = validateMessage();

   if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isMsgValid) {
      e.preventDefault();
   } else {
      showModal();
   }
});

// Validation functions
function validateName() {
   const fnameValue = firstName.value;
   const lettersOnly = /^[a-zA-Z]+$/;

   if (!lettersOnly.test(fnameValue)) {
      showError(fnameErr, "Field can only contain letters!");
      return false;
   }
   return true;
}

function validateLastName() {
   const lnameValue = lastName.value;
   const lettersOnly = /^[a-zA-Z]+$/;

   if (!lettersOnly.test(lnameValue)) {
      showError(lnameErr, "Field can only contain letters!");
      return false;
   }
   return true;
}

function validateEmail() {
   const emailValue = email.value;

   if (!emailValue.includes("@")) {
      showError(emailErr, "Field must contain '@'");
      return false;
   }
   return true;
}

function validateMessage() {
   const messageValue = msg.value.length;

   if (messageValue < 20) {
      showError(countErr, "Field must have at least 20 characters");
      return false;
   } else {
      return true;
   }
}

// Helpers
function showError(outputElement, errMsg) {
   outputElement.classList.add("show");
   outputElement.textContent = errMsg;
}

function clearError(outputElement) {
   outputElement.classList.remove("show");
   outputElement.textContent = "";
}

function clearForm() {
   firstName.value = "";
   firstName.classList.remove("valid-border", "error-border");
   fnameErr.classList.remove("show");
   lastName.value = "";
   lastName.classList.remove("valid-border", "error-border");
   lnameErr.classList.remove("show");
   email.value = "";
   email.classList.remove("valid-border", "error-border");
   emailErr.classList.remove("show");
   subject.value = "";
   subject.classList.remove("valid-border", "error-border");
   msg.value = "";
   msg.classList.remove("valid-border", "error-border");
   txtCounter.textContent = "0 / 20";
   txtCounter.classList.remove("under", "over");
   countErr.classList.remove("show");
}

function showModal() {
   const senderName = firstName.value;
   thanksTxt.innerHTML = "Thank you " + senderName + "!";

   formSent.classList.add("sent");
   setTimeout(() => {
      clearForm();
   }, 500);

   setTimeout(() => {
      formSent.classList.remove("sent");
   }, 3000);
}

// Eventlisteners
firstName.addEventListener("input", function () {
   const lettersOnly = /^[a-zA-Z]+$/;

   if (lettersOnly.test(firstName.value)) {
      firstName.classList.add("valid-border");
      firstName.classList.remove("error-border");
      clearError(fnameErr);
   } else if (firstName.value === "") {
      firstName.classList.remove("valid-border", "error-border");
      clearError(fnameErr);
   } else {
      firstName.classList.add("error-border");
      firstName.classList.remove("valid-border");
   }
});

lastName.addEventListener("input", function () {
   const lettersOnly = /^[a-zA-Z]+$/;

   if (lettersOnly.test(lastName.value)) {
      lastName.classList.add("valid-border");
      lastName.classList.remove("error-border");
      clearError(lnameErr);
   } else if (lastName.value === "") {
      lastName.classList.remove("valid-border", "error-border");
      clearError(lnameErr);
   } else {
      lastName.classList.add("error-border");
      lastName.classList.remove("valid-border");
   }
});

email.addEventListener("input", function () {
   const emailValue = email.value;

   if (emailValue.includes("@")) {
      email.classList.add("valid-border");
      email.classList.remove("error-border");
      clearError(emailErr);
   } else if (emailValue === "") {
      email.classList.remove("valid-border", "error-border");
      clearError(emailErr);
   } else {
      email.classList.add("error-border");
      email.classList.remove("valid-border");
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
   txtCounter.textContent = count + " / " + "40";

   txtCounter.classList.remove("under", "over");

   if (count === 0) {
      msg.classList.remove("valid-border", "error-border");
      clearError(countErr);
      return;
   }
   if (count > 40) {
      msg.classList.add("error-border");
      msg.classList.remove("valid-border");
      txtCounter.classList.add("under");
   } else {
      msg.classList.remove("error-border");
      msg.classList.add("valid-border");
      clearError(countErr);
      txtCounter.classList.add("over");
   }
});
