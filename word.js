var Letter = require('./letter');
const chalk = require('chalk');

var Word = function() {
	this.lettersGuessed = [];
	this.word = [];

	this.addLetter = function(ltr) {
		this.lettersGuessed.push(ltr);
		this.updateWord(ltr);
	}

	this.setWord = function(newWord) {
		for (var i = 0; i < newWord.length; i++) {
			this.word.push(new Letter(newWord.charAt(i)));
		}
	}

	this.updateWord = function(ltr) {
		for (var i = 0; i < this.word.length; i++) {
			if (this.word[i].letter === ltr) {
				this.word[i].setToDisplay();
			}
		}
	}

	this.displayWord = function() {
		var displayedWord = '';
		for (var i = 0; i < this.word.length; i++) {
			displayedWord += this.word[i].getLetter() + ' ';
		}
		console.log(chalk.cyan.bold('\n ' + displayedWord + '\n'));
	}

	this.isComplete = function() {
		for (var i = 0; i < this.word.length; i++) {
			if (this.word[i].displayLetter === false) {
				return false;
			}
		}
		return true;
	}

	this.isCorrectGuess = function(ltr) {
		for (var i = 0; i < this.word.length; i++) {
			if (this.word[i].letter === ltr) {
				return true;
			}
		}
		return false;
	}
}

module.exports = Word;