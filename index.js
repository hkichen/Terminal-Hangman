var inquirer = require("inquirer");
var game = require("./selectWord.js");
var Letter = require("./letter.js");

var word = game.selectWord();
var selectedWord = word.word;
var letters = [];
for (var i=0; i<selectedWord.length; i++) {
  letters.push(new Letter(selectedWord.charAt(i)));
}
var guessesRemaining = 10;
makeGuess();

//recursive function that gets called as long as the word has not been guessed and there are guesses left
function makeGuess() {
    displayWord();
    inquirer.prompt(
        {
            name: "letter", 
            message: "Please enter a letter:"
        }
    ).then(function(answer) {
        if (word.checkLetter(answer.letter, letters) == true) {
            console.log("Nice!");
        }else {
            guessesRemaining--;
            if (guessesRemaining > 0) {
                console.log("Nope! You have " + guessesRemaining + " guesses left.");
            }else {
                console.log("Oh, no! You're out of guesses. Game over!");
            }
        }
        
        if (word.checkIfSolved(letters) == false) {
            if (guessesRemaining > 0) {
            makeGuess();
            }
        }else {
            displayWord();
            console.log("Ayyy! You win!");
            inquirer.prompt(
                {
                    name: "replay",
                    message: "Do you want to play again? (answer yes or no)",
                }
            ).then(function(answer) {
                if (answer === "yes") {
                    makeGuess();
                }
                if (answer === "no") {
                    console.log("Ok, thanks for playing! Bye!:-)")
                }
            })
        }
    });
}

function displayWord() {
    var displayedWord = "";
    for (var i=0; i<letters.length; i++) {
        displayedWord += letters[i].displayLetter();
        displayedWord += " ";
    }
    console.log(displayedWord);
}