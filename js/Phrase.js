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
        //select main div
        const mainDiv = document.querySelector(".main-container");
        //create a NEW div
        const div = document.createElement("div");
        //create a ul
        const ul = document.createElement("ul");
        //append NEW div inside MAIN div
        mainDiv.appendChild(div);
        //append the ul inside NEW div
        div.appendChild(ul);
        //loop thru the random phrase
        for (let i = 0; i < randomPhrase.length; i++) {
            //create an li for each letter after splitting the phrase
            const li = document.createElement("li");
            li.textContent = randomPhrase.split("")[i];
            //add 'hide' and 'letter' classes to the letters
            li.className = "hide letter";
            ul.appendChild(li);
            //if there is a space in the phrase add class 'space' to the space li
            if (randomPhrase.split("")[i] === " ") {
                li.className = "space";
            }
        }
        //add ID and Class to new div
        div.id = "phrase";
        div.className = "section";
    }
}
}