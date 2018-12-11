var inquirer = require('inquirer');
var Word = require('./word');

// guess is a word randomly chosen from the guessOptions array
var guessLeft;
function choseAword() {
    var guessOptions = ['gone with the wind', 'inception', 'star wars', 'titanic', 'avatar', 'god father', 'avengers', 'die hard', 'the matrix', 'gladiator', 'insterstellar', 'deadpool'];
    var indx = Math.floor(Math.random() * guessOptions.length);
    guessLeft = guessOptions[indx].length;
    return guess = new Word(guessOptions[indx])
}

function game() {
    // chose the word and inform the user how game works
    choseAword();
    console.log('Welcome to the guess game!');
    console.log('Hint: you have to guess a movie title which can be more than one word (space is the seprator):');

    // prompt the user to guess a word
    function ask() {
        inquirer.prompt([{
            name: "word",
            message: "? Guess a letter!"
        }]).then((res) => {
            guess.check(res.word)
            console.log(`${guess.show()}\n`);
            guessLeft--;
            
            if (guessLeft > 0) {
                ask()
            }
        })
    }
    ask();
}
game()





