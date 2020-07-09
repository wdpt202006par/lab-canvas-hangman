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

    this.context.beginPath();
    this.context.moveTo(100, 730);
    this.context.lineTo(100, 350);
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(100, 350);
    this.context.lineTo(350, 350);
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(350, 350);
    this.context.lineTo(350, 400);
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(350, 435, 35, 0, Math.PI * 2);
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(350, 470);
    this.context.lineTo(350, 600);
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(350, 600);
    this.context.lineTo(300, 650);
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(350, 600);
    this.context.lineTo(400, 650);
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
