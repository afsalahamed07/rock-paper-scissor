// basic selectors
let weaponBoxes = document.querySelectorAll(".weapon-box");
let btn = document.querySelector("#btn-custom");

let commentary = document.querySelector("#commentary p");



console.log(commentary);


// insialization of values before game
let playerScoreBox = document.querySelector("#player-score-box");
let computerScoreBox = document.querySelector("#computer-score-box");
let playerScore = playerScoreBox.querySelector(".score");
let computerScore = computerScoreBox.querySelector(".score");

// drum audio
const audio = new Audio('../sounds/tom.wav')

// btn click
btn.addEventListener("click", clickBtn);

// global varibales used in funcitons
// let key;



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

        // loop break
        // key = 0;


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
        playerScore.textContent = "";
        computerScore.textContent = "";
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
    console.log(key);

    if (key == 5) {
        // removing eventlistner
        weaponBoxes.forEach(weaponBox => {
            weaponBox.removeEventListener("click", clickWeapon)
        });

        if (pScore > cScore) {
            commentary.innerHTML = "You win <br> -"
        } else {
            commentary.innerHTML = "Computer win win <br> -"
        }

        // restting 
        btn.textContent = "Start";
        // commentary.innerHTML = "You have 5 chance to beat Computer <br> Click start to begin."
        key = 0;
        pScore = 0;
        cScore = 0;
    }
}