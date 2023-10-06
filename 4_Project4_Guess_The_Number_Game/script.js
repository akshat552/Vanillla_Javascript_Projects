let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const userInput = document.querySelector("#guessedNum");
const submitBtn = document.querySelector("#guessSubmit");
const userGuesses = document.querySelector("#guesses");
const remainingGuess = document.querySelector("#remainingGuess");
const promptMessage = document.querySelector("#lowOrHi");
const startOver = document.querySelector("#resultPara");

const para = document.createElement("p");

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (true) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const Guess = parseInt(userInput.value);
    console.log(Guess);
    validateInput(Guess);
  });
}

function validateInput(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 0) {
    alert("Please enter a number more than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 9) {
      displayGuessedNum(guess);
      displayMessage(`Game over! The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuessedNum(guess);
      checkGuessedNum(guess);
    }
  }
}

function checkGuessedNum(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Your guess is TOO low");
  } else {
    displayMessage("Your guesss is TOO high");
  }
}

function displayGuessedNum(guess) {
  userInput.value = "";
  userGuesses.innerHTML = prevGuess;
  numGuess++;
  remainingGuess.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  promptMessage.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
  playGame = false;
  submitBtn.setAttribute("disabled", "");
  userInput.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Start a new game</h2>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  playGame = true;
  const resetBtn = document.querySelector("#newGame");
  resetBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    userGuesses.innerHTML = prevGuess;
    remainingGuess.innerHTML = `${10 - numGuess}`;
    
    submitBtn.removeAttribute("disabled");
    userInput.removeAttribute("disabled");
    startOver.removeChild(para);
    displayMessage(``)
  });
}
