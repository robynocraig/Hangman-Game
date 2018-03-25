
// Word options
var words = [
 "pineapple",
 "bikini",
 "patrick",
 "spongebob"
];

// When user presses a key, game starts
//document.onkeyup = function(event) {

// Choose a random word
var word = words[Math.floor(Math.random() * words.length)];

console.log (word);

// Current word with applicable letter spaces below

var answerArray =[];
for (var i = 0; i < word.length; i++){
  answerArray[i] = "_";
}

console.log (answerArray);

document.getElementById("letters").innerHTML = answerArray.join(' ');

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
