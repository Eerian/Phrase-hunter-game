/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
            this.missed = 0;
            this.phrases = [
                "Hello There",
                "Why Monte",
                "Who wants to work",
                "Is anybody out there",
                "This is hard work"
            ];
            this.activePhrase = this.getRandomPhrase();
        }
        /**
         * Selects random phrase from phrases property
         * @return {Object} Phrase object chosen to be used
         */


    //select a random phrase
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }

    //star game
    startGame() {
        //remove overlay div hiding letter placeholders
        const overlayDiv = document.querySelector("#overlay");
        overlayDiv.style.display = "none";
        //get active phrase and display it on screen
        const activePhrase = this.activePhrase;
        const phrase = new Phrase(activePhrase);
        phrase.addPhraseToDisplay();
    }

    /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {

    };
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {

    };
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {

    };

}