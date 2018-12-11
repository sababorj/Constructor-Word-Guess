var Letter = function(a){
    this.value = a;
    this.isGuessed = false;
    this.show = function(){
        if(this.isGuessed){
            return this.value;
        } else {
            return "_";
        }
    }
    this.check = function(guess){
        if(guess === this.value){
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;
// var a = new Letter("a");
// a.check("a");
// console.log(a.isGuessed)