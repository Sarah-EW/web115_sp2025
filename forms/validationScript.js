"use strict" 
//Module  regex validation
//web115 spring 2025
//Sarah Holsapple
//February 28, 2025

// JavaScript code for form validation
// Prevent form from submitting

    // Retrieve the input field value
let userInput = document.getElementById("inputField");
let submitButton = document.getElementById("submitButton");

    // Add an event listener to the form that submits an event.
submitButton.addEventListener("click", validateInput);
    // Regular expression pattern for alphanumeric input

    //Implement a function that validates the input value using a regular expression for alphanumeric input.
      // Check if the input value matches the pattern

function validateInput() {
  if (userInput == "") {
    userInput.setCustomValidity("Enter something that is alphanumberic please");
  } else if (!/^[A-Za-z0-9]+$/.test(userInput.value)) {
      userInput.setCustomValidity("Input must be Alphanumeric (numbers and/or letters)");
  } else {
      window.alert("you did it, submitted!");
  }
}
