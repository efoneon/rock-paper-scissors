import { randomComputerChoice } from "./randComChoice.js";

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

export const userChoice = document.getElementById('user-choice');
export const computerChoice = document.getElementById('computer-choice');
export const endingResult = document.getElementById('ending-result');
export const wpns = [rock, paper, scissors];

wpns.forEach(wpn => {
  wpn.addEventListener('click', () => {
      userChoice.textContent = wpn.id;
      randomComputerChoice();
      checkWinner();
  });
});

function checkWinner() {
  const userValue = userChoice.textContent;
  const computerValue = computerChoice.textContent;

  if (userValue === computerValue) {
    endingResult.textContent = "It's a tie!"
  } else if (userValue === 'rock' && computerValue === 'scissors' ||
      userValue === 'paper' && computerValue === 'rock' ||
      userValue === 'scissors' && computerValue === 'paper') {
          endingResult.textContent = 'You win!';
  } else {
    endingResult.textContent = 'Computer wins!';
  }
}

function computerWin() {
  if (userChoice.id === rock && computerChoice.id === paper ||
      userChoice.id === paper && computerChoice.id === scissors ||
      userChoice.id === scissors && computerChoice.id === rock) {
          endingResult.textContent = 'Computer wins!';
  }
}

function draw() {
  if (userChoice.id === computerChoice.id) {
      endingResult.textContent = 'Draw!';
  }
}