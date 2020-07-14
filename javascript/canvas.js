class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.createBoard();

  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines(); //??
  }

  drawLines() {
    const longTrait = 32
    let ecart = 17
    let x = 205

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
        this.context.fillText(element.toUpperCase(), 205 + index * (17 + 32), 770); // pour placer les bonnes lettres au bon endroit, il faut ajouter la taille du trait.
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
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}