class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    this.createBoard(); //à lancer quand on créer HangmanCanvas
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    this.context.beginPath();

    console.log(this.secretWord);
    //this.context.moveTo(200, 775);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(200 + i * 50, 775); // 200, 200+50, 200+100
      this.context.lineTo(230 + i * 50, 775); // 230, 230+50, 230+100
    }
    this.context.stroke();

    this.context.fillStyle = "black";
    this.context.closePath();
  }

  writeCorrectLetter(letter) {
    // ... your code goes here
    // if  is  a letter
    if (this.checkIfLetter(key)) {
      //if letter was not already clicked, then write it on the board
      if (this.checkClickedLetters(letter)) {
        // if word includes letter, then letter appears in the word, else letter appear in top right corner.
        if (letter === true) {
          addCorrectLetter(letter);
        } ///A REPRENDRE
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
