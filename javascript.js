const score = {
  player: 0,
  computer: 0
};

function getRandom(max=1){
  return (Math.random() * max);
}

function getComputerChoice() {
  const randomNumber = getRandom();
  const computerChoice = randomNumber < (1 / 3) ? 'rock' :
    randomNumber <= (2 / 3) ? 'scissors' : 'paper';
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  const result = playerChoice == computerChoice 
    ? `Tie. Score: ${++score.player}-${++score.computer}`
    : (playerChoice == 'rock' && computerChoice == 'scissors' ||
       playerChoice == 'scissors' && computerChoice == 'paper' ||
       playerChoice == 'paper' && computerChoice == 'rock')
    ? `You Win! ${playerChoice} beats ${computerChoice}. Score: ${++score.player}-${score.computer}`
    : `You Lose! ${computerChoice} beats ${playerChoice}. Score: ${score.player}-${++score.computer}`;
  return result;
}

function game() {
  while (score.computer < 3 && score.player < 3) {
    const playerChoice = prompt('Your choice: ').trim().toLowerCase();
    const computerChoice = getComputerChoice();
    alert(playRound(playerChoice, computerChoice));
  }
  const result = score.player == score.computer
    ? 'That\'s a Tie! What a DRAMA.'
    : score.computer < score.player
    ? 'Huh, you won... You are just being lucky :c'
    : 'You LOST! Get better FOOL!';
  alert(result);
}

game();

