# LAB 2

This is an assignment at Kristianstad University.

The assignment is to take the first assignment (LAB1) and add JavaScript to the form, to make it
interactive. Validate input fields and display error messages to the user.

## How to use

Download the repository and place all files in a the same folder.

Either dubble click on the index.html or open in a code editor like VSCode and open with "Live server".

## How is works

Each input as a event listener. The event listener checks the input and applies corresponding border color.
It will also send a parameter to an other function that removes the error message if input field has the correct input.

## When pressing the buttons

The Reset button - Runs a function that removes all input values and reset the error messages. In other words, it clears all the fields and restore the form to it starting point.

The Submit button - Validates all fields by running all the validating functions. If an input isn't correct it will display an error message under the field that has the error. If all the inputs are OK then it will show a modal thanking the person that has entered the form. The modal will be shown for 3sec then it disappears and runs the clearForm function.
