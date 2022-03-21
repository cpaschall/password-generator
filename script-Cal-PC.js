// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

function generatePassword() {
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var passLen = parseInt(prompt("How long will your password be? (Choose a value 8 - 128)"));
  if (passLen > 128 || passLen < 8) {
    alert("The the input for password length is not within requested length.");
  } else {
    return passLen;
  };
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
  var lower = prompt("Would your password to have lower case letters (Y/N)?");
  var upper = prompt("Would your password to have upper case letters (Y/N)?");
  var numeric = prompt("Would your password to have a number (Y/N)?");
  var specialChar = prompt("Would your password to have a special character (Y/N)?");
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
  
  return passLen + passLen
}

generatePassword()
// 15, 13, 11, 9, 7
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page