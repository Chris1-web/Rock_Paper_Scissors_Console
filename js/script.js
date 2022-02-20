let player = 0;
let computer = 0;

const playerPlay = function () {
  const playerSelected = prompt("Rock, Paper, or Scissors").toLowerCase(); //get player's choice
  //remove the first letter to convert to uppercase and add to the remaining letters to ensure non-case sensitivity
  const remainingLetters = playerSelected.slice(1);
  return playerSelected.charAt(0).toUpperCase() + remainingLetters;
};

const chooseableOptions = ["Rock", "Paper", "Scissors"];
const computerPlay = function () {
  const computerRandomNumber = Math.floor(Math.random() * 3); //choose a number between 0 and 2
  const returnedOption = chooseableOptions[computerRandomNumber]; //get the option in array corresponding with the chosen number
  return returnedOption;
};

const playRound = function (playerSelection, computerSelection) {
  console.log(
    `Computer chose ${computerSelection} and You chose ${playerSelection}`
  );
  if (playerSelection === computerSelection) {
    player += 1;
    computer += 1;
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
    return "wrong words";
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  switch (true) {
    case player > computer:
      console.log(
        `You won the game with a score of ${player} while computer lost with a score of ${computer}`
      );
      break;
    case computer > player:
      console.log(
        `Computer won the game with a score of ${computer} while you lost with a score of ${player}`
      );
      break;
    default:
      console.log("It is a tied game");
  }
};

game();
