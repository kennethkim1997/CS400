// Kenneth Kim (U00882039)
// heykjk@bu.edu
// CS400 PS1.P3.js

const modify = (originalString, cb) => cb(originalString); // Function that takes in a string

// For the first expression, call the modify function and pass in the string into a lambda function
// This function will return an array split up on the character 'c'
let result1 = modify('supercalifragilisticexpialidocious',
                     splitAtC => splitAtC.split(/(?=c)/g)
              );

// For the second expression, first call the modify function and pass in the string into another lambda function
// This function will replace all lowercase a's with uppercase A's.
let result2 = modify('supercalifragilisticexpialidocious',
                     replaceLowercaseA => replaceLowercaseA.replace(/a/g, 'A')
              );

// Create the object with the required info for the modified string.
const result2Object = {

    originalString: 'supercalifragilisticexpialidocious',
    modifiedString: result2,
    numberReplaced: result2.split("A").length - 1,
    length: result2.length
};

console.log(result1);
console.log(result2Object);
