var Letter = require('./letter');

var Word = function(word){
    this.value = word;
    this.letterArr = [];
    for(var i=0; i<this.value.length; i++){
        var letter = new Letter(this.value[i]);
        this.letterArr.push(letter)
    }

    this.show = function(){
        var showPlace = ""
        for(var i=0; i<this.letterArr.length; i++){
            showPlace += `${this.letterArr[i].show()} `;
        }
        return showPlace
    }
    this.check = function(guess){
        for(var i=0; i<this.letterArr.length; i++){
           this.letterArr[i].check(guess);
        }
    }
}

module.exports = Word;

// var saba = new Word("minamo");
// console.log(saba.show());
// saba.check("i");
// saba.check("m")
// saba.check("o")
// console.log(saba.show());