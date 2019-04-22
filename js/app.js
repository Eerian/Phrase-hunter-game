const game = new Game();
game.startGame();


//add event listener to all onsceen keys
const allLetters = document.querySelectorAll(".key");
allLetters.forEach(letter => {
    letter.addEventListener("click", e => {
        game.handleInteraction(e.target);
    });
});