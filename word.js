var Letter = require('./letter');

var Word = function(word){
    this.wordArr = word;
    this.show = function(){
        var showPlace = "";
        for(var i=0; i<this.wordArr.length; i++){
            var letter = new Letter(this.wordArr[i]);
            showPlace += `${letter.show(this.wordArr[i])} `;
        }
        return showPlace
    }
    this.check = function(){}
}

var saba = new Word("sina")

console.log(saba.show())