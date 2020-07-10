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
      this.context.lineWidth = 4;
      this.context.lineTo(fin,775);
      this.context.stroke();
    }
  }

  writeCorrectLetter(letter) {
    let x = 220;
    let y = 762;
    let splitWord = hangman.secretWord.split("");
    let index = hangman.secretWord.indexOf(letter);
    splitWord.forEach((element, index) => {
      if (letter === element) {
      x = x + 45*index;
      this.context.font = "35px sans-serif"
      this.context.fillText(letter.toUpperCase(), x, y);
      }
    })
    } 

  writeWrongLetter(letter, errorsLeft) {
    let x = 506;
    let y = 441;
    let ecart = 30;
    switch(errorsLeft) {
      case 7 : 
        positionx = x;
        break;
      case 6 :
        positionx = x+ecart;
        break;
      case 5 : 
        positionx = x+ecart*2;
        break;
      case 4 : 
        positionx = x+ecart*3;
        break;
      case 3 : 
        positionx = x+ecart*4;
        break;
      case 2 : 
        positionx = x+ecart*5;
        break;
      case 1 : 
        positionx = x+ecart*6;
        break;
      case 0 : 
        positionx = x+ecart*7;
        break;
      default:
        break;
    }
    this.context.font = "35px sans-serif"
    this.context.fillText(letter.toUpperCase(), positionx, y);
  }

  drawHangman(errorsLeft) {
    // draw
    const base = function () {
      this.context.beginPath(); 
      this.context.lineWidth = 3;
      this.context.moveTo(67,776);
      this.context.lineTo(173,776);
      this.context.moveTo(173,776);
      this.context.lineTo(120,742);
      this.context.moveTo(120,742);
      this.context.lineTo(67,776);
      this.context.stroke();
    }

    const verticalbar = function () {
      this.context.beginPath(); 
      this.context.lineWidth = 3;
      this.context.moveTo(120,742);
      this.context.lineTo(120,341);
      this.context.stroke();
    }

    const horizontalbar = function () {
      this.context.beginPath(); 
      this.context.lineWidth = 3;
      this.context.moveTo(120,341);
      this.context.lineTo(370,341);
      this.context.stroke();
    }

    const rope = function () {
      this.context.beginPath(); 
      this.context.lineWidth = 3;
      this.context.moveTo(370,341);
      this.context.lineTo(370,374);
      this.context.stroke();
    }

    const head = function () {
      this.context.beginPath(); 
      this.context.lineWidth = 3;
      this.context.arc(369, 408, 64, 0, Math.PI * 2)
      this.context.stroke();
    }

    const body = function () {
      this.context.beginPath(); 
      this.context.lineWidth = 3;
      this.context.moveTo(370,443);
      this.context.lineTo(370,576);
      this.context.stroke();
    }

    const rightLeg = function () {
      this.context.beginPath(); 
      this.context.lineWidth = 3;
      this.context.moveTo(370,576);
      this.context.lineTo(423,641);
      this.context.stroke();
    }

    const leftLeg = function () {
      this.context.beginPath(); 
      this.context.lineWidth = 3;
      this.context.moveTo(370,576);
      this.context.lineTo(317,641);
      this.context.stroke();
    }

    switch (errorsLeft) {
      case 7 : 
        base();
        break;
      case 6 : 
        base();
        verticalbar();
        break;
      case 5 : 
        base();
        verticalbar();
        horizontalbar();
        break;
      case 4 : 
        base();
        verticalbar();
        horizontalbar();
        rope();
        break;
      case 3 : 
        base();
        verticalbar();
        horizontalbar();
        rope();
        head();
        break;
      case 2 : 
        base();
        verticalbar();
        horizontalbar();
        rope();
        head();
        body();
        break;
      case 1 :
        base();
        verticalbar();
        horizontalbar();
        rope();
        head();
        body();
        leftLeg();
        break;
      case 0 :
          base();
          verticalbar();
          horizontalbar();
          rope();
          head();
          body();
          leftLeg();
          rightLeg();
          break;
        default :
          break;
    }

  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
