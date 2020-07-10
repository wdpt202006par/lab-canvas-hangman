class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
    this.createBoard();  
  }

  createBoard() {
    this.context.clearRect(0,0, this.context.canvas.width, this.context.canvas.height);
    this.drawLines();
  }

  drawLines() {
    // let x = 250;
    // let y = 700;
    // let xLine = 300;

    // for (let i=0; i < this.secretWord.length; i++) {
    //   this.context.beginPath(); // Creates a new path.
    //   this.context.moveTo(x, y); // Moves the pen
    //   this.context.lineTo(xLine, y);
    //   this.context.stroke();
    //   this.context.closePath();
    //   x += 150;
    //   xLine += 150;
    // }

    let x = 250;
    let y = 700;
    let lineLenght = 300;
    let lineSpace = 25;

    for (let i=0; i < this.secretWord.length; i++) {
      
      this.context.lineWidth = 2;

      this.context.beginPath(); // Creates a new path
      this.context.moveTo(x, y); // Moves the pen
      this.context.lineTo(lineLenght, y); // Draws a line from the current position to the position specified by x and y.
      this.context.stroke(); // Draws the shape by stroking its outline.
      this.context.closePath(); // Closes the path so that future drawing commands are once again directed to the context.
      
      x = lineLenght + lineSpace;
      lineLenght = x + 50;
    }

  }

  writeCorrectLetter(letter) {
    //... your code goes here
    // Write the letter the user just clicked
    let x = 250;
    let y = 700;
    hangman.secretWord.split('').forEach((element, i) => {
      if (element === letter) {
        x += 80 * i;
        this.context.font = '50px serif';
        this.context.fillText(letter, x, y);
        x = 250;
      }
    }); 
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '50px';
    this.context.fillText(letter, this.x, 50);

    this.context.clearRect(0, 0, 250, 250);
    this.context.font = '50px';
		this.context.fillText(errorsLeft, 150, 100);
		
		this.x += 100;

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
	// Triangle
		this.context.beginPath();
		this.context.moveTo(20,650);
		this.context.lineTo(130, 650);
		this.context.closePath();
		this.context.stroke();

		this.context.beginPath();
		this.context.moveTo(20,650);
		this.context.lineTo(70, 600);
		this.context.closePath();
		this.context.stroke();

		this.context.beginPath();
		this.context.moveTo(130,650);
		this.context.lineTo(70, 600);
		this.context.closePath();
		this.context.stroke();

		// Stand
    this.context.beginPath();
    this.context.moveTo(70, 600);
    this.context.lineTo(70, 300);
    this.context.closePath();
    this.context.stroke();

    const drawLastStandPart = () => {
      // Horizontal part of stand
      this.context.beginPath();
      this.context.moveTo(70, 300);
      this.context.lineTo(300, 300);
      this.context.closePath();
      this.context.stroke();
    }
    
    const drawHangedRope = () => {
      // Hanged rope
      this.context.beginPath();
      this.context.moveTo(300, 300);
      this.context.lineTo(300, 340);
      this.context.closePath();
      this.context.stroke();
      }
      
    const drawHead = () => {
    // Head
    this.context.beginPath();
    this.context.arc(300, 375, 35, 0, Math.PI * 2);
    this.context.stroke();
    this.context.closePath();
    }

    const drawBody = () => {
    // Body
    this.context.beginPath();
    this.context.moveTo(300, 410);
    this.context.lineTo(300, 550);
    this.context.closePath();
    this.context.stroke();
    }
    
    const drawLeftArm = () => {
    // Left arm
    this.context.beginPath();
    this.context.moveTo(300, 460);
    this.context.lineTo(220, 420);
    this.context.closePath();
    this.context.stroke();
    }
    
    const drawRightArm = () => {
    // Right arm
    this.context.beginPath();
    this.context.moveTo(300, 460);
    this.context.lineTo(380, 420);
    this.context.closePath();
    this.context.stroke();
    }

    const drawLeftLeg = () => {
    // Left leg
    this.context.beginPath();
    this.context.moveTo(300, 550);
    this.context.lineTo(240, 600);
    this.context.closePath();
    this.context.stroke();
    }

    const drawRightLeg = () => {
      // Right leg
      this.context.beginPath();
      this.context.moveTo(300, 550);
      this.context.lineTo(360, 600);
      this.context.closePath();
      this.context.stroke();
    }
    
    switch (errorsLeft) {
      case 7 :
        drawLastStandPart();
        break;

      case 6:
        drawLastStandPart();
        drawHangedRope();
        break;

      case 5:
        drawLastStandPart();
        drawHangedRope();
        drawHead();
        break;

      case 4:
        drawLastStandPart();
        drawHangedRope();
        drawHead();
        drawBody();
        break;

      case 3:
        drawLastStandPart();
        drawHangedRope();
        drawHead();
        drawBody();
        drawLeftArm();
        break;

      case 2:
        drawLastStandPart();
        drawHangedRope();
        drawHead();
        drawBody();
        drawLeftArm();
        drawRightArm();
        break;

      case 1:
        drawLastStandPart();
        drawHangedRope();
        drawHead();
        drawBody();
        drawLeftArm();
        drawRightArm();
        drawLeftLeg();
        break;

      case 0:
        drawLastStandPart();
        drawHangedRope();
        drawHead();
        drawBody();
        drawLeftArm();
        drawRightArm();
        drawLeftLeg();
        drawRightLeg();
        break;
        
      default:
        // statements executed when none of the values match the value of the expression    
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
