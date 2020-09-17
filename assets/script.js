///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

function generatePassword() {
  // confirm password length
  var confirmPasslength = prompt(
    "How long of a password do you want (8-120 characters)?"
  );
  // while loop forces user to select between 8-128 characters
  while (
    isNaN(confirmPasslength) ||
    confirmPasslength < 8 ||
    confirmPasslength > 128
  ) {
    // asks question again if user does not know how to follow directions (i.e password length paramaters)!
    confirmPasslength = prompt(
      "Password must be between 8 and 128 characters. How long of a password do you want?"
    );
  }
  // confirmation of types of characters user wants
  var confirmUpperCase = confirm(
    "Press ok if you want uppercase letters in your password?"
  );
  var confirmLowerCase = confirm(
    "Press ok if you want lowercase letters in your password?"
  );
  var confirmNumber = confirm("Press ok if you want numbers in your password?");
  var confirmSpecialChar = confirm(
    "Press ok if you want special characters in your password?"
  );
// while loop forces user to confirm at least one type of character
  while (
    !confirmUpperCase &&
    !confirmLowerCase &&
    !confirmNumber &&
    !confirmSpecialChar
  ) {
    // alerts user that they don't want any characters. smh...
    alert("You must select at least one character type for your password!!!");
    // since user loves the cancel button, this forces user to try again in the hopes that they do not fail at pressing ok
    confirmUpperCase = confirm(
      "Press ok if you want uppercase letters in your password?"
    );
    confirmLowerCase = confirm(
      "Press ok if you want lowercase letters in your password?"
    );
    confirmNumber = confirm("Press ok if you want numbers in your password?");
    confirmSpecialChar = confirm(
      "Press ok if you want special characters in your password?"
    );
  }
  console.log (confirmUpperCase);
  console.log (confirmLowerCase);
  console.log (confirmNumber);
  console.log (confirmSpecialChar);
  // passChars is an object that includes all of the possible character types
  var passChars = {
    // used a ? conditional branch for each property based on if the above confirm functions were true or false
    uppers: (confirmUpperCase) ? "QWERTYUIOPASDFGHJKLZXCVBNM":"",
    lowers: (confirmLowerCase) ? "qwertyuiopasdfghjklzxcvbnm":"",
    numbers: (confirmNumber) ? "1234567890":"",
    specials: (confirmSpecialChar) ? "!@#$%^&*(){}[]<>,.":"",
  }
  console.log(passChars);
  // turned the passChars object into an array
  var passArr = Object.values(passChars);
  console.log(passArr);
  // turned the passArr into a string
  var passString = passArr.join("");
  console.log(passString);
  var newPassword = "";
  for (let i = 0; i < confirmPasslength; i++) {
    newPassword += passString.charAt(Math.floor(Math.random() * passString.length));
  }
  return newPassword;
}

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
