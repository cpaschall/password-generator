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
var alphArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charArray = ['!', '@', '#', '$', '%', '^', '&', '*'];
// value of how many characheters from password length will not be alphabetic characters.
var currentPassLength = 0
// Start with empty new password array, add characters later based on answers to prompts
var newPass =[];
var randPass = []

function generatePassword() {
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var passLen = parseInt(prompt("How long will your password be? (Choose a value 8 - 128)"));
  if (passLen > 128 || passLen < 8) {
    alert("The the input for password length is not within requested length.");
    // break
  }
    // return passLen;
  
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
  var lower = prompt("Will your password have lower case letters? (Y/N)");
  var upper = prompt("Will your password have upper case letters? (Y/N)");
  var numeric = prompt("Will your password have a number? (Y/N)");
  var specialChar = prompt("Will your password have a special character? (Y/N)");
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (lower.toLowerCase() === 'n' && upper.toLowerCase() === 'n') {
    alert("You must choose at least upper or lower case letters.");
    // break;
  }

  if (lower.toLowerCase()==="y") {
    currentPassLength = currentPassLength + 1;
    var randLower = Math.floor(Math.random() * alphArray.length);
    newPass.push(alphArray[randLower]);
  } else if (lower.toLowerCase() != "y" && lower.toLowerCase() != "n") {
    alert("Incorrect value for lower case prompt.")
  }

  if (upper.toLowerCase()==="y") {
    currentPassLength = currentPassLength + 1;
    var randUpper = Math.floor(Math.random() * alphArray.length);
    newPass.push(alphArray[randUpper].toUpperCase());
  } else if (upper.toLowerCase() != "y" && upper.toLowerCase() != "n") {
    alert("Incorrect value for upper case prompt.")
  }

  if (numeric.toLowerCase() === "y") {
    currentPassLength = currentPassLength + 1;
    var randNum = Math.floor(Math.random() * numArray.length);
    // console.log(randNum)
    newPass.push(numArray[randNum]);
  } else if (numeric.toLowerCase() != "y" && numeric.toLowerCase() != "n") {
    alert("Incorrect value for number prompt.")
  }

  if (specialChar.toLowerCase() === "y") {
    currentPassLength = currentPassLength + 1;
    var randChar = Math.floor(Math.random() * charArray.length);
    newPass.push(charArray[randChar]);
  } else if (specialChar.toLowerCase() != "y" && specialChar.toLowerCase() != "n") {
    alert("Incorrect value for special character prompt.")
  }

  if (lower.toLowerCase() === "n") {
    for (i = 0; i < passLen - currentPassLength; i++) {
      var randAlpha = Math.floor(Math.random() * alphArray.length);
      // console.log(randItem);
      newPass.push(alphArray[randAlpha].toUpperCase());
      // var newPass = newPass.push(alphArray[randAlpha]);
    }
  } else {
    for (i = 0; i < passLen - currentPassLength; i++) {
      var randAlpha = Math.floor(Math.random() * alphArray.length);
      // console.log(randItem);
      newPass.push(alphArray[randAlpha]);
      // var newPass = newPass.push(alphArray[randAlpha]);
    }
  }

  for (i= 0; i<newPass.length; i++) {
    if (newPass[i] != randPass) {
      var randIndex = Math.floor(Math.random() * newPass.length);
      randPass.push(newPass[randIndex]);
    }
  }

  console.log(newPass)
  console.log(randPass)
  newPass = []
  randPass = []
  currentPassLength = 0
}
  
  // return passLen + passLen

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