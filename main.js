// Testing javascript link through web console
console.log('test')

// Multi-line Comment
/*
example of 
multi-line 
comment
*/

// Declaring a variable using var (the old way)
var firstName= 'Adrienne';
console.log(firstName);

// Reassigning values
firstName = 'Ronnie';
console.log(firstName);

// Use semicolons at the end of your JS code (Or not...)

// Use the typeof operator to see a data type
console.log(typeof firstName);

// strings in js
var firstName= 'Adrienne';
console.log(firstName);
console.log(typeof firstName);

// numbers in js
var num1 = 5;
var num2 = 5.5;
var sum = num1 + num2;
console.log(typeof num1);

// Arrays AKA Python Lists
var students = ['Adrienne', 'Jesse', 'Kevin'];
console.log(students);

// Objects AKA Python Dicts
var bio = {
    fullName :'Adrienne Daniels',
    age: 35,
    location:'Florida'
};
console.log(bio);

// Hoisting -- to be avoided (using a variable before it's been declared)
console.log(hoist);
var hoist = 'I am hoisted';
console.log(hoist);

/* 
- NOTE: Instead of using VAR to define variables, use LET and CONST (Modern Way)
- Not only because of var hoisting behaviors can be tricky, but so you don't
accidentally re-declare a variable that already exists.
- LET and CONST are also variable declarations using the ES6 Syntax but do allow
for re-declaration.

- LET vs CONST
- let: allows for reassignment of values (Just like Python)
- const: does NOT allow for reassignment of values 
*/

// let - use let until you can use const properly
let x = 14;
console.log(x);
x = 24;
console.log(x);

// const
const y = 30;
console.log(y);

// ------------------------ Math Operations ----------------------------

// Addition
let add = 5 + 5;
console.log(add);

// Incrementing
add += 5;
console.log(add);

// Increment by 1
add ++;
console.log(add);

// Subtraction
let diff = 10 - 5;
console.log(diff);

// Decrement by 1
diff --;
console.log(diff);

// Decrementing
console.log(diff -= 2);

// Multiplication
let product = 5 * 5;
console.log(product);

// Division
let quotient = 25 / 5;
console.log(quotient);

// Exponents
let expo = 5 ** 2;
console.log(expo);

// ---------- Math is a built-in for javascript ---------------

// Math.floor() - gives you the whole number and drops the numbers after the decimal
console.log(Math.floor(15.55));

// Math.ceil() - rounds up to the next whole number
console.log(Math.ceil(15.55));

// Watch out for these behaviors when adding number and strings- AVOID
const dylan_num = 18;
const aakash_num = '23';
console.log(dylan_num + aakash_num);
// How to, but still avoid
console.log(dylan_num + parseInt(aakash_num));
console.log(dylan_num + Number(aakash_num));

// -------------- Javascript Functions ----------------------
// Function Declaration, Function Expression, Arrow Function (ES6)
// NOTE: Indentation does NOT matter in JS, but its good practice.
// We use curly braces to keep track of scope instead.

// Function Declaration
// Very similar to Python
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName('Adrienne', 'Daniels'));

// Arrow Function (ES6)
const goatPlayer = (playerName) => {
    return `The GOAT will always be ${playerName}`;
}
console.log(goatPlayer('Serena Williams'));

// -------------------- if, else if, else conditional statements -----------------------
// syntax: if (condition) { code block ran if true }
const checkWeather = (temp) => {
    if (temp  < 65){
        return "It's cold outside, wear a jacket.";
    } else if (temp < 80) {
        return "It's a beautiful day!";
    } else {
        return "It's hot outside, stay cool as possible.";
    }
}
console.log(checkWeather(60));
console.log(checkWeather(70));

// ------------------------- Ternary Operators -------------------------
// Python: (run_this_code_on_true) if (condition) else (run_this_code_on_false)
// JS: (Condition) ? (run_this_code_on_true) : (run_this_code_on_false)
//  == still evaluates the left and the right, but do not want to use. Use === in js, ALWAYS
const oddOREven = (num) => (num % 2 === 0 ? true : false);
console.log(oddOREven(5));
console.log(oddOREven(4));

// ------------------------- JS Loops --------------------------------
// ----- For Loops -----
// i = index
let artist = ['Beyonce', 'Megan Thee Stallion', 'Ari Lennox'];

for(let i=0; i<10; i++){
    console.log(i);
}
// loop through an array
for (let i=artist.length-1; i>=0; i--){
    console.log(artist[2]);
}

// loop through an array with for-of loop (values) (ES6)
for(let name of artist){
    console.log(name);
}

// loop through an array with for-in loop (indices) (ES6) ??
for (let idx in artist){
    console.log[idx];
}

// ----- While Loops -----
let num = 0;
while (num < 10){
    console.log(num);
    num += 1;
}

// Do-While
// Syntax: do {code block} while (condition)
// NOTE: It is guaranteed to run once
let num3 = 15;
do {
    console.log(num3);
    num3 += 1;
} while (num3 < 10);


let num4 = 0;
do {
    console.log(num4);
    num4 += 1;
} while (num4 < 10);

// -------------------- More JS Array Practice & Methods -----------------------
let artists = ['Victoria Monet', 'Janelle Monae', 'SZA'];

// index
console.log(artists[1]);

// indexing from the end
console.log(artists[artists.length-1]);

// object.toString() method returns a string representing the object
// NOTE: This is an object method, which means you can you use this on different data types
console.log(artists.toString());

// joining an array with a separator
// syntax: array.join(separator)
console.log(artists.join(' - '));

// slice method (Out of place algo), does NOT effect the original Array
// syntax: array.slice(start, end)
console.log(artists.slice(2));
console.log(artists);

// splice method (in place algo), does effect the original Array
// syntax: array.splice(start, end)
console.log(artists.splice(0,2));
console.log(artists);
