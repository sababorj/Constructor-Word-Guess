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
        var successGuess = false;
        // check the guess on all the letters of the word
        for(var i=0; i<this.letterArr.length; i++){
        var tempSuccess = this.letterArr[i].check(guess)
        if (tempSuccess) {
            successGuess = tempSuccess
        };
        }
        //feed back to the user about the guess
        if(successGuess){
            console.log("Correct!")
        } else {
            console.log("Incorrect!")
        }
    }

    this.mistrywords = function(){
        var total = 0
        for(var i=0; i<this.letterArr.length; i++){
            (this.letterArr[i].isGuessed) ? false : total++ ;
        }
        return total;
    } 
}

module.exports = Word;