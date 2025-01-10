import { randomComputerChoice } from "./randComChoice.js";

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

export var userChoice = document.getElementById('user-choice');
export var computerChoice = document.getElementById('com-choice');
export const endingResult = document.getElementById('end-result');

export let wpns = [rock, paper, scissors];

wpns.forEach(wpn => {
  wpn.addEventListener('click', () => {
      userChoice.textContent = wpn.id;
      randomComputerChoice();
  });
});

function userWin() {
  if (userChoice.id === rock && computerChoice.id === scissors ||
      userChoice.id === paper && computerChoice.id === rock ||
      userChoice.id === scissors && computerChoice.id === paper) {
          endingResult.textContent = 'You win!';
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