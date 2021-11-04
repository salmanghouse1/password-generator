// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");






// //Create Array with Special Characters
// var specialCharactersArray = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "\\", "-", "=", "[", "]", "{", "}", ";", "'", ":",
//     '/', "\U0022", " | ", " /U0027 ", "/U0027",
//     ", ", "<", ">", "?", "~", "]", ";"
// ];


// // Write password to the #password input
// function writePassword() {

//     // Enter the program
//     var firstPrompt = window.confirm("We will generate a password, is this ok?");

//     if (firstPrompt === true) {
//         var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
//         if (lengthOfPasswordPrompt >= 8 && lengthOfPasswordPrompt <= 128) {
//             alert("Password will be " + lengthOfPasswordPrompt + " characters long");
//         } else {
//             while (lengthOfPasswordPrompt < 8 || lengthOfPasswordPrompt > 128 || isNaN(lengthOfPasswordPrompt) || lengthOfPasswordPrompt === "") {
//                 alert("Not A Number Please enter a Number or the password is out of the range 8-128");
//                 var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
//             }
//             alert("Ok Great Moving On...");

//         }
//     } else {
//         alert("exiting");
//     }


//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);