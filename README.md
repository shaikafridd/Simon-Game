
# 🎮 Simon Game

A sleek, web-based implementation of the classic memory game "Simon", built using vanilla HTML, CSS, and JavaScript. Test your memory by repeating an increasingly long sequence of flashing lights!

## ✨ Features

* **Random Sequence Generation:** The game logic randomly selects the next color in the sequence, ensuring a unique playthrough every time.
* **Distinct Visual Feedback:** * *Game Flash:* Subtle opacity changes when the game demonstrates the sequence.
    * *User Flash:* A tactile "pressed" animation with a white glow when the user clicks a button.
* **Score Tracking:** Keeps a running total of your score (10 points per successful round).
* **Keyboard Controls:** Seamlessly start or restart the game simply by pressing any key.
* **Responsive Design:** Optimized for both desktop and mobile screens.

## 🚀 Technologies Used

* **HTML5:** Structure and layout of the game board.
* **CSS3:** Styling, responsive layout (Flexbox), and CSS transitions/animations for the flash effects.
* **JavaScript (ES6):** Core game logic, DOM manipulation, event handling, and sequence tracking.

## 🕹️ How to Play

1.  **Start:** Open the game and press **any key** on your keyboard to start.
2.  **Observe:** The game will flash a single colored button.
3.  **Repeat:** Click the button that just flashed.
4.  **Progress:** If you are correct, the game will add a new color to the end of the sequence. You must click the *entire* sequence from the beginning.
5.  **Game Over:** If you click the wrong color, the screen will flash red, and the game will end. Press any key to reset your score and try again!

## 🛠️ Local Installation

To run this project locally on your machine, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone [https://github.com/shaikafridd/Simon-Game.git]