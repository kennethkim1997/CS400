// Kenneth Kim (U00882039)
// heykjk@bu.edu
// CS400: PS2/PS2.P3.js

// Write a function that prints the cube value of its input.
// Next, write single line of code to call the function on each value of [1,2,3,4,5,6,7].

const cube = x => {
    console.log(x * x * x);  // Function that prints the cube value of its input.
};

let array = [1,2,3,4,5,6,7];
const mapCube = array.map(x => cube(x)); // single line of code that calls the function on each value of the array.

