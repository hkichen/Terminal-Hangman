var Letter = function(secreLetter){

	this.current = "_"
	this.secreLetter = secreLetter;
	
	this.showsLetter = false;
	this.letterMatch = function(guessedLetter){
		if(this.secreLetter == guessedLetter){
			this.current = this.secreLetter; 
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