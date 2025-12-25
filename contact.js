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
const txtCounter = document.getElementById("txt-counter");

// Buttons

// Validation functions
function validateName() {}
function validateEmail() {}
function validateMessage() {}
function showError() {}
function clearError() {}
function clearForm() {}

// Count characters in textarea
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
      txtCounter.classList.add("over");
   }
});
