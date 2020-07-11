class HangmanCanvas {
  constructor() {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.createBoard()
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height)
    this.drawLines()
  }

  drawLines() {
    // ... your code goes here

    this.context.beginPath()
    hangman.secretWord.split('').forEach((letter, i) => {
      this.context.moveTo(200+i*50,775)
      this.context.lineTo(240+i*50,775)
    })
    this.context.closePath()

    this.context.lineWidth = 5;
    this.context.stroke()
  }

  writeCorrectLetter(letter) {
    // ... your code goes here
    this.context.font = '40px Arial'
    hangman.secretWord.split('').forEach((l, i) => {
      if (l === letter) {
        this.context.fillText(letter, 200+i*50, 740, 40)
      }
    })
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '40px Arial'
    this.context.fillText(letter, 510+errorsLeft*50, 420, 40)
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch (errorsLeft) {
      case 7:
        this.context.beginPath()
        this.context.moveTo(70,775)
        this.context.lineTo(170,775)
        this.context.lineTo(120,740)
        this.context.closePath()
    
        this.context.lineWidth = 5;
        this.context.stroke()

        break;
      case 6:
        this.context.beginPath()
        this.context.moveTo(120,740)
        this.context.lineTo(120,340)
        this.context.closePath()
    
        this.context.lineWidth = 5;
        this.context.stroke()
        break;
      case 5:
        this.context.beginPath()
        this.context.moveTo(120,340)
        this.context.lineTo(370,340)
        this.context.closePath()
    
        this.context.lineWidth = 5;
        this.context.stroke()
        break;
      case 4:
        this.context.beginPath()
        this.context.moveTo(370,340)
        this.context.lineTo(370,375)
        this.context.closePath()
    
        this.context.lineWidth = 5;
        this.context.stroke()
        break;
      case 3:
        this.context.beginPath()
        this.context.arc(370,410,35,0,Math.PI*2)
        this.context.closePath()
    
        this.context.lineWidth = 5;
        this.context.stroke()
        break;
      case 2:
        this.context.beginPath()
        this.context.moveTo(370,445)
        this.context.lineTo(370,580)
        this.context.closePath()
    
        this.context.lineWidth = 5;
        this.context.stroke()
        break;
      case 1:
        this.context.beginPath()
        this.context.moveTo(370,580)
        this.context.lineTo(320,640)
        this.context.closePath()
    
        this.context.lineWidth = 5;
        this.context.stroke()
        break;
      case 0:
        this.context.beginPath()
        this.context.moveTo(370,580)
        this.context.lineTo(425,640)
        this.context.closePath()
    
        this.context.lineWidth = 5;
        this.context.stroke()
        break;
    }
  }

  gameOver() {
    // ... your code goes here
    alert('You loose!')
  }

  winner() {
    // ... your code goes here
    alert('You win !!!')
  }
}
