var inquirer = require("inquirer");
var Word = require("./word.js");
var selectWord = require("./selectWord.js");
var Letter = require("./letter.js");

var word = selectWord();
//var chosenWord = word.chosenWord;
var letters = [];
for (var i=0; i < chosenWord.length; i++) {
    letters.push(new Letter(chosenWord.charAt(i)));
}

var guessesRemaining = 10;
function makeGuess() {
    displayWord();
    inquirer.prompt({
        name: "letter",
        message: "Enter a letter"
    }).then(function(answer) {
        if (word.matchLetters(answer.secretletter, letters) === true) {
            console.log("It's a match!");
        }else if(guessesRemaining > 0) {
            guessesRemaining--;
            console.log("Sorry, try again. You have " + guessesRemaining + "guesses left.");
        }else {
            console.log("Oh, no! You've run out of guesses. Game over :-(")
            inquirer.prompt({
                type: "list",
                name: "restart",
                message: "Would you like to play again?",
                choices: ["Yes", "No"],
            }).then(function(answer) {
                if(answer.choices === "Yes") {
                    makeGuess();
                }else {
                    console.log("Ok, maybe next time! Bye!! :-)");
                }
            })
        }

        if (word.checkWordCompletion(letters) === false){
            if (guessesRemaining > 0){
                makeGuess();
            }
        }else {
            displayWord();
            console.log("Congrats! You won!");
        }
    })
}

function displayWord() {
    var displayedWord = "";
    for (var i = 0; i < letters.length; i++) {
        displayedWord += letters[i].displayLetter();
        displayedWord += "";
    }
    console.log(displayedWord);
}



