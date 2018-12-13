var inquirer = require('inquirer');
var Word = require('./word');

// this function will randomly chode a word from the guessOptions array
var guessLeft;
function choseAword() {
    var guessOptions = ['gone with the wind', 'inception', 'star wars', 'titanic', 'avatar', 'god father', 'avengers', 'die hard', 'the matrix', 'gladiator', 'insterstellar', 'deadpool'];
    var indx = Math.floor(Math.random() * guessOptions.length);
    guessLeft = guessOptions[indx].length;
    return guess = new Word(guessOptions[indx])
}

// this function will let the user continue playing
function contin() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'continue',
        message: 'would you like to play again?',
        default: 'Yes'
    }]).then((res) => {
        if (res.continue) {
            game()
        }
    })
}

function game() {
    // choose the word and inform the user how game works
    choseAword();
    console.log('\nHint: you have to guess a movie title which can be more than one word (space is the seprator):\n');

    // prompt the user to guess a word
    function ask() {
        inquirer.prompt([{
            name: "word",
            message: "Guess a letter!",
            validate: guess => guess.length === 1
        }]).then((res) => {
            guess.check(res.word)
            console.log(`${guess.show()}\n`);
            guessLeft--;

            // check if the game is over 
            if (guess.mistrywords() > 0) {
                // check the lose or continue condition
                if (guessLeft > 0) {
                    ask()
                } else {
                    console.log(`You lost :( the answer was -> "${guess.value}"\n`)
                    contin()
                }
            } else {
                console.log("you won!\n")
                contin()
            }
        })
    }
    ask();
}
game();





