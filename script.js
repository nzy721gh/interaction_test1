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
    } else if (choice === 'no') {
        questionText.innerText = "不可以，重选！！！";
        resultText.innerText = "我叫你重新按过！！！";
        resetBtn.style.display = 'inline-block';
    }

    // Show the reset button
    
}

function resetPage() {
    location.reload(); // Refreshes the page to start over
}
