var Word = require('./word');
var RandomWord = require('./game');
var inquirer = require('inquirer');
const chalk = require('chalk');
var gussesRemaining = 5;
var pastGuesses = [];

var guessesWrong = 0;

var MyWord = new Word();
var newWord = RandomWord.getRandomWord();
MyWord.setWord(newWord);

function playGame() {
    if ((gussesRemaining > 0) && (!MyWord.isComplete())) {
        MyWord.displayWord();
        inquirer.prompt([{
            type: 'string',
            message: 'Enter a letter: ',
            name: 'letter'
        }]).then(function(answers) {
            MyWord.addLetter(answers.letter);
            if (!MyWord.isCorrectGuess(answers.letter)) {
                if (pastGuesses.indexOf(answers.letter) === -1) {
                    console.log(chalk.red.bold("\n\n INCORRECT!!!"));
                    gussesRemaining--;
                    pastGuesses.push(answers.letter);
                }
                else {
                    console.log(chalk.bgYellow.bold("\n\n You already guessed this Letter! Try another."));
                }
            }
            else {
                console.log(chalk.green.bold("\n\n CORRECT!!!"));
            }

            console.log(chalk.blue.bold('\n Guesses Remaining : '+gussesRemaining));
            playGame();
        });
    } else {
        if (MyWord.isComplete()) {
            MyWord.displayWord() ;
            console.log(chalk.green.bold(' You Win! CONGRATULATIONS!!'));
        } else {
            console.log(chalk.red.bold(' GAME  OVER!!'));
            console.log(chalk.red.bold(" The correct word was: "+ newWord));
        }
        gussesRemaining = 5;
    }
}

playGame();


