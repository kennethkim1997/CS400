// Kenneth Kim (U00882039)
// heykjk@bu.edu
// CS400 PS1.P2.js

const evaluate = stringExpression => {   // Function takes the string expression as input.
    const splitString = stringExpression.split(''); // Split the string into an array by 1st digit, operator, 2nd digit.
    const getOperator = splitString[1]; // We know the index 1 of the array is always the operator.

    switch (getOperator) { // Examine the specific operator and return the function to implement it.
        // Convert the left and right digits into integers so that they can be evaluated with the operator.
        case '+':
            return (left, right) => parseInt(left, 10) + parseInt(right, 10);

        case '-':
            return (left, right) => parseInt(left, 10) - parseInt(right, 10);

        case '*':
            return (left, right) => parseInt(left, 10) * parseInt(right, 10);

        case '/':
            return (left, right) => parseInt(left, 10) / parseInt(right, 10);
    }
}

/*
Regarding the 4 test cases:
First determine the operator of each expression to get the full function that will evaluate each expression.
Next, print the final equation taking the two digits in the array as the left and right inputs for the function.
*/

const expression1 = '4+2';
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1[0], expression1[2])}`);
// Output: 6

const expression2 = '5*7';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2[0], expression2[2])}`);
// Output: 35

const expression3 = '6-1';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3[0], expression3[2])}`);
// Output: 5

const expression4 = '9/2';
let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4(expression4[0], expression4[2])}`);
// Output: 4.5
