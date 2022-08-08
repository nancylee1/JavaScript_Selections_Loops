console.log("Hello World!\n==========\n");

// Exercise 1 Section: Ignore Even
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 100; i++){
    if (i % 2 != 0)
    {
        console.log(i)
    }
    else
    continue;
}


// Exercise 2 Section: FIZZBUZZ
// 1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
// 2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
//    - If the number is divisible by 3, then console.log `'FIZZ'`
//    - If the number is divisible by 5, then console.log `'BUZZ'`
//    - If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`

// Ex: `15` would print `'FIZZBUZZ'`, `33` would print `'FIZZ'`, and `35` would print `'BUZZ'`
console.log("EXERCISE 2:\n==========\n");

for(let i = 0; i < 100; i++){
    if (i % 3 && i % 5 == 0){
        console.log ("FIZZBUZZ");
    }else {
        if (i % 3 == 0){
            console.log("FIZZ");
        }
        if (i % 5 == 0){
        console.log("BUZZ");
        }
    }
}

// Exercise 3 Section: Repeat with While and Do/While
console.log("EXERCISE 3:\n==========\n");

let i = 0; 

while (i <= 100){
    let output = "";

    if (i % 3 == 0){
        console.log("FIZZ");
    }
    if (i % 5 == 0){
    console.log("BUZZ");
    }

    console.log(`${i} ${output}`);
    i++;
}

let x = 0; 

do {
    let output = "";

    if (x % 3 == 0){
        console.log("FIZZ");
    }
    if (x % 5 == 0){
    console.log("BUZZ");
    }

    console.log(`${x} ${output}`);
    x++;
}while(x <= 100);

// Exercise 4 Section: Find Value
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 1; i <= n; i++){
    if (i == value){
        console.log(`Found ${value}!`);
        break; 
    }

    if (i == n){
        console.log(`Did not find ${value} between 1 - ${n}.`);
    }
}

//Exercise 5: Customized FIZZBUZZ
// We already completed the FIZZBUZZ challenge. Now repeat the logic for the FIZZBUZZ challege with values provided in variables.

// 1. Start with the following code:

let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let y = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

// 2. Re-implement exercise 2, but use `start` as the initial value for `i`, `n` as the range limit in `i <= n`, 
// and `fizzDivisor` and `buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.
for (let i = start; i <= y; i++){
    let output = "";

    if (i % fizzDivisor == 0){
        output += "FIZZ"; 
    }

    if (i % buzzDivisor == 0){
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);