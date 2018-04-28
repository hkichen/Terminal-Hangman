var inquirer = require("inquirer");
var game = require("./selectWord.js");
var Letter = require("./letter.js");

var letters = [];
var word = game.selectWord();
var selectedWord = word.word;
var guessesRemaining = 10;

for (var i=0; i<selectedWord.length; i++) {
    letters.push(new Letter(selectedWord.charAt(i)));
}
 
makeGuess();

function makeGuess() {
    displayWord();
    inquirer.prompt(
        {
            name: "letter", 
            message: "Please enter a letter:"
        }
    ).then(function(answer) {
        if (word.checkLetter(answer.letter, letters) == true) {
            console.log("\nNice!");
        }else {
            guessesRemaining--;
            if (guessesRemaining > 0) {
                console.log("\nNope! You have " + guessesRemaining + " guesses left.");
            }else {
                console.log("\nOh, no! You're out of guesses. Game over!");
            }
        }
        
        if (word.checkIfSolved(letters) == false) {
            if (guessesRemaining > 0) {
                makeGuess();
            }
        }else {
            displayWord();
            console.log("\nAyyy! You win!");
            inquirer.prompt(
                {
                    name: "replay",
                    message: "Do you want to play again? (answer yes or no)",
                }
            ).then(function(answer) {
                if (answer === "yes") {
                    letters = [];
                    word = game.selectWord();
                    selectedWord = word.word;
                    guessesRemaining = 10;
                    for (var i=0; i<selectedWord.length; i++) {
                        letters.push(new Letter(selectedWord.charAt(i)));
                    }
                    makeGuess();
                }
                if (answer === "no") {
                    return console.log("Ok, thanks for playing! Bye!:-)")
                }
            })
        }
    });
}

function displayWord() {
    var displayedWord = "";
    for (var i=0; i < letters.length; i++) {
        displayedWord += letters[i].displayLetter();
        displayedWord += " ";
    }
    console.log(displayedWord);
}