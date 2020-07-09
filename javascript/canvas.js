class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
    this.createBoard();  
  }

  createBoard() {
    this.context.clearRect(0,0, Infinity, Infinity);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let x =200;
    let y =300;
    let line = 250;

    for (let i=0; i < this.secretWord.length; i++) {

      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(line, y);
      this.context.stroke();
      this.context.closePath();
      x += 150;
      line += 150;
    }
  }

  writeCorrectLetter(letter) {
    //... your code goes here
    // Write the letter the user just clicked
    let x = 115;
    let y = 300;
    hangman.secretWord.split('').forEach((element, i) => {
      if (element === letter) {
        x += 100 * i;
        this.context.font = '48px serif';
        this.context.fillText(letter, x, y);
        x = 115;
      }
    }); 
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '48px';
    this.context.fillText(letter, this.x, 50);

    this.context.clearRect(0, 0, 150, 150);
    this.context.font = '48px';
    this.context.fillText(errorsLeft, 150, 100);

    // let x = 100;
    // let y = 900;

    // hangman.secretWord.split('').forEach((element, i) => {
    //   if (letter != element) {
    //     x += 100 * i;
    //     this.context.font = '48px serif';
    //     this.context.fillText(letter, x, y);
    //     x = 115;
    //   }
    // });
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
