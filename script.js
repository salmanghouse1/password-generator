// Assignment code here
//Create Array with Special Characters


//



// promptsAnswers are not returning

var specialCharactersArray = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "\\", "-", "=", "[", "]", "{", "}", ";", "'", ":",
    '/', '"', "|", "", "/",
    ", ", "<", ">", "?", "~", "]", ";"
];

var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var counter = 0;

var answers = [];

var lowerCasePromptsAnswer = "";

var upperCasePromptsAnswer = "";

var specialCharsPromptsAnswer = "";

var numericalPromptsAnswer = "";

var passwordVar = [];
var lastChar = "";
alert("Click Generate Password To Generate Password");


function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Determine password

var determinePassword = function determinePasswordFunction(lengthOfPasswordPrompt) {

    // 
    let numberOfTrues = answers.filter(value => value === "true");
    let numberOfEachCharacterType = lengthOfPasswordPrompt / numberOfTrues.length;
    let passwordVar = "";


    if (answers[0] === "true") {

        for (i = 0; i < 2; i++) {
            passwordVar += lowerCaseArray[randomNumber(0, 25)];
            console.log(i);
        }

    }
    if (answers[1] === "true") {

        for (i = 0; i < 2; i++) {
            passwordVar += upperCaseArray[randomNumber(0, 25)];

        }

    }
    if (answers[2] === "true") {
        for (i = 0; i < 2; i++) {
            passwordVar += numbersArray[randomNumber(0, 9)];

        }

    }

    if (answers[3] === "true") {

        for (i = 0; i < 2; i++) {
            passwordVar += specialCharactersArray[randomNumber(0, 6)];

        }


    }

    if (answers[0] === "true") {


        while (passwordVar.length < lengthOfPasswordPrompt) {
            alert("lower character added to even it out");
            passwordVar += lowerCaseArray[randomNumber(0, 9)];

        }
    } else if (answers[1] === "true") {

        while (passwordVar.length < lengthOfPasswordPrompt) {
            alert("upper character added to even it out");
            passwordVar += upperCaseArray[randomNumber(0, 9)];

        }

    } else if (answers[2] === "true") {
        while (passwordVar.length < lengthOfPasswordPrompt) {
            alert("number character added to even it out");
            passwordVar += numbersArray[randomNumber(0, 9)];

        }


    } else if (answers[3] === "true") {
        while (passwordVar.length < lengthOfPasswordPrompt) {
            alert("special character added to even it out");
            passwordVar += specialCharactersArray[randomNumber(0, 9)];

        }


    }
    while (passwordVar.length > lengthOfPasswordPrompt) {
        alert("last character removed to even it out");
        passwordVar = passwordVar.slice(0, -1);

    }



    console.log("a-pass = " + passwordVar);
    return passwordVar;
}













// Lower case prompt
var lowerCasePrompts = function lowerCasePromptsFunction() {

        var lowerCasePromptsAnswer = window.confirm("do you want lowercase letters?");
        if (lowerCasePromptsAnswer === true) {
            alert("Using lower case letters in password");
            answers.push(lowerCasePromptsAnswer.toString());

        } else {
            alert("Not using lower case letters");
            answers.push(lowerCasePromptsAnswer.toString());

        }
    }
    // Upper case prompt

var upperCasePrompts = function upperCasePromptsFunction() {
        var upperCasePromptsAnswer = window.confirm("do you want uppercase letters?");
        if (upperCasePromptsAnswer === true) {
            alert("Using upper case letters in password");
            answers.push(upperCasePromptsAnswer.toString());

        } else {
            alert("Not using upper case letters");
            upperCasePromptsAnswer = upperCasePromptsAnswer.toString();
            answers.push(upperCasePromptsAnswer);

        }
    }
    // Numerical Prompts
var numericalPrompts = function numericalPromptsFunction() {
        var numericalPromptsAnswer = window.confirm("do you want numerical values?");
        if (numericalPromptsAnswer === true) {
            alert("Using numbers in password");
            answers.push(numericalPromptsAnswer.toString());

        } else {
            alert("Not using numbers in password");
            answers.push(numericalPromptsAnswer.toString());

        }
    }
    // fixed funcion special chars function expression
var specialCharsPrompts = function specialCharsPromptsFunction() {
    var specialCharsPromptsAnswer = window.confirm("do you want Special Characters?");
    if (specialCharsPromptsAnswer === true) {
        alert("Using special chars in password");
        answers.push(specialCharsPromptsAnswer.toString());

    } else {
        alert("Not using special chars in password");
        answers.push(specialCharsPromptsAnswer.toString());

    }
}




// Write password to the #password input
var writePassword = function writePasswordFunction() {

    answers = [];
    // Enter the program
    var firstPrompt = window.confirm("We will generate a password, is this ok?");
    // If you want to start this program
    if (firstPrompt === true) {
        var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
        let password = '';
        if (lengthOfPasswordPrompt >= 8 && lengthOfPasswordPrompt <= 128) {
            alert("Password will be " + lengthOfPasswordPrompt + " characters long");
            // Lower case letters prompt
            lowerCasePrompts();
            upperCasePrompts();
            numericalPrompts();
            specialCharsPrompts();

            if (answers.every(val => val === "false")) {
                console.log("a")
                writePassword();
            } else {
                password = determinePassword(lengthOfPasswordPrompt);
                console.log("Password is" + password);
                var passwordText = document.querySelector("#password");

                passwordText.value = password;
            }
        } else {
            while (lengthOfPasswordPrompt < 8 || lengthOfPasswordPrompt > 128 || isNaN(lengthOfPasswordPrompt) || lengthOfPasswordPrompt === "") {
                alert("Not A Number Please enter a Number or the password is out of the range 8-128");
                var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
            }
            alert("Ok Great Moving On...");
            lowerCasePrompts();
            upperCasePrompts();
            numericalPrompts();
            specialCharsPrompts();
            if (answers.every(val => val === "false")) {
                writePassword();
            } else {
                password = determinePassword(lengthOfPasswordPrompt);
                console.log("Password is" + password);
                var passwordText = document.querySelector("#password");
                passwordText.value = password;
            }

        }



    } else if (firstPrompt === false) {
        //If you dont want to start the program//

        alert("Exiting");
    }
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);