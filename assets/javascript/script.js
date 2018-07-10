
        // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var userWins = 0;
        var userLosses = 0;
        var intGuessesLeft = 9;
        var userGuess = "";
        var strGuesses = "";
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {
            if (intGuessesLeft > 1) {
                // Determines which key was pressed.
                userGuess = event.key;
                userGuess = userGuess.toLowerCase();

                // Alerts the key the user pressed (userGuess).
                //console.log("User guess: " + userGuess);

                // Alerts the Computer's guess.
                console.log("Computer guess: " + computerGuess);

                //Console log the intGuessesLeft variable
                console.log("intGuessesLeft:  " + intGuessesLeft);
                //console.log("strGuesses:  " + strGuesses);
                
                if (userGuess === computerGuess) {
                    userWins += 1;
                    document.getElementById("win").innerHTML = userWins;
                    document.getElementById("loss").innerHTML = userLosses;
                    intGuessesLeft = 9;
                    document.getElementById("guess").innerHTML = intGuessesLeft;
                    //Clear the strGuesses variable
                    strGuesses = "";
                    document.getElementById("remain").innerHTML = strGuesses;
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                }
                else if (userGuess !== computerGuess) {
                    document.getElementById("win").innerHTML = userWins;
                    document.getElementById("loss").innerHTML = userLosses;
                    intGuessesLeft -= 1;
                    document.getElementById("guess").innerHTML = intGuessesLeft;
                    strGuesses = strGuesses + userGuess + ", ";
                    document.getElementById("remain").innerHTML = strGuesses;
                }
            }
            else {
                // Determines which key was pressed.
                userGuess = event.key;
                userGuess = userGuess.toLowerCase();
                //Determine a final win or loss and reset the game
                if (userGuess === computerGuess) {
                    //User wins on the last attempt
                    userWins += 1;
                    document.getElementById("win").innerHTML = userWins;
                    document.getElementById("loss").innerHTML = userLosses;
                    intGuessesLeft = 9;
                    document.getElementById("guess").innerHTML = intGuessesLeft;
                    strGuesses = "";
                    document.getElementById("remain").innerHTML = strGuesses;
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                }
                else if (userGuess !== computerGuess) {
                    //User loses on the last attempt
                    document.getElementById("win").innerHTML = userWins;
                    userLosses += 1;
                    document.getElementById("loss").innerHTML = userLosses;
                    intGuessesLeft = 9;
                    document.getElementById("guess").innerHTML = intGuessesLeft;
                    strGuesses = "";
                    document.getElementById("remain").innerHTML = strGuesses;
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                }
              }
            };

