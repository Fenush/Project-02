let computerSelection = ""  // Store the computer selection
  , randomNumber = ""       // random number for computerSelection calcs
  , playerSelection = ""    // Store player selection input
  , gameWinner = ""         // Display the Output text at the end of each round
  , gameCounter = 0         // This is the loop counter
  , winnedMatches = "5"     // This count trough loses winned matches
  , wins = 0                // This count trough wins matches
  , attemptNumber = 0       // Attempts Counter
  , playAgain = ""          // PlayAgain option
  , fiveMatches = false      // 5Matches Ended     
  ;
function number() {
  randomNumber = Math.round(Math.random() * 10);
}

function getComputerChoice() {  //  Computer Choice f(x) & Start here
  number();
  while (randomNumber == 0 || randomNumber == 10) {
    number(); //  This makes a randomNumber from 1 to 9 and we give equal chances to every possibility
  }       
  if (randomNumber <= 3) {
      computerSelection = "ROCK";
  } else if (randomNumber <= 6) {
      computerSelection = "PAPER";
  } else {
      computerSelection = "SCISSOR";
  }
  return computerSelection;
}

function gameTied() { //  Tied Game check f(x) & Start here
  if (playerSelection === computerSelection) {
    attemptNumber+=1;
    gameWinner = dictionary[6];
    winnedMatches -= 1;
  } else {
    attemptNumber+=1;
    noTiedGame();
  }
  return { gameWinner, winnedMatches };
}

function noTiedGame() { //  No tied game f(x) & Start here
  gameWinner = dictionary[7];
  switch (playerSelection) {
    case "ROCK": {
      if (computerSelection === "PAPER") {
        gameWinner = dictionary[8];
        winnedMatches -= 1;
      }else{
        wins+=1;
      }
      break;
    }
    case "PAPER": {
      if (computerSelection === "SCISSOR") {
        gameWinner = dictionary[9];
        winnedMatches -= 1;
      }else{
        wins+=1;
      }
      break;
    }
    case "SCISSOR": {
      if (computerSelection === "ROCK") {
        gameWinner = dictionary[10];
        winnedMatches -= 1;
      }else{
        wins+=1;
      }
      break;
    }
  }
  return { gameWinner, winnedMatches, wins };
}

function matchesCounter(){  //  count five games and give the results
  if (gameCounter === 5){
    sectionMain.classList.add("clicked");
    h3SubTitle.textContent= dictionary[11] + winnedMatches + dictionary[12]; // Winned end message
    gameCounter = 0;  // we reset values now
    winnedMatches = "5";
    wins = 0;
    attemptNumber=0;
    fiveMatches=true;
    setTimeout(function () {
      sectionButtons.classList.remove("clicked");
      h2Title.textContent=dictionary[13];
      h2Title.classList.add("select");
      h3SubTitle.classList.remove("select");
      h3SubTitle.textContent="";
  }, 2000);
  }
}