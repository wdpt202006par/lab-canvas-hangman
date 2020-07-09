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
    /*
    this.context.beginPath();
    var splitted = hangman.secretWord.split('');
    splitted.forEach((el, index)=> {
      this.context.moveTo(200+index*50, 750);
      this.context.lineTo(250+index*50, 750);
    })
  
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();
    */
   this.context.beginPath()
		hangman.secretWord.split('').forEach((letter, i) => {
			this.context.moveTo(200 + i * 50, 775)
			this.context.lineTo(240 + i * 50, 775)
		})
    this.context.closePath()		
    this.context.lineWidth = 5;
		this.context.stroke()
  }

  writeCorrectLetter(letter) {

    this.context.fillText(letter, 250, 300);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }
// drawHangman(errorsLeft) {
  drawHangman() {
    this.context.beginPath();
    this.context.moveTo(50,775);
    this.context.lineTo(150, 775);
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(50,775);
    this.context.lineTo(100, 730);
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(150,775);
    this.context.lineTo(100, 730);
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();


  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
