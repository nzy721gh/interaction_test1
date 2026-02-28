// 处理点击“爱”
function handleChoice(choice) {
    const resultText = document.getElementById('result');
    const questionText = document.getElementById('question');
    const btnGroup = document.querySelector('.button-group');
    const audio = document.getElementById('bgm');

    if (choice === 'yes') {
        // 1. 播放音乐 Loving Stranger
        audio.play().catch(() => {
            console.log("音频播放需要用户交互");
        });

        // 2. 隐藏按钮区域
        btnGroup.style.display = 'none';
        
        // 3. 更新文案
        questionText.innerHTML = "我就知道！！❤️";
        resultText.innerText = "正在为你播放 Loving Stranger... 🎵";

        // 4. 满屏爱心大爆发
        for (let i = 0; i < 60; i++) {
            setTimeout(createHeart, i * 50);
        }
    }
}

// 创建爱心粒子
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // 固定从屏幕中心发射
    heart.style.left = '50%';
    heart.style.top = '50%';
    
    // 随机散射方向和距离 (利用 CSS 变量)
    const angle = Math.random() * Math.PI * 2; // 360度随机角度
    const velocity = 200 + Math.random() * 300; // 随机力度
    const x = Math.cos(angle) * velocity + 'px';
    const y = Math.sin(angle) * velocity + 'px';
    
    heart.style.setProperty('--x', x);
    heart.style.setProperty('--y', y);
    
    document.body.appendChild(heart);
    
    // 动画结束后移除元素，释放内存
    setTimeout(() => {
        heart.remove();
    }, 1800);
}

// 让 "No" 按钮调皮地跑掉
function moveButton() {
    const btn = document.getElementById('no-btn');
    
    // 计算随机坐标，保留边距防止跑出屏幕外
    const padding = 100;
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;
    
    // 随机位置
    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);
    
    btn.style.position = 'fixed'; 
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    
    // 增加一点点趣味：每次跑掉时改一下文字
    const randomTexts = ["不准点", "选错了哦", "诶嘿跑了", "抓不到我", "再试试？"];
    btn.innerText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
}
