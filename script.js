function handleChoice(choice) {
    const resultText = document.getElementById('result');
    const questionText = document.getElementById('question');
    const btnGroup = document.querySelector('.button-group');
    const resetBtn = document.getElementById('reset-btn');

    // Hide the initial choice buttons
    btnGroup.style.display = 'none';

    // Scenario Logic
    if (choice === 'yes') {
        questionText.innerText = "恭喜你选对了！！";
        resultText.innerText = "爱上我是如此的正常的哟";
        resetBtn.style.display = 'none';
    } 

    // Show the reset button
    
}

function moveButton() {
    const btn = document.getElementById('no-btn');
    
    // Calculate random positions within the visible window
    // We subtract the button size so it doesn't go off-screen
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    // Apply new coordinates
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}
