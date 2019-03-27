/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        //get random phrase from Game object
        let randomPhrase = game.getRandomPhrase();
        //select the UL under the phrase div to display letters on
        const phraseUL = document.querySelector("#phrase ul");
        //loop thru the random phrase
        for (let i = 0; i < randomPhrase.length; i++) {
            //create an li for each letter after splitting the phrase
            const li = document.createElement("li");
            li.textContent = randomPhrase.split("")[i];
            //add 'hide' and 'letter' classes to the letters
            li.className = "hide letter";
            phraseUL.appendChild(li);
            //if there is a space in the phrase add class 'space' to the space li
            if (randomPhrase.split("")[i] === " ") {
                li.className = "space";
            }
        }
    }
}