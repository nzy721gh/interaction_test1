function handleChoice(choice) {
    const resultText = document.getElementById('result');
    const questionText = document.getElementById('question');
    const btnGroup = document.querySelector('.button-group');
    const audio = document.getElementById('bgm');

    if (choice === 'yes') {
        // 1. 播放音乐 (Loving Stranger)
        audio.play().catch(e => console.log("需用户交互后播放"));

        // 2. 隐藏按钮
        btnGroup.style.display = 'none';
        
        // 3. 改变文案
        questionText.innerHTML = "我就知道！❤️";
        resultText.innerText = "正在为你播放 Loving Stranger...";

        // 4. 满屏爱心
        for (let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 60);
        }
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // 初始位置在屏幕中央
    heart.style.left = '50%';
    heart.style.top = '50%';
    
    // 生成随机的爆炸轨迹
    const x = (Math.random() - 0.5) * 800; 
    const y = (Math.random() - 0.5) * 800; 
    heart.style.setProperty('--x', `${x}px`);
    heart.style.setProperty('--y', `${y}px`);
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1500);
}

function moveButton() {
    const btn = document.getElementById('no-btn');
    // 随机计算位置，确保不超出窗口
    const padding = 50;
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - padding);
    
    btn.style.position = 'fixed'; // 使用 fixed 确保它能在全屏乱跑
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}
