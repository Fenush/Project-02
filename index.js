let computerSelection = ""; /*Store the computer selection*/
let randomNumber = ""; /*random number for computerSelection calcs*/
let playerSelection = ""; /*Store player selection input*/
let gameWinner = ""; /*Display the Output text at the end of each round*/
let gameCounter = 0; /*This is the loop counter*/
let winnedMatches = "5"; /*This count trough loses winned matches*/
let playAgain = ""; /*PlayAgain option*/

function varInit() {
  /*Variables init f(x) for Game Replays & Start Here*/
  computerSelection = "";
  playerSelection = "";
  gameWinner = "";
  gameCounter = 0;
  winnedMatches = "5";
  playAgain ="";
  return { computerSelection, playerSelection, gameWinner, winnedMatches, playAgain };
}

function number() {
  randomNumber = Math.round(Math.random() * 10);
}

function getComputerChoice() {
  /*Computer Choice f(x) & Start here*/
  number();
  while (randomNumber == 0 || randomNumber == 10) {
    number();
  } /*This makes a randomNumber from 1 to 9 and we give equal chances to every possibility*/
  if (randomNumber <= 3) {
    computerSelection = "ROCK";
  } else if (randomNumber <= 6) {
    computerSelection = "PAPER";
  } else {
    computerSelection = "SCISSOR";
  }
  return computerSelection;
}

function playerSelectionCheck() {
  /*Player Selection f(x) & Start here*/
  playerSelection = prompt(
    "Choose and start playing the game!",
    "ROCK, PAPER or SCISSOR"
  );
  playerSelection =
    playerSelection.toUpperCase(); /*This helps ignoring case sensitive*/
  if (
    !(
      playerSelection === "ROCK" ||
      playerSelection === "PAPER" ||
      playerSelection === "SCISSOR"
    )
  ) {
    playerSelectionCheck();
  } else {
    return playerSelection;
  }
}

function gameTied() {
  /*Tied Game check f(x) & Start here*/
  if (playerSelection === computerSelection) {
    gameWinner = "Tied game, try again!";
    winnedMatches -= 1;
  } else {
    noTiedGame();
  }
  return {gameWinner, winnedMatches};
}

function noTiedGame() {
  /*No tied game f(x) & Start here*/
  gameWinner = "You win the match! You are amazing!";
  switch (playerSelection) {
    case "ROCK": {
      if (computerSelection === "PAPER") {
        gameWinner = "You lose!, PAPER beats ROCK";
        winnedMatches -= 1;
      }
      break;
    }
    case "PAPER": {
      if (computerSelection === "SCISSOR") {
        gameWinner = "You lose!, SCISSOR beats PAPER";
        winnedMatches -= 1;
      }
      break;
    }
    case "SCISSOR": {
      if (computerSelection === "ROCK") {
        gameWinner = "You lose!, ROCK beats SCISSOR";
        winnedMatches -= 1;
      }
      break;
    }
  }
  return {gameWinner, winnedMatches};
}

function game() {
  /*This is the game main F(x) & Start here*/
  getComputerChoice();
  playerSelectionCheck();
  gameTied(); /*This f(x) call gameNoTied() and that combo give the first Result before the loop*/
}

gameLoop(); /*This is the game loop f(x) & Start Here*/
function gameLoop() {
  for (; gameCounter < 5;) {
    gameCounter += 1;
    game();
  }
  alert("You win " + winnedMatches + "matches!");
  playAgain = prompt(
    "Do you wanna play again?",
    "Type YES or ANY key to exit."
  );
  playAgain = playAgain.toUpperCase();
  if (playAgain == "YES") {
    varInit(); /*This f(x) start again all var. values*/
    gameLoop();
  } else {
    alert("Thanks for playing the game!");
  }
}
