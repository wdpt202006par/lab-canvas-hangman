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
    if (this.guessedLetters.length === [...new Set(this.secretWord)].length) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

startGameButton && startGameButton.addEventListener('click', event => {
  hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
  console.log('secretWord', hangman.secretWord);

  // HINT (uncomment when start working on the canvas portion of the lab)
  hangmanCanvas = new HangmanCanvas();
});

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(event.key)
  
  //
  // Flow:
  //
  // If the key pressed is an alphabet letter:
  //   - Then:
  //     A. If this letter has never been tried before
  //       - Then
  //         If the letter is part of the secret word:
  //           - Then:
  //             - we display the letter at its position
  //             - we check if we have won
  //           - Else:
  //             - we display the letter to the top-right
  //             - we trace a step of the hangman
  //             - we check we have loose
  //       - Else: nothing
  //   - Else: nothing
  //

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
