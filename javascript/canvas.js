class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.positionWrongLetters = 600;
    // ... your code goes here
    console.log(this.secretWord);
  }

  createBoard() {
    // ... your code goes here
    // this.context.strokeRect(0, 0, 100, 100);
    this.context.clearRect(0, 0, 1200, 800);
    // setTimeout(() => {
    this.drawLines();
    // }, 1000);
  }

  drawLines() {
    // ... your code goes here
    let k = 204;
    let j = 237;
    for (let i = 0; i < this.secretWord.length; i++) {
      k += 46;
      j += 46;
      this.context.beginPath()
      this.context.lineWidth = 3;
      this.context.moveTo(k, 774);
      this.context.lineTo(j, 774);
      this.context.stroke();
      this.context.closePath()
    }
  }

  writeCorrectLetter(letter) {
    // ... your code goes here
    this.context.font = "40px Arial"
    let correctLetter = hangman.secretWord.split('');
    console.log(correctLetter)
    correctLetter.forEach((el, index) => {
      if (el === letter) {
        // console.log('this letter exist');
        this.context.fillText(el, 255 + index * 46, 760);
      }
    })
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    if (this.secretWord.includes(letter) === false) {
      console.log("this letter does'nt exist");
      this.context.font = "40px Arial"
      this.context.fillText(letter.toUpperCase(), this.positionWrongLetters, 440);
      this.positionWrongLetters += 30;
      errorsLeft -= 1;
    }
  }

  drawHangman(errorsLeft) {
    this.context.beginPath()
    this.context.lineWidth = 3;
    switch (errorsLeft) {
      case 9:
        this.context.moveTo(70, 774);
        this.context.lineTo(170, 774);
        this.context.stroke();
        break;
      case 8:
        this.context.moveTo(70, 774);
        this.context.lineTo(120, 744);
        this.context.stroke();
        break;
      case 7:
        this.context.moveTo(170, 774);
        this.context.lineTo(120, 744);
        this.context.stroke();
        break;
      case 6:
        this.context.moveTo(120, 744);
        this.context.lineTo(120, 340);
        this.context.stroke();
        break;
      case 5:
        this.context.moveTo(120, 340);
        this.context.lineTo(367, 340);
        this.context.stroke();
        break;
      case 4:
        this.context.moveTo(367, 340);
        this.context.lineTo(367, 370);
        this.context.stroke();
        break;
      case 3:
        this.context.arc(367, 400, 30, 0, Math.PI * 2);
        this.context.stroke();
        break;
      case 2:
        this.context.moveTo(367, 430);
        this.context.lineTo(367, 560);
        this.context.stroke();
        break;
      case 1:
        this.context.moveTo(367, 560);
        this.context.lineTo(318, 640);
        this.context.stroke();
        break;
      case 0:
        this.context.moveTo(367, 560);
        this.context.lineTo(421, 640);
        this.context.stroke();
        break;
        this.context.closePath()
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}