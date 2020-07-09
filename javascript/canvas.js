class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0,0, this.context.canvas.width, this.context.canvas.height);
    this.drawLines();
  }

  drawLines() {
    
    let fin = 196;
    let debut=0;
    for (let i=0; i<this.secretWord.length; i++) { 
      debut= fin +14;
      this.context.beginPath();
      this.context.moveTo(debut,775);
      fin =debut+32;
      this.context.lineTo(fin,775);
      this.context.stroke();
    }
  }

  writeCorrectLetter(letter) {
    // ... your code goes here
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