let userScore = 0;
let compScore = 0;
const userWord = "user".fontsize(3).sub();
const compWord = "comp".fontsize(3).sub();

// DOM variables (caching DOM variables to use them later)
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Add Event Listeners to buttons
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
};

const win = (user, computer, userChoice_div) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${user}${userWord} beats ${computer}${compWord}. You Win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("green-glow");
  }, 1000);
};

const lose = (user, computer, userChoice_div) => {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${user}${userWord} loses to ${computer}${compWord}. You Lose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("red-glow");
  }, 1000);
};

const draw = (user, computer, userChoice_div) => {
  result_p.innerHTML = `${user}${userWord} equals ${computer}${compWord}. It's a Draw!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("grey-glow");
  }, 1000);
};

const game = userChoice => {
  const compChoice = getComputerChoice();
  const userChoice_div = document.getElementById(userChoice);
  switch (userChoice + compChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, compChoice, userChoice_div);
      break;
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      draw(userChoice, compChoice, userChoice_div);
      break;
    default:
      lose(userChoice, compChoice, userChoice_div);
      break;
  }
};

function main() {
  rock_div.addEventListener("click", () => {
    game("rock");
  });

  paper_div.addEventListener("click", () => {
    game("paper");
  });

  scissors_div.addEventListener("click", () => {
    game("scissors");
  });
}

main();
