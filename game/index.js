const choices = ['rock', 'paper', 'scissors']

function getRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return 'draw'
    
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user'
    } else {
        return 'computer'
    }
}

document.getElementById('weapon-choice-container').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return

    // Get player choices.
    const userChoice = e.target.id
    const computerChoice = getRandomChoice()
    
    // Put player choices on the screen.
    document.getElementById('user-choice').textContent = userChoice
    document.getElementById('computer-choice').textContent = computerChoice
    
    // Determine which player won.
    const winner = getWinner(userChoice, computerChoice)
    const endingResultEl = document.getElementById('ending-result')

    // Display the winner.
    if (winner === 'draw') {
        endingResultEl.textContent = 'Draw!'
    } else if (winner === 'user') {
        endingResultEl.textContent = 'You win!'
    } else {
        endingResultEl.textContent = 'Computer wins!'
    }
})