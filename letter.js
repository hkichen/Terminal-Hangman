var Letter = function(secretletter){

	this.secretLetter = secretletter;
    this.revealLetter = false;
    
	this.guessedLetter = function(guess){
		if(this.secretLetter === guess){
			return console.log(this.secretletter); 
			return this.revealLetter = true;
		}else {
			return this.revealLetter = false;
            console.log("_");
        }
    }
    
	this.letterShows = function(){
		return this.current;
	}
};

//tests
var newLetter = new Letter("x");
newLetter.guessedLetter("T");



//export this baby
module.exports = Letter;