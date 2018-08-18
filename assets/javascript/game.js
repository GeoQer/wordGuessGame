//array with word arrays
var bugatti = ["b", "u", "g", "a", "t", "t", "i"];
var nissan = ["n", "i", "s", "s", "a", "n"];
var ford = ["f", "o", "r", "d"];
var fiat = ["f", "i", "a", "t"];
var peugeot = ["p", "e", "u", "g", "e", "o", "t"];
var pagani = ["p", "a", "g", "a", "n", "i"];
var chevrolet = ["c", "h", "e", "v", "r", "o", "l", "e", "t"];
var dodge = ["d", "o", "d", "g", "e"];
var lotus = ["l", "o", "t", "u", "s"];
var wordStorage = [];
var wordDisplay = ""

/* function() {
    var i = 0
    while (i < selectedWord.length - 2) {
        wordStorage[i] + " ";
        i++
    };
}; */

var wordList = [bugatti, nissan, ford, fiat, peugeot, pagani, chevrolet, dodge, lotus];
  
//random word selection
var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(selectedWord);
//retrieve length of selected word array. show "_" for each letter in the word
console.log(selectedWord.length);
var wordBlank = function( ){
    for (i=1; i < selectedWord.length; i++) {
    wordStorage.push("_");
};
};
console.log(wordDisplay);
document.getElementById("word-display").innerHTML = wordDisplay;
//until all letters are matched || usedLetters arrayLength == 7 {event.key look for letter input from user}
/*event.keyLog
//compare letters in array to user input to determine a match
//if match then change "_" to the matching letter
//else compare input to letters in usedLetters array
//if no matches add non-matching letter to "used letters" array
//else wait for new input
//if all letters match display "win" - Display button "Play Again"
//if usedLetter arrayLength == 7 display "lose" - Display button "Try Again"*/