const weapons = ["Rock", "Paper", "Scissor"];
const conCombination = [
    ["Rock", "Scissor"],
    ["Paper", "Rock"],
    ["Scissor", "Paper"]
];

let key = 0;
let pScore = 0;
let cScore = 0;

function computerPlay(weapons_array = weapons) {
    return weapons_array[Math.floor((Math.random() * (3 - 0)))];
}

function playRound(computerSelection, playerSelection, conCombination_array = conCombination) {
    let winner = "computer";

    if (computerSelection == playerSelection) {
        winner = "draw";
    } else {

        for (let i = 0; i < conCombination_array.length; i++) {
            if (playerSelection == conCombination_array[i][0] && computerSelection === conCombination_array[i][1]) {
                winner = "player";
                break;
            }

        }
    }
    return winner;
}

function game(playerSelection) {
    let computerSelection = computerPlay();
    // let playerSelection = prompt("Enter choice of weapon", "Rock")
    //     .toLowerCase();


    let winner = playRound(computerSelection, playerSelection);

    if (winner === "player") {
        pScore++;
        key++;
        playerScore.textContent = pScore;
        commentary.textContent = `You win ${playerSelection} beats
                 ${computerSelection}`;
    } else if (winner === "draw") {
        // increasing the plat time when game is draw
        // key--;
        commentary.textContent = "Draw"
    } else {
        cScore++;
        key++;
        computerScore.textContent = cScore;
        commentary.textContent = `You lose ${computerSelection} beats
            ${playerSelection}`;
    }

    return key;
}