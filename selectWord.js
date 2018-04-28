var Word = require("./word.js");

module.exports = {
  selectWord : function() {
    var choices = ["antelope", "gazelle", "ibis", "newt", "salamander", "toad", "leopard", "catfish", "platypus", "bison", "cormorant", "hyena", "mongoose"];
    var rando = Math.floor(Math.random() * 5);
    var word = new Word(choices[rando]);
    return word;
  }
};

//made a new module export to contain all possible words to choose from
//turn chosen word into a new word variable