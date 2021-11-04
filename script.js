// Assignment code here
alert("Click Generate Password To Generate Password")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var prompts = function promptsFunction() {

        var lowerCasePrompt = window.confirm("do you want lowercase letters?");
        if (lowerCasePrompt === true) {
            alert("Using lower case letters in password");
            var lowerCaseStatus = true;

        } else {
            alert("Not using lower case letters");
            lowerCaseStatus = false;



        }

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
                    prompts();
                } else {
                    while (lengthOfPasswordPrompt < 8 || lengthOfPasswordPrompt > 128 || isNaN(lengthOfPasswordPrompt) || lengthOfPasswordPrompt === "") {
                        alert("Not A Number Please enter a Number or the password is out of the range 8-128");
                        var lengthOfPasswordPrompt = window.prompt("What length do you want the password to be 8-128 chars");
                    }
                    alert("Ok Great Moving On...");
                    // Lower Case Prompt
                    prompts();

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