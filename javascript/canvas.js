class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;

    this.createBoard()
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
 
    // si oui, tu l'écris dans le mot à la bonne position. 
    if (this.secretWord.includes(letter)) {
      let position = secretWord.indexOf(letter);
      this.addCorrectLetter(letter);
      let positionLetter=211 + 48* position;
      this.context.fillText(letter, positionLetter , 761, 24);
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
