// basic selectors
let weaponBoxes = document.querySelectorAll(".weapon-box");
let btn = document.querySelector("#btn-custom");

let commentary = document.querySelector("#commentary p");

// insialization of values before game
let playerScoreBox = document.querySelector("#player-score-box");
let computerScoreBox = document.querySelector("#computer-score-box");
let playerScore = playerScoreBox.querySelector(".score");
let computerScore = computerScoreBox.querySelector(".score");

// drum audio
const audio = document.querySelector("#tom-sound");

// btn click
btn.addEventListener("click", clickBtn);



// Hover effects
weaponBoxes.forEach(weaponBox => {
    weaponBox.addEventListener("mouseover", () => {
        weaponBox.style.cursor = "pointer";
        weaponBox.classList.toggle("z-depth-3");
    });

    weaponBox.addEventListener("mouseout", () => {
        weaponBox.classList.toggle("z-depth-3");
    });
});

function clickBtn() {
    // game start
    if (btn.textContent == "Start") {
        btn.textContent = "Reset";

        // restting scores
        playerScore.textContent = 0;
        computerScore.textContent = 0;


        // event listern for weabon boxes on click
        weaponBoxes.forEach(weaponBox => {
            weaponBox.addEventListener("click", clickWeapon)
        });


    } else {
        // game reset
        btn.textContent = "Start";
        playerScore.textContent = "0";
        computerScore.textContent = "0";

        console.log("rest");

        weaponBoxes.forEach(weaponBox => {
            weaponBox.removeEventListener("click", clickWeapon);
        });

        commentary.innerHTML = "You have 5 chance to beat Computer <br> Click start to begin.";

        key = 0;
        pScore = 0;
        cScore = 0;
    }
}

// console.log(key);

function clickWeapon() {
    // functino when clicking on weapon box

    // value of cliked weapon
    let weaponChoic = this.querySelector("h3").textContent;

    // plays audio
    audio.currentTime = 0;
    audio.play();

    key = game(weaponChoic);

    if (key == 5) {
        // removing eventlistner
        weaponBoxes.forEach(weaponBox => {
            weaponBox.removeEventListener("click", clickWeapon)
        });

        if (pScore > cScore) {
            commentary.innerHTML = "You win <br> -"
        } else {
            commentary.innerHTML = "Computer win <br> -"
        }

        // restting 
        btn.textContent = "Reset";
        // commentary.innerHTML = "You have 5 chance to beat Computer <br> Click start to begin."
        key = 0;
        pScore = 0;
        cScore = 0;
    }
}