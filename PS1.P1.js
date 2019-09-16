// Kenneth Kim (U00882039)
// heykjk@bu.edu
// CS400 PS1.P1.js

const alphabetize = str => str.split('').sort().join('');
// Split the string into an array of each letter split individually
// Next, Sort this array so that each letter succeeds the previous letter alphabetically
// Join the elements of the array together into one string in alphabetical order as a result.

console.log(`${alphabetize('supercalifragilisticexpialidocious')}`);
// Output: aaacccdeefgiiiiiiillloopprrssstuux
