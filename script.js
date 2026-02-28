function handleChoice(choice) {
    const resultText = document.getElementById('result');
    const questionText = document.getElementById('question');
    const btnGroup = document.querySelector('.button-group');
    const resetBtn = document.getElementById('reset-btn');

    if (choice === 'yes') {
        // Hide buttons
        btnGroup.style.display = 'none';
        
        // Success text
        questionText.innerHTML = "恭喜你选对了！！"; // Use innerHTML to keep span styling if needed
        resultText.innerText = "爱上我是如此的正常的哟";
        resetBtn.style.display = 'none';

        // Trigger the heart explosion!
        for (let i = 0; i < 20; i++) {
            createHeart();
        }
    } 
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Position the heart in the center of the screen
    heart.style.left = '50%';
    heart.style.top = '50%';
    
    // Randomize the direction of the burst using CSS variables
    const x = (Math.random() - 0.5) * 400; // Random horizontal spread
    const y = (Math.random() - 0.5) * 400; // Random vertical spread
    heart.style.setProperty('--x', `${x}px`);
    heart.style.setProperty('--y', `${y}px`);
    
    document.body.appendChild(heart);
    
    // Remove the heart from the DOM after animation finishes
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

// Your existing moveButton and resetPage functions...
function moveButton() {
    const btn = document.getElementById('no-btn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function resetPage() {
    location.reload();
}
