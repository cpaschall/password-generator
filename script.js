// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // passwordText.value = "fdsdfgdsfgsdfgsd";

}

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
var alphArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var charArray = ['!', '@', '#', '$', '%', '^', '&', '*'];

var allChar = alphArray.concat(alphUpper, numArray, charArray);
var charNoUpper = alphArray.concat(numArray, charArray);
var charNoLower = alphUpper.concat(numArray, charArray);
var charNoNum = alphArray.concat(alphUpper, charArray);
var charNoSym = alphArray.concat(alphUpper, numArray);
var charLowerNum = alphArray.concat(numArray)
var charLowerSym = alphArray.concat(charArray)
var charUpperNum = alphUpper.concat(numArray)
var charUpperSym = alphUpper.concat(charArray)
var charLowerUpper =alphArray.concat(alphUpper)
// value of how many characheters from password length will not be alphabetic characters.
// var currentPassLength = 0
// // Start with empty new password array, add characters later based on answers to prompts
// var newPass =[];
// var randPass = []

function generatePassword() {

  // The newPass, and randPass arrays must be emptied and and current PasswordLength reset to 0 so a fresh password can be created when the Generate button is selected
  var newPass = []
  var randPass = []
  var currentPassLength = 0
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
  var passLen = parseInt(prompt("How long will your password be? (Choose a value 8 - 128)"));
  if (!(passLen <= 128 && passLen >= 8)) {
    return alert("The the input for password length is not within requested length.");
    // break
  }
    // return passLen;
  
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
  
  
  
  
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  
  var lower = prompt("Will your password have lower case letters? (Y/N)");

  if (lower.toLowerCase()==="y") {
    currentPassLength = currentPassLength + 1;
    var randLower = Math.floor(Math.random() * alphArray.length);
    newPass.push(alphArray[randLower]);
  } else if (lower.toLowerCase() != "y" && lower.toLowerCase() != "n") {
    alert("Incorrect value for lower case prompt.")
  }

  var upper = prompt("Will your password have upper case letters? (Y/N)");

  if (upper.toLowerCase()==="y") {
    currentPassLength = currentPassLength + 1;
    var randUpper = Math.floor(Math.random() * alphArray.length);
    newPass.push(alphArray[randUpper].toUpperCase());
  } else if (upper.toLowerCase() != "y" && upper.toLowerCase() != "n") {
    alert("Incorrect value for upper case prompt.")
  }

  if (lower.toLowerCase() === 'n' && upper.toLowerCase() === 'n') {
    alert("You must choose at least upper or lower case letters.");
    // break;
  }

  var numeric = prompt("Will your password have a number? (Y/N)");

  if (numeric.toLowerCase() === "y") {
    currentPassLength = currentPassLength + 1;
    var randNum = Math.floor(Math.random() * numArray.length);
    // console.log(randNum)
    newPass.push(numArray[randNum]);
  } else if (numeric.toLowerCase() != "y" && numeric.toLowerCase() != "n") {
    alert("Incorrect value for number prompt.")
  }

  var specialChar = prompt("Will your password have a special character? (Y/N)");

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
      console.log(newPass);
    }
  } else {
    for (i = 0; i < passLen - currentPassLength; i++) {
      var randAlpha = Math.floor(Math.random() * alphArray.length);
      // console.log(randItem);
      newPass.push(alphArray[randAlpha]);
      // var newPass = newPass.push(alphArray[randAlpha]);
      console.log(newPass);
    }
  }
  
// Once all password characters are established, the array items will be randomized into a new array.
// for loop takes the length of the newPass array and subtracts 1 to account for 0 index and assigns that to the variable 'i'
// The loops subtracts 1 from the current value of 'i' during each pass until the value is less than zero.
  for (i = newPass.length-1; i >= 0; i--) {
    // The randIndex variable removes a random item from the array using the splcie and random methods so that item is not selected twice while creating a random array.
    // The item is then placed in an array by itself.  ex: ['2'].  The 1st argument is the index placement, which is random.  The 2nd argument, 1, is the deleteCount and 
    // indicates the selected random element is deleted from the newPass array
    // https://stackoverflow.com/questions/36069870/how-to-remove-random-item-from-array-and-then-remove-it-from-array-until-array-i
    var randIndex = newPass.splice(Math.floor(Math.random() * newPass.length), 1);
    // Finally we push the value from randIndex into the randPass array.  Since randIndex is an array with a single element, we muct call that element at index position 0 to get the string value with randItem.
    randPass.push(randIndex[0]);
    
  }

  return randPass.join('');

  
  // console.log(randPass)
 
  
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