/*Variables declaration*/
let computerSelection = "";
let playerSelection = "";
let gameWinner="";
/*Variables declaration*/

/*Computer Choice f(x) Start here*/ /*Computer Choice f(x) Start here*/
function getComputerChoice() {
  let randomNumber = Math.round(
    Math.random() * 10
  ); /*This make a randomNumber from 1 to 10*/
  computerSelection = "SCISSOR";
  if (randomNumber <= 3) {
    computerSelection = "ROCK";
  } else if (randomNumber <= 6) {
    computerSelection = "PAPER";
  }
  return computerSelection;
}
/*Computer Choice f(x) Finish here*/ /*Computer Choice f(x) Finish here*/

/*Player Selection f(x) Start here*/ /*Player Selection f(x) Start here*/
function playerSelectionCheck() {
  playerSelection = prompt(
    "Choose and start playing the game!",
    "ROCK, PAPER or SCISSOR"
  );
  playerSelection =
    playerSelection.toUpperCase(); /*This ignore case sensitive later*/
  if (!(
    (playerSelection === "ROCK") ||
    (playerSelection === "PAPER") ||
    (playerSelection === "SCISSOR")
  )) {
    playerSelectionCheck();
  } else {
    return playerSelection;
  }
}
/*Player Selection f(x) Finish here*/ /*Player Selection f(x) Finish here*/

/*Tied Game check f(x) Start here*/       /*Tied Game f(x) Start here*/
function gameTied() {
    if  (playerSelection === computerSelection) {
        gameWinner = "Tied game, try again!"
    }   else    {
        gameNoTied();
    }
    return  gameWinner;
}
/*Tied Game check f(x) Finish here*/      /*Tied Game f(x) Finish here*/

getComputerChoice();
playerSelectionCheck();
gameTied();