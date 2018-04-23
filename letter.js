//a constructor to display letters depending on matching guess to secret letters

var Letter = function(secretLetters){
	this.display = "_"
	this.secretLetters = secretLetters;
	this.showsLetter = false;

	this.correctLetterCheck = function(guess){
		if(this.secretLetters === guess){
			this.current = this.secretLetters; 
			return true;
		}
			return false;
	}

	this.letterDisplay = function(){
		return this.display;
	}
};

//export this baby
module.exports = Letter;