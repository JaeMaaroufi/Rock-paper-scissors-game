// Globally rock= 0, paper=1, scissors = 2

function userChoice() {
  let userInput = prompt("Rock, paper or scissors?");
  return userInput.toLowerCase().trim();
}
function computerChoice() {
  let computerInput = Math.round(Math.random() * 2);
  return computerInput;
}

function compareChoices(userInput, computerInput) {
  if (
    (userInput === "rock" && computerInput === 2) ||
    (userInput === "paper" && computerInput === 0) ||
    (userInput === "scissors" && computerInput === 1)
  ) {
    alert("You won!");
  } else if (
    (userInput === "rock" && computerInput === 1) ||
    (userInput === "paper" && computerInput === 2) ||
    (userInput === "scissors" && computerInput === 0)
  ) {
    alert("You Lost!");
  } else if (
    (userInput === "rock" && computerInput === 0) ||
    (userInput === "paper" && computerInput === 1) ||
    (userInput === "scissors" && computerInput === 2)
  ) {
    alert("It's a tie!!");
  } else {
    alert("Input a valid Choice");
  }
}

for (let attempt = 1; attempt <= 5; attempt++) {
  let user = userChoice();
  let computer = computerChoice();
  compareChoices(user, computer);
  alert(`Attempts left: ${5 - attempt}`);
}
