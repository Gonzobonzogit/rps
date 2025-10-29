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

  if(userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Victory!';
    } else return 'User Victory!';
    }
  }



function playGame(userInput){
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  document.getElementById('user').textContent = `You: ${userChoice}`;
  document.getElementById('computer').textContent = `Computer: ${computerChoice}`;

  const result = determineWinner(userChoice, computerChoice);
  const resultE1 = document.getElementById('result');
  resultE1.textContent = result;
}

if (result === 'BOOM! User destroyed computer!') {
  resultE1.classList.add('bomb-result');
} else {
  resultE1.classList.remove('bomb-result');
}





