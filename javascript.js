function getRandom(max=1){
  return (Math.random() * max);
}

function getComputerChoice() {
  let randomNumber = getRandom();
  let computerChoice = randomNumber < (1 / 3) ? 'rock' :
    randomNumber <= (2 / 3) ? 'scissors' : 'paper';
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  let result = playerChoice == computerChoice 
    ? 'Tie'
    : (playerChoice == 'rock' && computerChoice == 'scissors' ||
       playerChoice == 'scissors' && computerChoice == 'paper' ||
       playerChoice == 'paper' && computerChoice == 'rock')
    ? `You Win! ${playerChoice} beats ${computerChoice}`
    : `You Lose! ${computerChoice} beats ${playerChoice}`;
  return result;
}

const computerChoice = getComputerChoice();
const playerChoice = prompt("You choice: ").trim().toLowerCase();
console.log(computerChoice);
console.log(playRound(playerChoice, computerChoice));

