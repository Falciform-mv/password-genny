// Assignment code here
const capLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const specialChars = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '&',
  '*',
  '?',
  '~',
]
// generate random number of characters by taking user input number, then returning the index of a random number
let randomNumber = function(array) {
  
    let value = Math.floor(Math.random() * 26);

    return array[value]; 
}

// generate a random number then take that random number and assign it to the index of specialChars array
let randomSpecChar = function() {
  let specialValue = Math.floor(Math.random() * 9);

  console.log(specialChars[specialValue]);
  return specialChars[specialValue];
}

// prompt questions
let promptQuestions = function() {
  let lengthMax = window.prompt("How many characters should your password be?")

  let specCharNum = window.confirm("Include special characters?");

  let passwordOptions = {
    lengthMax: lengthMax,
    specCharNum: specCharNum
  };

  return passwordOptions;

}

// Upon clicking the button, prompt the user with a series of password critera
let generatePassword = function() {
  let lengthMax = window.prompt("how many characters");

  // checks to see if password length is within critera
  if (lengthMax < 8 || lengthMax > 128) {
    window.alert("Must be at least 8 characters");
    return generatePassword(); 
  }
  // initialize the empty string to be appended to
  let string = "";

  // loop through the capital letters for as long as the user indicated then append those obtained random letters to the string variable
  for (i = 0; i < lengthMax; i++) {
    let options = randomNumber(capLetters);
    string += options;
  }


  // returns the newly appended string variable so generatePassword() equals the mix of capital letters
 return string;

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

