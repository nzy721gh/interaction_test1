/* Center the entire container in the middle of the screen */
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Microsoft YaHei', sans-serif;
    background-color: #f0f0f0; /* Optional: light background */
}

.container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

/* Style for the specific word */
.highlight {
    color: red;
    font-weight: bold;
    font-size: 1.2em; /* Makes it slightly larger for emphasis */
}

.button-group {
    display: flex;
    gap: 20px;
    height: 50px; /* Gives the buttons some breathing room */
}

button {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
}



/* The heart element style */
.heart {
    position: absolute;
    color: #ff4b2b;
    font-size: 24px;
    user-select: none;
    pointer-events: none; /* So they don't block clicks */
    z-index: 1000;
    animation: floatUp 1.5s ease-out forwards;
}

/* The floating animation */
@keyframes floatUp {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(var(--x), var(--y)) scale(1.5);
        opacity: 0;
    }
}
