var inquirer = require("inquirer");
var SelectWord = require("./selectWord.js");
var Letter = require("./letter.js");

var word = SelectWord.selectWord();
var selectedWord = word.word;
var letters = [];
for (var i=0; i<selectedWord.length; i++) {
  letters.push(new Letter(selectedWord.charAt(i)));
}
var guessesLeft = 5;
makeGuess();


//To display the word...
function displayWord() {
    var displayedWord = "";
    for (var i = 0; i < letters.length; i++) {
        displayedWord += letters[i].displayLetter();
        displayedWord += "";
    }
    console.log(displayedWord);
}

//console.log(selectedWord);