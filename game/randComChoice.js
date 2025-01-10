import { wpns, computerChoice } from './index.js';

export function randomComputerChoice() {
    const randomIndex = Math.floor(Math.random() * wpns.length);
    const randomChoice = wpns[randomIndex];
    computerChoice.textContent = randomChoice.id;
}