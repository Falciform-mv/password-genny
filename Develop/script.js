// Assignment code here
// generate random number of characters
let randomNumber = function(min, lengthMax) {
  // let value = Math.floor(Math.random() * (lengthMax - min) + min);
  let value = lengthMax - min;
  return value;
}

// let critera = function() {
//   let lengthMax = window.prompt("How many characters should your password be?")
//   return lengthMax;
// }

// Upon clicking the button, prompt the user with a series of password critera
let generatePassword = function() {
  let lengthMax = window.prompt("How many characters should your password be?")
 let options = randomNumber(8, lengthMax);

 return options;

}
// password should equal number of characters user chooses

// User inputs which criteria to include in the password

// When length is prompted, user inputs and validates a length of 8-128 characters

// When character type is prompted, list out options for lowercase, uppercase, numeric, and or special chars

// upon answering prompt, validate that at least one character type is selected


// once all prompts finish, generate password that matches the selected criteria





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// when password is generated, write password to input box
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Runs the writePassword function once clicked
generateBtn.addEventListener("click", writePassword);

