class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    this.createBoard(); //à lancer quand on créer HangmanCanvas
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    this.context.beginPath();
    //this.context.moveTo(200, 775);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(200 + i * 50, 775); // 200, 200+50, 200+100
      this.context.lineTo(230 + i * 50, 775); // 230, 230+50, 230+100
    }
    this.context.stroke();

    this.context.fillStyle = "black";
    this.context.closePath();
  }

  writeCorrectLetter(letter) {
    // ... your code goes here
    // if  is  a letter
    if (hangman.checkIfLetter(letter) === true) {
      //if letter was not already clicked, then write it on the board
      if (hangman.checkClickedLetters(letter) === true) {
        // if word includes letter, then letter appears in the word
        if (this.secretWord.indexOf(letter) >= 0) {
          let indexes = []
          let i = -1;
          while ((i = this.secretWord.indexOf(letter, i+1)) != -1){
            indexes.push(i);
          }
          this.context.fillStyle = 'black';
          this.context.font = '30px Arial';
          hangman.addCorrectLetter(letter);
          hangman.checkWinner();
          
          indexes.forEach((index) => {
            this.context.fillText(letter, 200 + index*50 , 775);
          });
        } 
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    console.log("letter:" + letter);
    if (hangman.checkIfLetter(letter) === true) {
        if (this.secretWord.indexOf(letter) < 0) {
          console.log("not cool");
          hangman.addWrongLetter(letter);
          this.context.fillStyle = 'black';
          this.context.font = '30px Arial';
          this.context.fillText(letter, 500 + errorsLeft*50 , 500);
          this.drawHangman(errorsLeft);
        } 
      }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    // s'il y a des erreurs, ça me fait des lignes de dessin qui dessine mon pendu
    for(let i = 0; i < this.secretWord.length; i++){
      if(this.secretWord[i] === 0) {
        
      }
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
