function generatePassword() {
  // confirm password length
  var confirmPasslength = prompt(
    "How long of a password do you want (8-128 characters)?"
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
  //  I modified this function and removed the if statement and made it only min because I did not need the max-min portion and only
  String.prototype.pick = function (min /*, max*/) {
    var n,
      chars = "";

    // if (typeof max === "undefined") {
    n = min;
    // } else {
    //   n = min + Math.floor(Math.random() * (max - min));
    // }

    for (var i = 0; i < n; i++) {
      chars += this.charAt(Math.floor(Math.random() * this.length));
    }

    return chars;
  };

  // Credit to @Christoph: http://stackoverflow.com/a/962890/464744
  // this is a function to randomly shuffle a given string to make it more secure. Since I am requiring my code to contain specific characters using the pick function this code takes my password string and converts it into an array and then randomly shuffles the characters by selecting the random characters and forcing them to be equal to the original sequence so that characters aren't lost by the random number generator.
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
// this objects converts the boolean values into numerical values
  var totalsObj = {
    uppersValue: (confirmUpperCase) ? 1:0,
    lowersValue: (confirmLowerCase) ? 1:0,
    numbersValue: (confirmNumber) ? 1:0,
    specialsValue: (confirmSpecialChar) ? 1:0,
  }
  // this is the total of all of the numerical values to be used in the password variable
  var totalsValue = totalsObj.uppersValue + totalsObj.lowersValue + totalsObj.numbersValue + totalsObj.specialsValue;
// this console log confirms the totalsValue variables value it will vary depending on the confirms booleans from above
  // console.log(totalsValue);
// the password will first pick one of each type of character. if the various object values are zero then it will not select them and if their are 1 they will. the fifth part will pick the remaining required based on the requested length minus the values selected.
  var newPassword =
    passChars.uppers.pick(totalsObj.uppersValue) +
    passChars.lowers.pick(totalsObj.lowersValue) +
    passChars.numbers.pick(totalsObj.numbersValue) +
    passChars.specials.pick(totalsObj.specialsValue) +
    passString.pick(confirmPasslength - totalsValue);

  // this shows what the newPassword variable looks like without the shuffle function
    // console.log(newPassword);
  
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

/*
████████╗░█████╗░███╗░░░███╗███╗░░░███╗██╗░░░██╗  
╚══██╔══╝██╔══██╗████╗░████║████╗░████║╚██╗░██╔╝  
░░░██║░░░██║░░██║██╔████╔██║██╔████╔██║░╚████╔╝░  
░░░██║░░░██║░░██║██║╚██╔╝██║██║╚██╔╝██║░░╚██╔╝░░ 
░░░██║░░░╚█████╔╝██║░╚═╝░██║██║░╚═╝░██║░░░██║░░░  
░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝░░░╚═╝░░░  
░██╗░░░░░░░██╗██╗██╗░░░░░██╗░░░░░███████╗███╗░░██╗
░██║░░██╗░░██║██║██║░░░░░██║░░░░░██╔════╝████╗░██║
░╚██╗████╗██╔╝██║██║░░░░░██║░░░░░█████╗░░██╔██╗██║
░░████╔═████║░██║██║░░░░░██║░░░░░██╔══╝░░██║╚████║
░░╚██╔╝░╚██╔╝░██║███████╗███████╗███████╗██║░╚███║
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝╚═╝░░╚══╝
*/
