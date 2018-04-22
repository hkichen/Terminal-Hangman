function Letter(character, show) {
    this.character = character;
    this.show = false;

    this.characterToShow = function() {
        if (this.show === true){
            return console.log(this.character);
        }else {
            return console.log("-");
        }
    }
};

module.exports = Letter;

//this constructor takes in a letter, and if it is true, will display leter, if false, will display a dash

var guess = new Letter("m", true);
guess.characterToShow();