// Game Variables
const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;
let score = 0;
let userCanClick = false; // Prevents clicking while the game is flashing

const levelTitle = document.getElementById("level-title");
const scoreDisplay = document.getElementById("score-display");

// 1. Press any key to start or restart the game
document.addEventListener("keydown", function() {
    if (!started) {
        levelTitle.innerText = "Level " + level;
        scoreDisplay.innerText = "Score: " + score;
        nextSequence();
        started = true;
    }
});

// 2. Handle user clicking a button
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (!started || !userCanClick) return; // Ignore clicks if game hasn't started or is flashing

        const userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);

        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
    });
});

// 3. Check the user's answer against the game pattern
function checkAnswer(currentLevel) {
    // Check if the most recent click matches the sequence
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        
        // If the user finished their sequence, generate the next one
        if (userClickedPattern.length === gamePattern.length) {
            score += 10; // Add 10 points for completing a level
            scoreDisplay.innerText = "Score: " + score;
            userCanClick = false; // Lock clicking until the next sequence finishes flashing
            
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        // Wrong answer -> Game Over
        gameOver();
    }
}

// 4. Generate the next color in the sequence
function nextSequence() {
    userClickedPattern = []; // Reset user pattern for the new level
    level++;
    levelTitle.innerText = "Level " + level;

    // Generate random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);

    // Flash the new button
    flashButton(randomChosenColor);
}

// 5. Game Flash UI (Flashes without scaling down)
function flashButton(color) {
    const button = document.getElementById(color);
    button.style.opacity = "0.2";
    setTimeout(() => {
        button.style.opacity = "1";
        userCanClick = true; // Unlock user clicks after the flash
    }, 200);
}

// 6. User Flash UI (Adds the .pressed CSS class for a tactile feel)
function animatePress(currentColor) {
    const button = document.getElementById(currentColor);
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100);
}

// 7. Handle Game Over and Reset
function gameOver() {
    levelTitle.innerText = "Game Over, Press Any Key to Restart";
    
    // Flash background red
    document.body.classList.add("game-over");
    setTimeout(function() {
        document.body.classList.remove("game-over");
    }, 200);

    startOver();
}

// 8. Reset variables
function startOver() {
    level = 0;
    score = 0;
    gamePattern = [];
    started = false;
    userCanClick = false;
}