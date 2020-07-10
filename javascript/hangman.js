class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = []; // all unique letters tried
    this.guessedLetters = ''; // the already found letters
    this.errorsLeft = 8;
  }
  pickWord() {
    const rand = Math.floor(Math.random()*this.words.length);
    return this.words[rand];
  }
  checkIfLetter(key) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    if (alphabet.includes(key)) {
      return true;
    } else {
      return false;
    }
  }
  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      // already present
      return false;
    } else {
      // not already present
      this.letters.push(letter);
      return true;
    }
  }
  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }
  addWrongLetter(letter) {
    this.errorsLeft--;
  }
  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }
  checkWinner() {
    let secretWordArr = new Set(this.secretWord.split(''));

    if (this.guessedLetters.length === Array.from(secretWordArr).length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here

    console.log(hangman.secretWord);
  });
}

document.addEventListener('keydown', event => {
	// React to user pressing a key
	console.log(event.key)
	if (hangman.checkIfLetter(event.key)) {
		// WOOT: this is a [a-z] letter
		const letter = event.key;
		if (hangman.checkClickedLetters(letter)) {
			// New letter
			console.log('brand new letter guess')
			if (hangman.secretWord.includes(letter)) {
				// BINGO: letter is IN !
				hangman.addCorrectLetter(letter)
				// draw the correct letter
				hangmanCanvas.writeCorrectLetter(letter);
				if (hangman.checkWinner()) {
					hangmanCanvas.winner()
				}
			} else {
				// NOPE: wrong guess
				hangman.addWrongLetter(letter)
				hangmanCanvas.drawHangman(hangman.errorsLeft)
				// draw the wrong letter
				hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft)
				if (hangman.checkGameOver()) {
					hangmanCanvas.gameOver()
				}
			}
		} else {
			// Already tried letter
			console.log('you already tried this letter')
		}
	} else {
		console.log('not a letter')
  }
});