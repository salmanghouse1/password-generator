// Assignment code here
//Create Array with Special Characters
var specialCharactersArray = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "\\", "-", "=", "[", "]", "{", "}", ";", "'", ":",
    '/', "\U0022", " | ", " /U0027 ", "/U0027",
    ", ", "<", ">", "?", "~", "]", ";"
];

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var counter = 0;

var answers = [];

alert("Click Generate Password To Generate Password");


function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Determine password

var determinePassword = function determinePasswordFunction(lengthOfPasswordPrompt, lowerCasePromptAnswer, upperCasePromptsAnswer, numericalPromptsAnswer, specialCharsPromptsAnswer) {

    console.log(lowerCasePromptAnswer, upperCasePromptsAnswer);

    numberOfTrues = answers.length();

    numberOfEachCharacterType = lengthOfPasswordPrompt / numberOfTrues;

    if (lowerCasePromptAnswer === "true") {
        counter++
        //&&upperCasePromptsAnswer === "false" && specialCharsPromptsAnswer === "false" && numericalPromptsAnswer === "false") {
        for (i = 0; i <= numberOfEachCharacterType; i++) {
            var y = randomNumber(0, lowerCaseArray.length + 1);
            passwordVar += lowerCaseArray[y];
        }
    }
    if (upperCasePromptsAnswer === "true") {
        //&& lowerCasePromptAnswer === "false" && specialCharsPromptsAnswer === "false" && numericalPromptsAnswer === "false") {
        counter++
        for (i = 0; i <= numberOfEachCharacterType; i++) {
            var y = randomNumber(0, upperCaseArray.length + 1);
            passwordVar += upperCaseArray[y];
            return alert(passwordVar);
        }
    }
    if (specialCharsPromptsAnswer === "true") {
        counter++
        for (i = 0; i <= numberOfEachCharacterType; i++) {
            var y = randomNumber(0, specialCharactersArray.length + 1);
            passwordVar += specialCaseArray[y];
        }

    }
    if (numericalPromptsAnswer === "true") {
        counter++
        for (i = 0; i <= numberOfEachCharacterType; i++) {
            var y = randomNumber(0, numericalPromptsAnswer.length + 1);
            passwordVar += numbersArray[y];

        }

    }
}

// Lower case prompt
var lowerCasePrompts = function lowerCasePromptsFunction() {

        var lowerCasePromptAnswer = window.confirm("do you want lowercase letters?");
        if (lowerCasePromptAnswer === true) {
            alert("Using lower case letters in password");


            var lowerCasePromptAnswer = lowerCasePromptAnswer.toString();
            answers.push(lowerCasePromptAnswer);
            return lowerCasePromptAnswer;

        } else {
            alert("Not using lower case letters");
            var lowerCasePromptAnswer = lowerCasePromptAnswer.toString();
            return lowerCasePromptAnswer;

        }
    }
    // Upper case prompt

var upperCasePrompts = function upperCasePromptsFunction() {
        var upperCasePromptsAnswer = window.confirm("do you want uppercase letters?");
        if (upperCasePromptsAnswer === true) {
            alert("Using upper case letters in password");
            upperCasePromptsAnswer = upperCasePromptsAnswer.toString();
            answers.push(upperCasePromptsAnswer);
            return upperCasePromptsAnswer;

        } else {
            alert("Not using upper case letters");
            upperCasePromptsAnswer = upperCasePromptsAnswer.toString();
            return upperCasePromptsAnswer;

        }
    }
    // Numerical Prompts
var numericalPrompts = function numericalPromptsFunction() {
        var numericalPromptsAnswer = window.confirm("do you want numerical values?");
        if (numericalPromptsAnswer === true) {
            alert("Using numbers in password");
            numericalPromptsAnswer = numericalPromptsAnswer.toString();
            answers.push(numericalPromptsAnswer);
            return numericalPromptsAnswer;

        } else {
            alert("Not using numbers in password");
            numericalPromptsAnswer = numericalPromptsAnswer.toString();
            return numericalPromptsAnswer;

        }
    }
    // fixed funcion special chars function expression
var specialCharsPrompts = function specialCharsPromptsFunction() {
    var specialCharsPromptsAnswer = window.confirm("do you want Special Characters?");
    if (specialCharsPromptsAnswer === true) {
        alert("Using special chars in password");
        specialCharsPromptsAnswer = specialCharsPromptsAnswer.toString();
        answers.push(specialCharsPromptsAnswer);
        return specialCharsPromptsAnswer;

    } else {
        alert("Not using special chars in password");
        specialCharsPromptsAnswer = specialCharsPromptsAnswer.toString();
        return specialCharsPromptsAnswer;

    }
}




// Write password to the #password input
function writePassword() {
    let passwordVar = "";
    answers = [];
    // Enter the program
    var firstPrompt = window.confirm("We will generate a password, is this ok?");
    // If you want to start this program
    if (firstPrompt === true) {
        var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
        if (lengthOfPasswordPrompt >= 8 && lengthOfPasswordPrompt <= 128) {
            alert("Password will be " + lengthOfPasswordPrompt + " characters long");
            // Lower case letters prompt
            lowerCasePrompts();
            alert(answers);
            upperCasePrompts();
            numericalPrompts();
            specialCharsPrompts();
            determinePassword(lengthOfPasswordPrompt, lowerCasePromptsAnswer, upperCasePromptsAnswer, numericalPromptsAnswer, specialCharsPromptsAnswer);
            // determinePassword(lengthOfPasswordPrompt, lowerCasePromptAnswer, upperCasePromptsAnswer);

        } else {
            while (lengthOfPasswordPrompt < 8 || lengthOfPasswordPrompt > 128 || isNaN(lengthOfPasswordPrompt) || lengthOfPasswordPrompt === "") {
                alert("Not A Number Please enter a Number or the password is out of the range 8-128");
                var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
            }
            alert("Ok Great Moving On...");
            // Lower Case Prompt
            lowerCasePrompts();
            upperCasePrompts();
            numericalPrompts();
            specialCharsPrompts();
            determinePassword(lengthOfPasswordPrompt, lowerCasePromptsAnswer, upperCasePromptsAnswer, numericalPromptsAnswer, specialCharsPromptsAnswer);

            //Solution: possibly return the length of password prompt after lowerCase Function
            // upperCasePrompts();
            // determinePassword(lengthOfPasswordPrompt, lowerCasePromptAnswer, upperCasePromptsAnswer);
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