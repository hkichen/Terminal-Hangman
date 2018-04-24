var Word = require("./word.js")
///make array of words to choose from
//choose word and turn it into the new word

var selectWord = function(){
    var choices = ["antelope", "gazelle", "ibis", "newt", "salamander", "toad", "leopard", "catfish", "platypus", "bison", "cormorant", "hyena", "mongoose"];

    var randomWord = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomWord);

    var chosenWord = new Word(randomWord);
}

//selectWord();


module.exports = selectWord;
