let userScore = 0;
let computerScore = 0;
// DOM variables
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
// geet first element in the document with class="scoreboard"
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. You win! &#128515`;
  scoreBoard_div.classList.add('green-glow');
  setTimeout(() => scoreBoard_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord}. You lost... &#128557`;
  scoreBoard_div.classList.add('red-glow');
  setTimeout(() => scoreBoard_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. It's a draw. &#128528`;
  scoreBoard_div.classList.add('gray-glow');
  setTimeout(() => scoreBoard_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
  }
}

function main() {
  rock_div.addEventListener('click', () => game("Rock"));
  paper_div.addEventListener('click', () => game("Paper"));
  scissors_div.addEventListener('click', () => game("Scissors"));
}

main();
