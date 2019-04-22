//declare a new game but it's started below when startGameButton is clicked.
const game = new Game();

//add event listener to all onsceen keys
//call the 'handleInteractions' method on all keys
const allLetters = document.querySelectorAll(".key");
allLetters.forEach(letter => {
    letter.addEventListener("click", e => {
        game.handleInteraction(e.target);
    });
});


//Select the Start Game button
const startGameButton = document.querySelector('#btn__reset');
startGameButton.addEventListener('click', () => {

    //Remove the old phrase to make room for the new phrase
    const phraseUL = document.querySelector('#phrase ul');
    const phraseLIs = document.querySelectorAll('#phrase ul li');
    for (let i = 0; i < phraseLIs.length; i++) {
        phraseUL.removeChild(phraseLIs[i]);
    }



    //Reset all keyboard keys
    const allKeys = document.querySelectorAll('.keyrow button');
    for (let i = 0; i < allKeys.length; i++) {
        //remove all previous classes on the keys
        allKeys[i].className = "";
        //add the original 'key' class on all key buttons
        allKeys[i].classList.add('key');
        //enable all keys
        allKeys[i].disabled = false;

    }



    //reset game lives (hearts)
    const scoreHearts = document.querySelectorAll("#scoreboard ol li img");
    for (let i = 0; i < scoreHearts.length; i++) {
        scoreHearts[i].src = '';
        scoreHearts[i].src = 'images/liveHeart.png';
    }

    //start a new game
    game.startGame();

});