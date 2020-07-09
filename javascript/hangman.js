class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = []; // all unique letters tried
    this.guessedLetters = ''; // the already found letters
    this.errorsLeft = 8;
  }
  pickWord() {
    // ... your code goes here
    const rand = Math.floor(Math.random()*this.words.length);
    return this.words[rand];
  }
  checkIfLetter(key) {
    // ... your code goes here
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    if (alphabet.includes(key)) {
      return true;
    } else {
      return false;
    }
  }
  checkClickedLetters(letter) {
    // ... your code goes here
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
    // ... your code goes here
    this.guessedLetters += letter;
  }
  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
  }
  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }
  checkWinner() {
    // ... your code goes here
    if (this.guessedLetters.length === this.secretWord.length) {
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
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
