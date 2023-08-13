function getRandom(max=1){
  return (Math.random() * max);
}

function getComputerChoice() {
  const randomNumber = getRandom();
  let computerChoice = randomNumber < (1 / 3) ? 'rock' :
    randomNumber <= (2 / 3) ? 'scissors' : 'paper';
  return computerChoice;
}

console.log(getComputerChoice());