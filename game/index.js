import { randomComputerChoice } from "./randComChoice.js";

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

export var userChoice = document.getElementById('user-choice');
export var computerChoice = document.getElementById('com-choice');
export const endingResult = document.getElementById('ending-result');

export let wpns = [rock, paper, scissors];

wpns.forEach(wpn => {
  wpn.addEventListener('click', () => {
      userChoice.textContent = wpn.id;
      randomComputerChoice();
  });
});