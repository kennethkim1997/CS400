// Kenneth Kim (U00882039)
// heykjk@bu.edu
// CS400: PS2/PS2.P1.js


// This problem will treat the first value of the fibonacci sequence as 0, which is an even number.
// Fibonacci numbers starting from 0.
// Series F is defined as F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)

function* fibonacci() {
    let val1 = 0; // F(0) = 0
    let val2 = 1; // F(1) = 1

    while (true) {
        yield val1;
        // Each time through the loop output the current fib # and compute F(n) = F(n-1) + F(n-2)
        [val1, val2] = [val2, val1+val2];
    }
}

// Second generator should use the first to obtain the next number in the sequence.
// Reject if odd and ask for next. Once an even is obtained, it is emitted.

function* fibonacciEven() {
    let fib= fibonacci();
    let value;
    for (value of fib) {      // Loop on the normal fibonacci sequence and yield only the even values.
        if (value % 2 == 0) {
            yield value;
        }
    }
}

result = fibonacciEven();
let count = 6;
while (count-- > 0) {
    console.log(result.next().value)  // Print out the first 6 even Fibonacci numbers.
}







