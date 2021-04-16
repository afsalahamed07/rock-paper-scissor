let weaponBoxes = document.querySelectorAll(".weapon-box");
let btn = document.querySelector("#btn-custom");

weaponBoxes.forEach(weaponBox => {
    weaponBox.addEventListener("mouseover", () => {
        weaponBox.classList.toggle("z-depth-3");
    });

    weaponBox.addEventListener("mouseout", () => {
        weaponBox.classList.toggle("z-depth-3");
    });
});



btn.addEventListener("click", () => {
    let playerScoreBox = document.querySelector("#player-score-box");
    let computerScoreBox = document.querySelector("#computer-score-box");

    let plyaerScore = playerScoreBox.querySelector(".score");
    let computerScore = computerScoreBox.querySelector(".score");

    if (btn.textContent == "Start") {
        btn.textContent = "Reset";
        plyaerScore.textContent = 0;
        computerScore.textContent = 0;

        game();
    } else {
        btn.textContent = "Start";
        plyaerScore.textContent = "";
        computerScore.textContent = "";
    }







});