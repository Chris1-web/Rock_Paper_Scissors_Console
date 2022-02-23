`use strict`;
let player = 0;
let computer = 0;
let winner;

const chooseableOptions = ["Rock", "Paper", "Scissors"];
const computerPlay = function () {
  const computerRandomNumber = Math.floor(Math.random() * 3); //choose a number between 0 and 2
  const returnedOption = chooseableOptions[computerRandomNumber]; //get the option in array corresponding with the chosen number
  return returnedOption;
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    player += 0;
    computer += 0;
    return "It's a tie";
  } else if (
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors")
  ) {
    player += 1;
    return "You win! Computer Loses";
  } else if (
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Rock" && playerSelection === "Scissors")
  ) {
    computer += 1;
    return "Computer Wins! You lose";
  } else {
    return "Error";
  }
};

const game = function () {
  if (player > computer) {
    return "You won";
  } else {
    return `You Lost`;
  }
};

//
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const text = document.querySelector(".text h5");
const div = document.querySelector(".results");
const currentGameWinner = document.querySelector(".finalWinner");
const currentChampion = document.querySelector(".currentWinner");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const playAgain = document.querySelector(".play-again");
const instruction = document.querySelector(".text p");
const playerImage = document.querySelector(".player-choice-image");
const computerImage = document.querySelector(".computer-choice-image");

const displayEndGameModal = function () {
  if (player === 5 || computer === 5) {
    currentGameWinner.textContent = game();
    modal.classList.toggle("hide");
    overlay.classList.toggle("hide");
  }
};

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn")) return;
  displayEndGameModal();
  const playerSelection = e.target.dataset.name;
  const computerSelection = computerPlay();
  const playGame = playRound(playerSelection, computerSelection);
  playerScoreDisplay.textContent = `${player}`;
  computerScoreDisplay.textContent = `${computer}`;
  text.textContent = playGame;
  instruction.textContent = "";
  playerImage.setAttribute(
    "src",
    `./images/${playerSelection.toLowerCase()}.png`
  );
  computerImage.setAttribute(
    "src",
    `./images/${computerSelection.toLowerCase()}.png`
  );
});

playAgain.addEventListener("click", function () {
  player = 0;
  computer = 0;
  modal.classList.toggle("hide");
  overlay.classList.toggle("hide");
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  text.textContent = "CHOOSE YOUR WEAPON";
  // playersChoices.textContent = "";
  instruction.textContent = "The first person to score 5 wins";
  playerImage.setAttribute("src", `./images/question-mark.png`);
  computerImage.setAttribute("src", `./images/question-mark.png`);
});

// playerImage.setAttribute("src", "./images/hand.png");
// computerImage.setAttribute("src", "./images/scissor.png");
