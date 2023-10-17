
//Problem statement: Take a sentence as an input and reverse every word in that sentence.

const readline = require("readline");

//used readline for enabling input from console.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseWordsInSentence(sentence) {
  // Splitted the sentence into words on basis of spaces in the scentence and stored them in a variable.
  var words = sentence.split(" "); //this stores an array of strings(words)

  console.log(words);

  // Iterated through each word and reversed them
  for (var i = 0; i < words.length; i++) {
    // Used the split, reverse, and join methods to reverse the word
    words[i] = words[i].split("").reverse().join("");

    // here in split we have not given any delimiter hence we get an array of characters for each word, later we reversed them and joined again as words.
  }

  // Joined the reversed words to form the final reversed sentence
  var reversedSentence = words.join(" ");

  return reversedSentence;
}

//The readlines questoin I used here shows a prompt to the user and waits for the input from user.
//  As soon as the user presses enter it passes the input to the callback as an argument.

rl.question("Enter a sentence: ", function (inputSentence) {
  var reversed = reverseWordsInSentence(inputSentence);
  console.log("Reversed sentence: " + reversed);
  rl.close();
});
