
let humanScore = 0
let computerScore = 0
const displayUserScore = document.querySelector('.user-score')
const displayComputerScore = document.querySelector('.computer-score')

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomChoice = options[randomIndex]
    return randomChoice
};


const userSelects = () => {

  const rock = document.querySelector(".select-rock");
  rock.addEventListener("click", () => {
    userSelectsHandler(rock)
  });
  
  const paper = document.querySelector(".select-paper");
  paper.addEventListener("click", () => {
    userSelectsHandler(paper)
  });
  
  const scissors = document.querySelector(".select-scissors");
  scissors.addEventListener("click", () => {
    userSelectsHandler(scissors)
  });

};

const userSelectsHandler = (choice) => {
  const computerChoice = getComputerChoice();
  playRound(computerChoice, choice.textContent);
}

const renderScore = () => {
    displayComputerScore.textContent = computerScore;
    displayUserScore.textContent = humanScore;
}


    const playRound = (ComputerChoice, HumanChoice) => {
      const result = document.querySelector('.result')

      if (humanScore + computerScore >= 5) {
        return
      }

      const lowerHumanChoice = HumanChoice.toLowerCase();

      if (ComputerChoice === "rock") {
        if (lowerHumanChoice === "rock") {
          result.textContent = "A tie! .... Try again!";
        } else if (lowerHumanChoice === "paper") {
          result.textContent = "You won!.... paper beats rock!";
          humanScore += 1;
        } else if (lowerHumanChoice === "scissors") {
          result.textContent = "You lose!... rock beats scissors";
          computerScore += 1;
        }
      }

      if (ComputerChoice === "paper") {
        if (lowerHumanChoice === "rock") {
          result.textContent = "You lose!... paper beats rock";
          computerScore += 1;
        } else if (lowerHumanChoice === "paper") {
          result.textContent = "A tie! .... Try again!";
        } else if (lowerHumanChoice === "scissors") {
          result.textContent = "You won!... scissors beats paper";
          humanScore += 1;
        }
      }

      if (ComputerChoice === "scissors") {
        if (lowerHumanChoice === "rock") {
          result.textContent = "You won!... rock beats scissors";
          humanScore += 1;
        } else if (lowerHumanChoice === "paper") {
          result.textContent = "You lose!... scissors beats paper";
          computerScore += 1;
        } else if (lowerHumanChoice === "scissors") {
          result.textContent = "A tie! .... Try again!";
        }
      }

      renderScore()

      if (humanScore + computerScore === 5) {
        result.textContent = humanScore > computerScore 
          ? 'You win!!!'
          : 'Machine wins!!!'
      }

    };

renderScore()
userSelects()