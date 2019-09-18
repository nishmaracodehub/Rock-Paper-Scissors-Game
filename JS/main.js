let userScore = 0;
let compScore = 0;

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

const win = (user, computer) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  const userWord = "user".fontsize(3).sub();
  const compWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML =
    user === "rock"
      ? `${user}${userWord} beats ${computer}${compWord}. You Win!`
      : user === "paper"
      ? `${user}${userWord} covers ${computer}${compWord}. You Win!`
      : `${user}${userWord} cuts ${computer}${compWord}. You Win!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("green-glow");
  }, 1000);
};

const lose = (user, computer) => {
  compScore++;
  compScore_span.innerHTML = compScore;
  const userWord = "user".fontsize(3).sub();
  const compWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML =
    computer === "paper"
      ? `${computer}${compWord} covers ${user}${userWord}. You Lose!`
      : computer === "rock"
      ? `${computer}${compWord} beats ${user}${userWord}. You Lose!`
      : `${computer}${compWord} cuts ${user}${userWord}. You Lose!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("red-glow");
  }, 1000);
};

const draw = (user, computer) => {
  const userWord = "user".fontsize(3).sub();
  const compWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${user}${userWord} equals ${computer}${compWord}. It's a Draw!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("grey-glow");
  }, 1000);
};

const game = userChoice => {
  const compChoice = getComputerChoice();
  console.log("userchoice is: " + userChoice);
  console.log("compChoice is: " + compChoice);
  switch (userChoice + compChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, compChoice);
      break;
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      draw(userChoice, compChoice);
      break;
    default:
      lose(userChoice, compChoice);
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
