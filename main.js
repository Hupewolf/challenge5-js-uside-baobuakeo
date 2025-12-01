let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "Tie";
    } else if (
        (userChoice === "rock"     && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper")    ||
        (userChoice === "paper"    && computerChoice === "rock")
    ) {
        result = "You Win!";
        userScore++;
    } else {
        result = "You Lose";
        computerScore++;
    }
    const comResult = document.getElementById("comresult");
    comResult.textContent = `${computerChoice} ${emoji(computerChoice)}`
    const resultBox = document.getElementById("resultBox");
    resultBox.textContent = `Bạn: ${emoji(userChoice)} — Máy: ${emoji(computerChoice)} → ${result}`;

    resultBox.classList.remove("action");
    void resultBox.offsetWidth; 
    resultBox.classList.add("action");

    document.getElementById("scoreBox").textContent = `Bạn: ${userScore} — Máy: ${computerScore}`;
}

function emoji(str) {
    if (str === "rock") return "👊";
    if (str === "paper") return "✋";
    return "✌️";
}