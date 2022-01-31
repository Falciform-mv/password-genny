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

const lowLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

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

const numCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];






// prompt questions
let promptQuestions = function() {
  let lengthMax = parseInt(
    window.prompt("How many characters should your password be?"))

  if (Number.isNaN(lengthMax)) {
    window.alert("password length must be provided as a number");
    return null;
  }

  if (lengthMax < 8) {
    window.alert("password must be at least 8 characters");
    return null;
  }

  if (lengthMax > 128) {
    window.alert("password must be less than 129 characters");
    return null;
  }

  let specChar = window.confirm("Include special characters?");

  let numChar = window.confirm("Include numeric characters?");

  let lowerCaseChar = window.confirm("Include lowercase characters?");

  let upperCaseChar = window.confirm("Include uppercase characters?");

  // ensure they pick at least one criteria
  if (
    specChar === false &&
    numChar === false &&
    lowerCaseChar === false &&
    upperCaseChar === false
  ) {
    window.alert("must pick at least one");
    return null;
  }

  // stores user input in an object
  let passwordCriteria = {
    lengthMax: lengthMax,
    specChar: specChar,
    numChar: numChar,
    lowerCaseChar: lowerCaseChar,
    upperCaseChar: upperCaseChar
  };

  return passwordCriteria;
}

// generate random number of characters by taking user input number, then returning the index of a random number
let randomElement = function(array) {
  
  let value = Math.floor(Math.random() * array.length);

  return array[value]; 
}

// Upon clicking the button, prompt the user with a series of password critera
let generatePassword = function() {
  
  // call to get password options prompt
  let criteria = promptQuestions();

  // initialize variable to store password 
  let string = [];

  let additionalChars = [];

  let necessaryChars = [];

  if (!criteria) return null;

  // special characters
  if (criteria.specChar === true) {
    additionalChars = additionalChars.concat(specialChars);
    necessaryChars.push(randomElement(specialChars));
    
    
  }

  // Numbers
  if (criteria.numChar === true) {
    additionalChars = additionalChars.concat(numCharacters);
    necessaryChars.push(randomElement(numCharacters));
  }

  // lowercase letters
  if (criteria.lowerCaseChar === true) {
    additionalChars = additionalChars.concat(lowLetters);
    necessaryChars.push(randomElement(lowLetters));
  }

  // uppercase letters
  if (criteria.upperCaseChar === true) {
    additionalChars = additionalChars.concat(capLetters);
    necessaryChars.push(randomElement(capLetters));
  }

  // loop over password length from criteria object
  for (i = 0; i < criteria.lengthMax; i++) {
    let possibleChar = randomElement(additionalChars);

    console.log(criteria);
    string.push(possibleChar);
    
  }

  // loop to get one of each character in the resulting string
  for (i = 0; i < necessaryChars.length; i++) {
    string[i] = necessaryChars[i];
  }



 return string.join('');

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

