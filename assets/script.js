// variables for the console password test on line 265-317
// var cuppersFound = false;
// var clowersFound = false;
// var cnumberFound = false;
// var cspecialCharFound = false;

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
    console.log("Uppercase is " + confirmUpperCase);
    console.log("Lowercase is " + confirmLowerCase);
    console.log("Number is " + confirmNumber);
    console.log("Special Character is " + confirmSpecialChar);
    // passChars is an object that includes all of the possible character types
    var passChars = {
      // used a ? conditional branch for each property based on if the above confirm functions were true or false
      uppers: confirmUpperCase ? "QWERTYUIOPASDFGHJKLZXCVBNM" : "",
      lowers: confirmLowerCase ? "qwertyuiopasdfghjklzxcvbnm" : "",
      numbers: confirmNumber ? "1234567890" : "",
      specials: confirmSpecialChar ? "!@#$%^&*(){}[]<>,." : "",
    };
    console.log(passChars);
    // turned the passChars object into an array
    var passArr = Object.values(passChars);
    console.log(passArr);
    // turned the passArr into a string
    var passString = passArr.join("");
    console.log(passString);
  
    // Credit to @blender https://stackoverflow.com/a/12635919/14011353
    //   this is a function to randomly pick a character from a given string
    String.prototype.pick = function (min, max) {
      var n,
        chars = "";
  
      if (typeof max === "undefined") {
        n = min;
      } else {
        n = min + Math.floor(Math.random() * (max - min));
      }
  
      for (var i = 0; i < n; i++) {
        chars += this.charAt(Math.floor(Math.random() * this.length));
      }
  
      return chars;
    };
  
    // Credit to @Christoph: http://stackoverflow.com/a/962890/464744
    // this is a function to randomly shuffle a given string to make it more secure. I am using it to force my code to select required characteristics then shuffle it so it can still be more random.
    String.prototype.shuffle = function () {
      var array = this.split("");
      var tmp,
        current,
        top = array.length;
  
      if (top)
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
  
      return array.join("");
    };
  
    //   if all character types are requested
    if (
      confirmUpperCase &&
      confirmLowerCase &&
      confirmNumber &&
      confirmSpecialChar
    ) {
      var newPassword =
        passChars.uppers.pick(1) +
        passChars.lowers.pick(1) +
        passChars.numbers.pick(1) +
        passChars.specials.pick(1);
      for (let i = 0; i < confirmPasslength - 4; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // code for three character types requested
      // code for if special characters are not requested
    } else if (confirmUpperCase && confirmLowerCase && confirmNumber) {
      var newPassword =
        passChars.uppers.pick(1) +
        passChars.lowers.pick(1) +
        passChars.numbers.pick(1);
      for (let i = 0; i < confirmPasslength - 3; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // code for if numbers are not requested
    } else if (confirmUpperCase && confirmLowerCase && confirmSpecialChar) {
      var newPassword =
        passChars.uppers.pick(1) +
        passChars.lowers.pick(1) +
        passChars.specials.pick(1);
      for (let i = 0; i < confirmPasslength - 3; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // code if lowercase is not requested
    } else if (confirmUpperCase && confirmSpecialChar && confirmNumber) {
      var newPassword =
        passChars.uppers.pick(1) +
        passChars.specials.pick(1) +
        passChars.numbers.pick(1);
      for (let i = 0; i < confirmPasslength - 3; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // code if uppercase is not requested
    } else if (confirmUpperCase && confirmLowerCase && confirmNumber) {
      var newPassword =
        passChars.specials.pick(1) +
        passChars.lowers.pick(1) +
        passChars.numbers.pick(1);
      for (let i = 0; i < confirmPasslength - 3; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // code for two character types requested
      // if numbers and special characters are not requested
    } else if (
      confirmUpperCase &&
      confirmLowerCase
    ) {
      var newPassword =
        passChars.uppers.pick(1) +
        passChars.lowers.pick(1);
      for (let i = 0; i < confirmPasslength - 2; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // if lowercase and special characters are not requested
    } else if (
      confirmUpperCase &&
      confirmNumber
    ) {
      var newPassword =
        passChars.uppers.pick(1) +
        passChars.numbers.pick(1);
      for (let i = 0; i < confirmPasslength - 2; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // if uppercase and special characters are not requested
    } else if (
      confirmLowerCase &&
      confirmNumber
    ) {
      var newPassword =
        passChars.lowers.pick(1) +
        passChars.numbers.pick(1);
      for (let i = 0; i < confirmPasslength - 2; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // if lowercase and numbers are not requested
    } else if (
      confirmSpecialChar &&
      confirmUpperCase
    ) {
      var newPassword =
        passChars.specials.pick(1) +
        passChars.uppers.pick(1);
      for (let i = 0; i < confirmPasslength - 2; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // if uppercase and numbers are not requested
    } else if (
      confirmSpecialChar &&
      confirmLowerCase
    ) {
      var newPassword =
        passChars.specials.pick(1) +
        passChars.lowers.pick(1);
      for (let i = 0; i < confirmPasslength - 2; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
  // if uppercase and lowercase are not requested
    } else if (
      confirmSpecialChar &&
      confirmNumber
    ) {
      var newPassword =
        passChars.specials.pick(1) +
        passChars.numbers.pick(1);
      for (let i = 0; i < confirmPasslength - 2; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length)
        );
      }
      // code for if only one character type requested
      // if uppercase requested
    } else if (confirmUpperCase || confirmLowerCase || confirmNumber || confirmSpecialChar) {
        var newPassword = "";
      for (let i = 0; i < confirmPasslength; i++) {
        newPassword += passString.charAt(
          Math.floor(Math.random() * passString.length));
      }
    }
  
  
    //  console test to confirm if password contains the correct characters requested
  //   if (confirmUpperCase) {
  //     const cuppers = /[A-Z]/g;
  //     var cuppersFound = newPassword.match(cuppers);
  //     if (cuppersFound !== null) {
  //       cuppersFound = true;
  //     } else {
  //       cuppersFound = false;
  //     }
  //     console.log("cuppersFound is " + cuppersFound);
  //   } else {
  //     cuppersFound = true;
  //     console.log("cuppersFound is " + cuppersFound);
  //   }
  //   if (confirmLowerCase) {
  //     const clowers = /[a-z]/g;
  //     var clowersFound = newPassword.match(clowers);
  //     if (clowersFound !== null) {
  //       clowersFound = true;
  //     } else {
  //       clowersFound = false;
  //     }
  //     console.log("clowersFound is " + clowersFound);
  //   } else {
  //     clowersFound = true;
  //     console.log("clowersFound is " + clowersFound);
  //   }
  //   if (confirmNumber) {
  //     const cnumber = /[0-9]/g;
  //     var cnumberFound = newPassword.match(cnumber);
  //     if (cnumberFound !== null) {
  //       cnumberFound = true;
  //     } else {
  //       cnumberFound = false;
  //     }
  //     console.log("cnumberFound is " + cnumberFound);
  //   } else {
  //     cnumberFound = true;
  //     console.log("cnumberFound is " + cnumberFound);
  //   }
  //   if (confirmSpecialChar) {
  //     const cspecialChar = /[!@#$%^&*(){}[\]<>,.]/g;
  //     var cspecialCharFound = newPassword.match(cspecialChar);
  //     if (cspecialCharFound !== null) {
  //       cspecialCharFound = true;
  //     } else {
  //       cspecialCharFound = false;
  //     }
  //     console.log("cspecialCharFound is " + cspecialCharFound);
  //   } else {
  //     cspecialCharFound = true;
  //     console.log("cspecialCharFound is " + cspecialCharFound);
  //   }
  
  // returns the password to be used in the writePassword function and uses the shuffle method to randomize the character order for the function
    return newPassword.shuffle();
  }

  var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);