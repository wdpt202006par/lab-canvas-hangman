
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
    let x ;
    let y = 762;
    let splitWord = hangman.secretWord.split("");
    // let index = hangman.secretWord.indexOf(letter);
    
    splitWord.forEach((element, index) => {
      if (letter === element) {
        x = 220 + 45*index;
        console.log(index)
        this.context.font = "35px sans-serif"
        this.context.fillText(letter.toUpperCase(), x, y);
        console.log(`guessed letters: ${hangman.addCorrectLetter(letter)}`);
      }
    })
    } 

  writeWrongLetter(letter, errorsLeft) {
    let x = 500;
    let y = 441;
    let positionx=x;
    let ecart = 30;
    console.log(`errors left= ${errorsLeft}`)
    switch(errorsLeft) {
      case 7 : 
        positionx = x+ecart;
        break;
      case 6 :
        positionx = x+ecart*2;
        break;
      case 5 : 
        positionx = x+ecart*3;
        break;
      case 4 : 
        positionx = x+ecart*4;
        break;
      case 3 : 
        positionx = x+ecart*5;
        break;
      case 2 : 
        positionx = x+ecart*6;
        break;
      case 1 : 
        positionx = x+ecart*7;
        break;
      case 0 : 
        positionx = x+ecart*8;
        break;
      default:
        break;
    }
    this.context.font = "35px sans-serif";
    this.context.fillText(letter.toUpperCase(),positionx, y);
  }

  drawHangman(errorsLeft) {
 
    // draw
    
    switch (errorsLeft) {
      case 7 : 
        console.log(`il te reste ${errorsLeft} essais:`);
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(67,776);
        this.context.lineTo(173,776);
        this.context.moveTo(173,776);
        this.context.lineTo(120,742);
        this.context.moveTo(120,742);
        this.context.lineTo(67,776);
        this.context.stroke()      
        break;
      case 6 : 
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(120,742);
        this.context.lineTo(120,341);
        this.context.stroke()
          break;
      case 5 : 
        this.context.beginPath();
        this.context.lineWidth = 3;      
        this.context.moveTo(120,341);
        this.context.lineTo(370,341);
        this.context.stroke()     
        break;
      case 4 :
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(370,341);
        this.context.lineTo(370,374);
        this.context.stroke()    
        break;
      case 3 : 
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.arc(370, 410, 35, 0, Math.PI * 2);
        this.context.stroke()
        break;
      case 2 : 
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(370,443);
        this.context.lineTo(370,576);
        this.context.stroke()
        break;
      case 1 :
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(370,576);
        this.context.lineTo(423,641);
        this.context.stroke()
        break;
      case 0 :
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(370,576);
        this.context.lineTo(317,641);
        this.context.stroke()
        break;
      default :
        break;
    }

  }

  gameOver() {
    // ... your code goes here
    const imageGO = document.createElement('img');
    imageGO.src = "images/gameover.png";
  
    // TODO
    imageGO.onload = () => {
      this.context.drawImage(imageGO, 320, 300, 500, 400);
    }  
    setTimeout(() => {
      this.context.clearRect(0, 0, 800 , 1200 );

    }, 4000);
  }

  winner() {
    // ... your code goes here
    const imageAW = document.createElement('img');
    imageAW.src = "images/awesome.png";
  
    // TODO
    imageAW.onload = () => {
      this.context.drawImage(imageAW, 300, 300, 400, 400);
    } 
    setTimeout(() => {
      this.context.clearRect(0, 0, 800 , 1200 );
    }, 4000);
  }
}
