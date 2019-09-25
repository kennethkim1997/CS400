// Kenneth Kim (U00882039)
// heykjk@bu.edu
// CS400: PS2/PS2.P2.js

// Write a generator that is initialized with a sentence and that emits each word of the sentence in turn.
// Use the generator to print the words, one per line, of the string "All I know is something like a bird within her sang."

// First split the sentence wherever there is a space so we can split each word.
function* sentenceSplit(sentence) {
    let individualWords = sentence.split(" ");
    let word;
    for (word of individualWords) {
        yield word;
    }
}

// Print each word of the split array so that there is one word per line.
result = sentenceSplit("All I know is something like a bird within her sang");
let count = 11;
while (count-- > 0) {
    console.log(result.next().value);
}


