
// Word options
var words = [
 "pineapple",
 "bikini",
 "patrick",
 "spongebob"
];

// Available letters
var availableLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","w","x","y","z"];

// Guesses Left
var guessesLeft = 12;

// Choose a random word
var word = words[Math.floor(Math.random() * words.length)];

console.log (word);

var remainingLetters = word.length

// Current word with applicable letter spaces below

var answerArray =[];
for (var i = 0; i < word.length; i++){
  answerArray[i] = "_";
}

console.log (answerArray);

document.getElementById("letters").innerHTML = answerArray.join(' ');

// User clicks letter to start game

document.onkeyup = function(event) {

  // If there are one or more turns available:

  if (guessesLeft > 0) {

  // Get a guess from the player
  var guess = event.key;

   // Update the game state with the guess
   for (var j = 0; j < word.length; j++) {
     if (word[j] === guess) {
     answerArray[j] = guess;
     remainingLetters--;
      }
    }
  }
}
// As user guesses a letter, check if that letter is in the word

  // If yes, fill in that space above

  // If no, letter shows up under "Letters Guessed Already"

// As user guesses a letter:

  //   - the "Number of Guesses Remaining" goes down by 1

  //   - the letter is added to "Letter Already Guessed"

// If user guesses a letter that has already been guessed, do nothing

// When the user has filled in all of the letters in the current word:

  // The number of wins goes up by 1

  // A new word appears in the spaces
