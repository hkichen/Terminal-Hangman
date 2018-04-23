var Letter = function(secretLetters){
	this.current = "_"
	this.secretLetters = secretLetters;
	this.showsLetter = false;

	this.correctLetterCheck = function(guess){
		if(this.secretLetters == guess){
			this.current = this.secretLetters; 
			return true;
		}
			return false;
	}

	this.letterDisplay = function(){
		return this.current;
	}
};

//export this baby
module.exports = Letter;