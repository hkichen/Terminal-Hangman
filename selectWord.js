var Word = require("./word.js");

module.exports = {
  //selects a random word from the array of words and returns it as a Word object
  selectWord : function() {
    var words = ["antelope", "gazelle", "ibis", "newt", "salamander", "toad", "leopard", "catfish", "platypus", "bison", "cormorant", "hyena", "mongoose"];
    var num = Math.floor(Math.random() * 5);
    var word = new Word(words[num]);
    return word;
  }
};

