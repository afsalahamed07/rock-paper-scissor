const weapons = ["rock", "paper", "scissor"];
const conCombination = [
    ["rock", "scissor"],
    ["paper", "rock"],
    ["scissor", "paper"]
];


function computerPlay(weapons_array = weapons) {
    return weapons_array[Math.floor((Math.random() * (3 - 0)))];
}

function playRound(computerSelection, playerSelection, conCombination_array = conCombination) {
    let winner = "computer";

    if (computerSelection === playerSelection) {
        winner = "draw";
    } else {

        for (let i = 0; i < conCombination_array.length; i++) {
            if (playerSelection === conCombination_array[i][0] && computerSelection === conCombination_array[i][1]) {
                winner = "player";
                break;
            }

        }
    }
    return winner;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter choice of weapon", "Rock")
            .toLowerCase();

        let winner = playRound(computerSelection, playerSelection);

        if (winner === "player") {
            console.log(`You win; ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats
                 ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
        } else if (winner === "draw") {
            console.log("Draw")
        } else {
            console.log(`You lose; ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats
            ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
        }
    }
}