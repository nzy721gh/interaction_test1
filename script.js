function handleChoice(choice) {
    const resultText = document.getElementById('result');
    const questionText = document.getElementById('question');
    const btnGroup = document.querySelector('.button-group');
    const resetBtn = document.getElementById('reset-btn');

    // Hide the initial choice buttons
    btnGroup.style.display = 'none';

    // Scenario Logic
    if (choice === 'enter') {
        questionText.innerText = "Scenario 1: The Explorer";
        resultText.innerText = "You find a room filled with gold and ancient scrolls! You are now a wealthy scholar.";
    } else if (choice === 'run') {
        questionText.innerText = "Scenario 2: The Cautious";
        resultText.innerText = "You live a long, safe, and incredibly boring life. The door remains a mystery forever.";
    }

    // Show the reset button
    resetBtn.style.display = 'inline-block';
}

function resetPage() {
    location.reload(); // Refreshes the page to start over
}
