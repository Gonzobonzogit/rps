const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase();

if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
  return userInput;
} else {
  console.log('ERROR: invalid choice');
}
}

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  
  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'game is a tie';
  }
  
  if (userChoice === 'bomb') {  // 💥 BONUS AUTO-WIN!
    return 'BOOM! User destroyed computer!';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Victory!';
    } else {
      return 'User Victory!';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'User Victory!';
    } else {
      return 'Computer Victory!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'User Victory!';
    } 
  }
}


const playGame = () => {
  const userChoice = getUserChoice('bomb');  // Or 'rock'/'paper'/'scissors'
  const computerChoice = getComputerChoice();
  
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();


