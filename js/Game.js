/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
            this.missed = 0;
            this.phrases = [
                "hello world",
                "why learn",
                "who wants to code",
                "is anybody out there",
                "this is hard work"
            ];
            this.activePhrase = null;
        }
        /**
         * Selects random phrase from phrases property
         * @return {Object} Phrase object chosen to be used
         */
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * this.phrases.length);
        return new Phrase(this.phrases[randomNum]);
    }

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        //select the overlay screen and remove it
        const overlayDiv = document.querySelector("#overlay");
        overlayDiv.style.display = "none";
        //assign an random phrase as the active phrase
        this.activePhrase = this.getRandomPhrase();
        //display the active phrase to the screen by calling the method.
        this.activePhrase.addPhraseToDisplay();
    }


    //Checks for a winner
    checkForWin() {
        //select all letters with 'show' class AKA displayed letters
        const showClasses = document.querySelectorAll('#phrase ul li.show');
        //select all letters with the 'letter' class. All letters have this class
        const lettersClasses = document.querySelectorAll('#phrase ul li.letter');
        //Checks for a winner by comparing the length of the phrase by the length of the displayed letters.
        if (showClasses.length === lettersClasses.length) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        let scoreHearts = document.querySelector("#scoreboard ol li img[src='images/liveHeart.png']");
        scoreHearts.src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    /**
  Checks for game for win
  Displays the game over message
*/
    gameOver() {
        //select the overlay div
        const overlayDiv = document.querySelector("#overlay");
        //select the game over message
        const gameOverMessage = document.querySelector('#game-over-message');
        //remove the overlay div
        overlayDiv.style.display = "";
        /**check the game for win or lose and display the appropriate message.*/
        if (this.checkForWin() === true) {
            gameOverMessage.textContent = "Winner! Congratulations!!";
            overlayDiv.classList.remove('start');
            overlayDiv.classList.remove('lose');
            overlayDiv.classList.add('win');
            this.missed = 0;
        } else {
            gameOverMessage.textContent = "Sorry, you LOSE...better luck next time!";
            overlayDiv.classList.remove('start');
            overlayDiv.classList.remove('win');
            overlayDiv.classList.add('lose');
            this.missed = 0;
        }


    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(button) {
        /**if the clicked letter doesnt exist on the phrase
         *add the class 'wrong' to the letter
         *disable the letter
         *remove a life from the game
         */

        if (this.activePhrase.checkLetter(button.textContent) === false) {
            button.classList.add('wrong');
            button.disabled = true;
            this.removeLife();
        } else {
            /**ELSE if the letter exists on the phrase add 'chosen' class to it
             *show the letter on the screen
             *check the game for win
             *if winner call gameOver method to display the appropriate message
             */
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
            if (this.checkForWin() === true) {
                this.gameOver();
            }
        }

    };
}