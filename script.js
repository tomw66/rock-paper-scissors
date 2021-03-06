function computerPlay(){
    let randomIndex =  Math.floor(Math.random() * 3); 
    let options = ["Rock", "Paper", "Scissors"];
    return options[randomIndex];   
}

function capitalize(word){
    let initialCharacter = word.slice(0, 1);
    initialCharacter = initialCharacter.toUpperCase();
    let remainingCharacters = word.slice(1);
    remainingCharacters = remainingCharacters.toLowerCase();
    return initialCharacter + remainingCharacters;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    if (playerSelection === computerSelection) {
        return "Draw"
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "Loss";
        }
        else {
            return "Win";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return "Loss";
        }
        else {
            return "Win";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "Loss";
        }
        else {
            return "Win";
        }
    }
    else {
        return "Illegal"
    }
};

/*function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i <= 4; i++) {
        let playerSelection = window.prompt("Round " + (i + 1) + "! What is your move?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === "Win") {
            playerScore++;
        }
        else if (result === "Loss") {
            computerScore++;
        }

        else {
            i--
        }
    console.log(playerSelection, playerScore, computerSelection, computerScore)}
    if (playerScore > computerScore) {
        return "You Win! You scored " + playerScore + ", the computer scored " + computerScore;
    }
    else if (playerScore < computerScore) {
        return "You Lose! You scored " + playerScore + ", the computer scored " + computerScore;
    }
    else if (playerScore === computerScore) {
        return "A draw! You scored " + playerScore + ", the computer scored " + computerScore;
    }
};*/
function runningTotal(playerSelection, computerSelection) {
    let computerScore = 0;
    let playerScore = 0;
    let result = playRound(playerSelection, computerSelection);
    if (result === "Win") {
        playerScore++;
    }
    else if (result === "Loss") {
        computerScore++;
    }
};
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');
const scoreBoard = document.querySelector('#scoreBoard');
buttons.forEach((button) => {

  button.addEventListener('click', () => {
      result = playRound(button.id, computerPlay());
      if (result === "Win") {
        playerScore++;
    }
      else if (result === "Loss") {
        computerScore++;
    }
    scoreBoard.textContent = result + "! Player: " + playerScore + " Computer: " + computerScore;
    if (playerScore === 5) {
        scoreBoard.textContent = "You win!!!";
        computerScore = 0, playerScore = 0;
    }
    else if (computerScore === 5) {
        scoreBoard.textContent = "You lose!!!";
        computerScore = 0, playerScore = 0;
    }
  });
});
