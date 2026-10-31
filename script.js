let score = 0;
let round = 1;
const totalRounds = 5;

const boxes = document.querySelectorAll(".box");
const scoreDisplay = document.getElementById("score");
const roundDisplay = document.getElementById("round");
const message = document.getElementById("message");
const result = document.getElementById("result");

const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

boxes.forEach(box => {
    box.addEventListener("click", () => {

        // Choose a random surprise
        const surprises = [
            { emoji: "🎃", points: 10, text: "You found a pumpkin! +10 points!" },
            { emoji: "👻", points: -5, text: "Oh no! A ghost! -5 points!" },
            { emoji: "🍬", points: 5, text: "Sweet! You found candy! +5 points!" }
        ];

        const surprise = surprises[
            Math.floor(Math.random() * surprises.length)
        ];

        // Update score
        score = Math.max(0, score + surprise.points);
        scoreDisplay.textContent = score;

        // Reveal the selected box
        box.textContent = surprise.emoji;
        result.textContent = surprise.text;

        // Disable all boxes for this round
        boxes.forEach(item => {
            item.disabled = true;
        });

        message.textContent = "Mystery revealed!";

        if (round < totalRounds) {
            nextBtn.classList.remove("hidden");
        } else {
            message.textContent = "🎉 Game Completed!";
            result.textContent += " Final Score: " + score;
            restartBtn.classList.remove("hidden");
        }
    });
});

// Next round button
nextBtn.addEventListener("click", () => {
    round++;
    roundDisplay.textContent = round;

    boxes.forEach(box => {
        box.textContent = "🎁";
        box.disabled = false;
    });

    message.textContent = "Choose your mystery box!";
    result.textContent = "What's hiding inside?";

    nextBtn.classList.add("hidden");
});

// Restart game
restartBtn.addEventListener("click", () => {
    score = 0;
    round = 1;

    scoreDisplay.textContent = score;
    roundDisplay.textContent = round;

    boxes.forEach(box => {
        box.textContent = "🎁";
        box.disabled = false;
    });

    message.textContent = "Choose your mystery box!";
    result.textContent = "What's hiding inside?";

    restartBtn.classList.add("hidden");
});