const message = document.querySelector(".msg");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let pScore = 0;
let cScore = 0;

function checkWinner(p, c) {
    if ( p === c ) {
        return "Draw";
    }
    if ( p === "Rock" ) {
        if ( c === "Paper" ) {
            return "Computer";
        } else {
            return "Player";
        }
    }
    if ( p === "Paper" ) {
        if ( c === "Scissors" ) {
            return "Computer";
        } else {
            return "Player";
        }
    }
    if ( p === "Scissors" ) {
        if ( c === "Rock" ) {
            return "Computer";
        } else {
            return "Player";
        }
    }
}

function showMsg(msg) {
    message.innerHTML = msg;
}

function playGame(e) {
    let pSelect = e.target.innerText;
    let cSelect = Math.random();
    if ( cSelect < 0.33 ) {
        cSelect = "Rock";
    } else if ( cSelect < 0.66 ) {
        cSelect = "Paper";
    } else {
        cSelect = "Scissors";
    }
    let winner = checkWinner(pSelect, cSelect);
    if (winner === "Player") {
        pScore++;
        winner += " Wins!";
    } else if (winner === "Computer") {
        cScore++;
        winner += " Wins!";
    } else {
        winner += " - Nobody Wins This Round.";
    }
    score.innerHTML = `Player: ${pScore} | Computer: ${cScore}`;
    let resultMsg = `${pSelect} vs ${cSelect} <br><br><b>${winner}</b>`;
    showMsg(resultMsg);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

