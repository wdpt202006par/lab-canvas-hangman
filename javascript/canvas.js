class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.createBoard();
    const winImg = new Image();
    winImg.src = "./images/awesome.png";

  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines(); //??
  }

  drawLines() {
    const longTrait = 32
    let ecart = 17
    let x = 270

    for (let i = 0; i < hangman.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(x, 778) //x = 254
      this.context.lineTo(x + longTrait, 778); // trait = 286 / Position x = 286
      // this.context.moveTo(254, 778)
      this.context.closePath();
      this.context.stroke();
      x = x + ecart + longTrait // x = 303
    }
  }

  writeCorrectLetter(letter) {
    this.context.font = '40px sans-serif'; // UTILE POUR AFFICHER LA POLICE SINON CA NE MARCHERA PAS
    hangman.secretWord.split('').forEach((element, index) => {
      if (element === letter) {
        this.context.fillText(element.toUpperCase(), 270 + index * (17 + 32), 770); // pour placer les bonnes lettres au bon endroit, il faut ajouter la taille du trait.
      }
    })
  }

  writeWrongLetter(letter, errorsLeft) {
    var pos = 800
    this.context.font = "40px sans-serif";
    hangman.letters.forEach((element) => {
      // if (element != letter) {
      pos += 30
      this.context.fillText(element.toUpperCase(), pos, 450);
      // }
    })

  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 7: // first mistake
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(145, 778);
        this.context.lineTo(245, 778);
        this.context.lineTo(195, 743);
        this.context.closePath();
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(195, 743);
        this.context.lineTo(195, 343); // Does JS keep record of the last end point even after break ?
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(195, 343);
        this.context.lineTo(445, 343);
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(445, 343);
        this.context.lineTo(445, 373);
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.arc(445, 406, 33, 0, Math.PI * 2); // X and Y coordinates indicates center position.
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(445, 439);
        this.context.lineTo(445, 569);
        this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        this.context.beginPath();
        this.context.lineWidth = 3;
        this.context.moveTo(445, 569);
        this.context.lineTo(495, 635);
        this.context.moveTo(445, 569);
        this.context.lineTo(395, 635);
        this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        break;
    }
  }

  gameOver() {
    this.context.font = "100px sans-serif";
    this.context.fillStyle = "red";
    this.context.fillText('GAME OVER', 500, 500); // center does not work. Is there any way like flexbox.
  }

  winner() {
    const winImg = new Image();
    winImg.src = "./images/awesome.png";
    this.context.drawImage(winImg, 0, 0, 400, 500);
  }
}