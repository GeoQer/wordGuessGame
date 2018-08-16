//array with word arrays
var bugatti = ["b", "u", "g", "a", "t", "t", "i"];
var nissan = ["n", "i", "s", "s", "a", "n"];
var ford = ["f", "o", "r", "d"];
var fiat;
var peugeot;
var pagani;
var chevrolet;
var dodge;
var lotus;

var wordList = [bugatti, nissan, ford];
    /* fiat["f", "i", "a", "t"],
    peugeot ["p", "e", "u", "g", "e", "o", "t"],
    pagani ["p", "a", "g", "a", "n", "i"],
    chevrolet["c", "h", "e", "v", "r", "o", "l", "e", "t"],
    dodge["d", "o", "d", "g", "e"],
    lotus["l", "o", "t", "u", "s"]
]; */
//random word selection
var selectedWord = wordList[Math.floor(Math.random()*wordList.length)];
console.log(wordList.length);
console.log(selectedWord);
//retrieve length of selected word array

//show "_" for each letter in the word
//until all letters are matched || usedLetters arrayLength == 7 {event.key look for letter input from user}
//compare letters in array to user input to determine a match
//if match then change "_" to the matching letter
//else compare input to letters in usedLetters array
//if no matches add non-matching letter to "used letters" array
//else wait for new input
//if all letters match display "win" - Display button "Play Again"
//if usedLetter arrayLength == 7 display "lose" - Display button "Try Again"
//