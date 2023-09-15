const score = {
  player: 0,
  computer: 0
};

const CHOICES = ['rock', 'scissors', 'paper'];
const WINNING_COMBINATIONS = {
  'rock': 'scissors', 
  'scissors': 'paper', 
  'paper': 'rock'
};


function getRandom(max=1){
  return (Math.random() * max);
}

function getComputerChoice() {
  const randomNumber = getRandom();
  const computerChoice = randomNumber < (1 / 3) 
    ? 'rock' : randomNumber <= (2 / 3) 
    ? 'scissors' : 'paper';
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  const result = playerChoice == computerChoice 
    ? `Tie. Score: ${score.player}-${score.computer}`
    : WINNING_COMBINATIONS[playerChoice] == computerChoice
    ? `You Win! ${playerChoice} beats ${computerChoice}. Score: ${++score.player}-${score.computer}`
    : `You Lose! ${computerChoice} beats ${playerChoice}. Score: ${score.player}-${++score.computer}`;
  return result;
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    const container = document.querySelector('#container');
    const results = document.createElement('h3');
    results.textContent = playRound(playerChoice, computerChoice);
    if (container.hasChildNodes()) {
      container.lastChild.remove();
    }
    container.appendChild(results);
    if (score.player > 2 || score.computer > 2) {
      if (score.player > score.computer) {
        results.textContent = `You Won a game ! Score: ${score.player}-${score.computer}. You can continue playing..`;
      } else {
        results.textContent = `You Lost a game ! Score: ${score.player}-${score.computer}. You can continue playing..`;
      }
      score.player = 0;
      score.computer = 0;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id);
  })
});
