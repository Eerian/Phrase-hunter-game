/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
            this.phrase = phrase;
        }
        /**
         * Display phrase on game board
         */
    addPhraseToDisplay() {
        //get random phrase from Game object
        let chosenPhrase = this.phrase;
        //select the UL under the phrase div to display letters on
        const phraseUL = document.querySelector("#phrase ul");
        //loop thru the random phrase
        for (let i = 0; i < chosenPhrase.length; i++) {
            //create an li for each letter after splitting the phrase
            const li = document.createElement("li");
            li.textContent = chosenPhrase.split("")[i];
            //add 'hide' and 'letter' classes to the letters
            li.className = "hide letter";
            phraseUL.appendChild(li);
            //if there is a space in the phrase add class 'space' to the space li
            if (chosenPhrase.split("")[i] === " ") {
                li.className = "space";
            }
        }
    }

    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        //select all hidden letters
        const phraseLetters = document.querySelectorAll("li.hide");
        phraseLetters.forEach(phraseLetter => {
            //if a letter matches a phrase letter show it.
            if (phraseLetter.textContent === letter) {
                phraseLetter.classList.remove("hide");
                phraseLetter.classList.add("show");
            }
        });
    }
}