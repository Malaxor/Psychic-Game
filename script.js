
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesThusFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//pressing a keybord key will trigger (onkeyup) the function that starts the game
document.onkeyup = function(event) {

    // user guess input (turned into lowercase)
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

    //the computer will randomly guess a letter from the computerChoices array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //userGuess (keybord key) is placed into the empty guessesThusFar array
    guessesThusFar.push(userGuess); 

    //the logic that will determine wins, losses and guesses left
        if (userGuess === computerGuess) {
            alert("Zoltar!");
            wins++; // incremenet wins variable by one (++)
            guessesLeft = 10; // resets guessesLeft
            guessesThusFar.length = 0; // empties the guessesThusFar array
        }

        else if (guessesLeft === 0) {
            alert("You ain't foolin' nobody!");
            losses++;
            guessesLeft = 10;
            guessesThusFar.length = 0;
        }

        else if (userGuess !== computerGuess) {
            guessesLeft--; // subtracts in increments of 1 from the number of guessesLeft   
         }


    var html = 
    
    "<h1>Zoltar</h1>" +
    "<p>Can you guess the letter of which I'm thinking?</p>" +
    "<p>Total Wins: " + wins + "</p>" +
    "<p>Total Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses, thus far: " + guessesThusFar + "</p>";

    document.getElementById("game").innerHTML = html;

} // onkeyup(event)

