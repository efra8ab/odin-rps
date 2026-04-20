
const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomChoice = options[randomIndex]
    return randomChoice
};

const getHumanChoice = () => {
    const choice = prompt('Enter your choice')
    return choice
};

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (ComputerChoice, HumanChoice) => {
      const lowerHumanChoice = HumanChoice.toLowerCase();

      if (ComputerChoice === "rock") {
        if (lowerHumanChoice === "rock") {
          console.log("A tie! .... Try again!");
        } else if (lowerHumanChoice === "paper") {
          console.log("You won!.... paper beats rock!");
          humanScore += 1;
        } else if (lowerHumanChoice === "scissors") {
          console.log("You lose!... rock beats scissors");
          computerScore += 1;
        }
      }

      if (ComputerChoice === "paper") {
        if (lowerHumanChoice === "rock") {
          console.log("You lose!... paper beats rock");
          computerScore += 1;
        } else if (lowerHumanChoice === "paper") {
          console.log("A tie! .... Try again!");
        } else if (lowerHumanChoice === "scissors") {
          console.log("You won!... scissors beats paper");
          humanScore += 1;
        }
      }

      if (ComputerChoice === "scissors") {
        if (lowerHumanChoice === "rock") {
          console.log("You won!... rock beats scissors");
          humanScore += 1;
        } else if (lowerHumanChoice === "paper") {
          console.log("You lose!... scissors beats paper");
          computerScore += 1;
        } else if (lowerHumanChoice === "scissors") {
          console.log("A tie! .... Try again!");
        }
      }
    };

    let n = 1
    while (n <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection)
        n += 1
    }

} 

playGame()