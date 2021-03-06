//constructor function for the Letter object
function Letter(letter) {
	this.letter = letter;
	this.shown = "_";
	
	//returns the character to be printed to the console
	this.displayLetter = function() {
		return this.shown;
	}
	//changes temp character to the actual letter
	this.changeShown = function() {
		this.shown = letter;
	}
}

module.exports = Letter;