class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
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
        this.context.fillText(el, 255+index*46, 760);
      } 
    })
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    // this.context.font = "40px Arial" 
    // let correctLetter = hangman.secretWord.split('');
    // console.log(correctLetter)
    // correctLetter.forEach((el, index) => {
    //   if (el === letter) {
    //     // console.log('this letter exist');
    //     this.context.fillText(el, 700+index*46, 250);
    //   } 
    // })
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