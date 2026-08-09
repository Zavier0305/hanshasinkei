const startButton = document.getElementById("start-button");
const gameArea = document.getElementById("game-area");

const easyButton = document.getElementById("easy-button");
const normalButton = document.getElementById("normal-button");
const hardButton = document.getElementById("hard-button");

const darkModeButton = document.getElementById("dark-mode-button");

const settingsButton = document.getElementById("settings-button");
const settingsPanel = document.getElementById("settings-panel");

let reactionStart;
let clickTime;
let gameStarted = false;

let difficulty = "normal";
let darkmode = false;


// 設定画面の開閉
settingsButton.addEventListener("click", function() {

    if (settingsPanel.style.display === "none") {
        settingsPanel.style.display = "block";
    } else {
        settingsPanel.style.display = "none";
    }

});


// EASY
easyButton.addEventListener("click", function() {

    difficulty = "easy";
    console.log("EASY");

});


// NORMAL
normalButton.addEventListener("click", function() {

    difficulty = "normal";
    console.log("NORMAL");

});


// HARD
hardButton.addEventListener("click", function() {

    difficulty = "hard";
    console.log("HARD");

});


// ダークモード
darkModeButton.addEventListener("click", function() {

    darkmode = !darkmode;

    if (darkmode === true) {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        settingsPanel.style.backgroundColor = "#222";
        settingsPanel.style.color = "white";

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        settingsPanel.style.backgroundColor = "white";
        settingsPanel.style.color = "black";

    }

});


// ゲームスタート
startButton.addEventListener("click", function() {

    console.log("ゲームスタート");

    gameArea.textContent = "ゲームスタート";
    gameArea.style.backgroundColor = "lime";

    let waitTime;


    // 難易度によって待ち時間を変更
    if (difficulty === "easy") {

        waitTime = Math.random() * 3000 + 1000;

    }

    if (difficulty === "normal") {

        waitTime = Math.random() * 5000 + 2000;

    }

    if (difficulty === "hard") {

        waitTime = Math.random() * 7000 + 3000;

    }


    // 「今！」を表示
    setTimeout(function() {

        gameArea.textContent = "今！";
        gameArea.style.backgroundColor = "red";

        reactionStart = Date.now();

        gameStarted = true;

    }, waitTime);

});


// ゲームエリアをクリック
gameArea.addEventListener("click", function() {

    if (!gameStarted) return;


    clickTime = Date.now();

    const reactionTime = clickTime - reactionStart;

    const reactionTimeSecond = reactionTime / 1000;


    gameArea.textContent = reactionTimeSecond + "秒でした！";

    gameStarted = false;

});