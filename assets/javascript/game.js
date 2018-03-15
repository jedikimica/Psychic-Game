// letters computer can choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z"];

// initial global values
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// guesses so far
var guessesSoFar = [];
// key that user presses as guess
var userGuess = null;

// computer guess
 var computerGuess = letters[Math.floor(Math.random()*letters.length)];
 
 console.log("Wins: "+ wins + "Losses: " + losses + "Guesses Left: " + 
 guessesLeft+ "Guesses so Far: " + guessesSoFar + "Computer Picked: " + computerGuess);

 document.onkeyup = function(event) {
    // record user key press to userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// add userGuess to guessesSoFar
    if (guessesSoFar.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >=0) {
       guessesSoFar[guessesSoFar.length]=userGuess;
// subtract from guesses left
       guessesLeft--;
    }
// if user guesses computer guess
    if (computerGuess == userGuess) {
        // record it as a win
        wins++;
        console.log("You won!");
        // reset guesses to 9
        guessesLeft = 9;
        // clear guesses so far
        guessesSoFar = [];
        // have computer choose a new letter
        computerGuess = letters[Math.floor(Math.random()*letters.length)];
        console.log("Wins: "+ wins + "Losses: " + losses + "Guesses Left: " + 
        guessesLeft+ "Guesses so Far: " + guessesSoFar + "Computer Picked: " + computerGuess);
       
    }

// if user runs out of guesses
if (guessesLeft == 0) {
    // add to losses
    losses++;
    console.log("You lost!");
    // reset guesses
    guessesLeft = 9;
    // clear guessesSoFar
    guessesSoFar = [];
    // have computer choose a new letter
    computerGuess = letters[Math.floor(Math.random()*letters.length)];
    console.log("Wins: "+ wins + "Losses: " + losses + "Guesses Left: " + 
    guessesLeft+ "Guesses so Far: " + guessesSoFar + "Computer Picked: " + computerGuess);

}
// html
var html = 
"<p><h1>The Psychic Game</h1></p>" + 
"<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
"<p><h4>Wins: " + wins + "</h4></p>" +
"<p><h4>Losses: " + losses + "</h4></p>" +
"<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" +
"<p><h4>Guesses so Far " + guessesSoFar + "</h4></p>";

// put html into game ID
document.querySelector("#game").innerHTML = html;
 }