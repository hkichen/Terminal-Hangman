//a constructor to display letters depending on matching guess to secret letters

var Letter = function(secretLetters){
	this.display = "_"
	this.secretLetters = secretLetters;
	
	this.displayLetter = function() {
		return this.display;
	}

	this.changeDisplay = function(){
		this.display = secretLetters;
	}
};

//export this baby
module.exports = Letter;