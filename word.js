//require letters
var Letter = require('./letter.js');

//constructor to get letters, match letters
var Word = function(word){
	this.word = word;

	//check if letters match
	this.matchLetters = function(secretLetter, letters) {
		var letterMatched = false;
		for (var i = 0; i < this.word.length; i++) {
			if(this.word.charAt(i).toLowerCase() === secretletter.toLowerCase()) {
				letterMatched = true;
				letters[i].changeDisplay();
			}
		}
		return letterMatched;
	}
	
	this.checkWordCompletion = function(letters) {
		var completed = true;
		for (var i = 0; i < this,word.length; i++) {
			if (letters[i].display === "_") {
				completed = false;
			}
		}
		return completed; 
	}
}	

//var newWord = new Word("apple");
//console.log(newWord)

module.exports = Word;