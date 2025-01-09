
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    console.log(rock, paper, scissors); // Debugging: Check if elements are correctly selected

    let wpns = [rock, paper, scissors];

    wpns.forEach(wpn => {
      wpn.addEventListener('click', () => {
        console.cog(wpn.id);
      })
    });