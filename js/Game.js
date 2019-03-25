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
            this.activePhrase = null;
        }
        /**
         * Selects random phrase from phrases property
         * @return {Object} Phrase object chosen to be used
         */
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * game.phrases.length);
        return game.phrases[randomNum];
    }
}