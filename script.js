// Assignment code here
alert("Click Generate Password To Generate Password")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Lower case prompt
var lowerCasePrompts = function lowerCasePromptsFunction() {

        var lowerCasePromptAnswer = window.confirm("do you want lowercase letters?");
        if (lowerCasePromptAnswer === true) {
            alert("Using lower case letters in password");

        } else {
            alert("Not using lower case letters");

        }
    }
    // Upper case prompt

var upperCasePrompts = function upperCasePromptsFunction() {
        var upperCasePromptsAnswer = window.confirm("do you want uppercase letters?");
        if (upperCasePromptsAnswer === true) {
            alert("Using upper case letters in password");


        } else {
            alert("Not using upper case letters");
        }
    }
    // Numerical Prompts
var numericalPrompts = function numericalPromptsFunction() {
        var numericalPromptsAnswer = window.confirm("do you want numerical values?");
        if (numericalPromptsAnswer === true) {
            alert("Using numbers in password");
        } else {
            alert("Not using numbers in password");

        }
    }
    // fixed funcion special chars function expression
var specialCharsPrompts = function specialCharsPromptsFunction() {
    var specialCharsPromptsAnswer = window.confirm("do you want Special Characters?");
    if (specialCharsPromptsAnswer === true) {
        alert("Using special chars in password");
    } else {
        alert("Not using special chars in password");

    }
}
var specialCharsPrompts = function specialCharsPromptsFunction() {
    var specialCharsPromptsAnswer = window.confirm("do you want Special Characters?");
    if (specialCharsPromptsAnswer === true) {
        alert("Using special chars in password");
    } else {
        alert("Not using special chars in password");

        <<
        <<
        <<
        <
        HEAD
    }
}

===
===
= >>>
>>>
>
develop
//Create Array with Special Characters
var specialCharactersArray = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "\\", "-", "=", "[", "]", "{", "}", ";", "'", ":",
    '/', "\U0022", " | ", " /U0027 ", "/U0027",
    ", ", "<", ">", "?", "~", "]", ";"
];

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Write password to the #password input
function writePassword() {

    // Enter the program
    var firstPrompt = window.confirm("We will generate a password, is this ok?");
    // If you want to start this program
    if (firstPrompt === true) {
        var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
        if (lengthOfPasswordPrompt >= 8 && lengthOfPasswordPrompt <= 128) {
            alert("Password will be " + lengthOfPasswordPrompt + " characters long");
            // Lower case letters prompt
            lowerCasePrompts();
        } else {
            while (lengthOfPasswordPrompt < 8 || lengthOfPasswordPrompt > 128 || isNaN(lengthOfPasswordPrompt) || lengthOfPasswordPrompt === "") {
                alert("Not A Number Please enter a Number or the password is out of the range 8-128");
                var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
            }
            alert("Ok Great Moving On...");
            // Lower Case Prompt
            lowerCasePrompts();

        }
    }
    //If you dont want to start the program//
    else {
        alert("exiting");
    }


    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);