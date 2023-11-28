//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

const findWords = (str, dogs) => {
    dogs.forEach(dog => {
      if (str.toLowerCase().includes(dog.toLowerCase())) {
        console.log(`Matched ${dog}`);
      }
      else {
        console.log(`No Match`)
      }
    });
};

//Call method here with parameters
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice, and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

const replaceEvens = () => {
  for (let i = 0; i < Given_arr.length; i += 2){
    Given_arr.splice(i, 1, "even index");
  };
};

replaceEvens(Given_arr);
console.log(Given_arr);


// Expected output
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// Codewars 1
// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0){
      return "Even";
    } 
    else 
    {
      return "Odd";
    }
  }
  
  evenOrOdd(5);
  

// Codewars 2
// Area or Perimeter
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

function areaOrPerimeter(l , w) {
    if (w == l) {
      return w * l;
    }
      else {
        return 2 * l + 2 * w;
      }
  }

areaOrPerimeter();
