const startButton = document.getElementById("start-button");
const gameArea = document.getElementById("game-area");

let reactionStart;
let clickTime;
let gameStarted = false;

startButton.addEventListener("click", function() {
    console.log("ゲームスタート");
    gameArea.textContent = "ゲームスタート";
    gameArea.style.backgroundColor = "lime";

    setTimeout(function() {
        gameArea.textContent = "今！";
        gameArea.style.backgroundColor = "red";

        reactionStart = Date.now();
        gameStarted = true;
    }, Math.random() * 5000 + 2000);
});

gameArea.addEventListener("click", function() {
    if (!gameStarted) return;

    clickTime = Date.now();

    const reactionTime = clickTime - reactionStart;
    const reactionTimeSecond = reactionTime / 1000;

    gameArea.textContent = reactionTimeSecond + "秒でした！";

    gameStarted = false;
});