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
    let x = 250;
    let y = 700;
    let endLinePosition = 300;
    let lineSpace = 25;
    let lineLength = endLinePosition - x;

    for (let i=0; i < this.secretWord.length; i++) {
      
      this.context.lineWidth = 2;

      this.context.beginPath(); // Creates a new path
      this.context.moveTo(x, y); // Moves the pen
      this.context.lineTo(endLinePosition, y); // Draws a line from the current position to the position specified by x and y.
      this.context.stroke(); // Draws the shape by stroking its outline.
      this.context.closePath(); // Closes the path so that future drawing commands are once again directed to the context.
      
      x = endLinePosition + lineSpace;
      endLinePosition = x + lineLength;
    }
  }

  writeCorrectLetter(letter) {
    // Write the letter the user just clicked
    let x = 275;
    let y = 695;
    hangman.secretWord.split('').forEach((element, i) => {
      if (element === letter) {
        x += 75 * i;
        this.context.font = '50px sans-serif';
        this.context.textAlign = "center";
        this.context.fillText(letter.toUpperCase(), x, y);
        x = 275;
      }
    });
  }

  writeWrongLetter(letter, errorsLeft) {
    let letterPosition = 550;

    //Wrong letters
    switch (errorsLeft) {
      case 7 :
        letterPosition = 550;
        break;
      case 6 :
        letterPosition = 600;
        break;
      case 5 :
        letterPosition = 650;
        break;
      case 4 :
        letterPosition = 700;
        break;
      case 3 :
        letterPosition = 750;
        break;
      case 2 :
        letterPosition = 800;
        break;
      case 1 :
        letterPosition = 850;
        break;
      case 0 :
        letterPosition = 900;
        break;

      default:
        // statements executed when none of the values match the value of the expression    
        break;
    }
    this.context.font = '50px sans-serif';
    this.context.textAlign = "center";
    this.context.fillText(letter.toUpperCase(), letterPosition, 200);

    //errorsLeft
    this.context.clearRect(510, 220, 200, 300);
    this.context.textAlign = "left";
    this.context.font = '30px sans-serif';
    this.context.fillText(`${errorsLeft} errors left`, 530, 250);    
  }

	drawHangman(errorsLeft) {
    this.context.lineWidth = 2;

  	// Triangle
    this.context.beginPath();
		this.context.moveTo(50,700);
		this.context.lineTo(200, 700);
		this.context.closePath();
		this.context.stroke();

		this.context.beginPath();
		this.context.moveTo(50,700);
		this.context.lineTo(125, 650);
		this.context.closePath();
		this.context.stroke();

		this.context.beginPath();
		this.context.moveTo(200,700);
		this.context.lineTo(125, 650);
		this.context.closePath();
		this.context.stroke();

		// Stand
    this.context.beginPath();
    this.context.moveTo(125, 650);
    this.context.lineTo(125, 100);
    this.context.closePath();
    this.context.stroke();

    const drawLastStandPart = () => {
      // Horizontal part of stand
      this.context.beginPath();
      this.context.moveTo(125, 100);
      this.context.lineTo(400, 100);
      this.context.closePath();
      this.context.stroke();
    }
    
    const drawHangedRope = () => {
      // Hanged rope
      this.context.beginPath();
      this.context.moveTo(400, 100);
      this.context.lineTo(400, 150);
      this.context.closePath();
      this.context.stroke();
      }
      
    const drawHead = () => {
    // Head
    this.context.beginPath();
    this.context.arc(400, 195, 45, 0, Math.PI * 2);
    this.context.stroke();
    this.context.closePath();
    }

    const drawBody = () => {
    // Body
    this.context.beginPath();
    this.context.moveTo(400, 240);
    this.context.lineTo(400, 440);
    this.context.closePath();
    this.context.stroke();
    }
    
    const drawLeftArm = () => {
    // Left arm
    this.context.beginPath();
    this.context.moveTo(400, 330);
    this.context.lineTo(320, 300);
    this.context.closePath();
    this.context.stroke();
    }
    
    const drawRightArm = () => {
    // Right arm
    this.context.beginPath();
    this.context.moveTo(400, 330);
    this.context.lineTo(480, 300);
    this.context.closePath();
    this.context.stroke();
    }

    const drawLeftLeg = () => {
    // Left leg
    this.context.beginPath();
    this.context.moveTo(400, 440);
    this.context.lineTo(330, 520);
    this.context.closePath();
    this.context.stroke();
    }

    const drawRightLeg = () => {
      // Right leg
      this.context.beginPath();
      this.context.moveTo(400, 440);
      this.context.lineTo(470, 520);
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
    this.context.clearRect(0, 0, 1200, 800);

    const gameOverImg = new Image(); // Create new <img> element
    gameOverImg.src = './images/gameover.png'; // Set source path

    // Keep ratio of image
    gameOverImg.onload = function() {
      const ratio = gameOverImg.width/gameOverImg.height; // 1.333
      context.drawImage(gameOverImg, 0, 0, 100, 100/ratio);
    };
  }

  winner() {
    // ... your code goes here
  }
}
