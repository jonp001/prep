// Given an integer n, return a string array answer (1-indexed) where: // REMEMBER INDEX ARRAY = STARTS AT 1 NOT 0 & LAST NUMBER IS n!!

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// /**
//  * @param {number} n
//  * @return {string[]}
//  */

var fizzBuzz = function (n) {
  let results = []; // initlize results to empty array

  for (i = 1; i <= n; i++) {  // REMEMBER INDEX ARRAY = STARTS AT 1 NOT 0 & LAST NUMBER IS n!!
    // for loop to iterate over the given intergers
    if (i % 3 === 0 && i % 5 === 0) { // both 5 AND 3 have to be divisible 
      results.push("FizzBuzz"); // remember push allows you to add to the end of an array & returns length of new arr
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i.toString()); // if none above work then push integer to end of results array and convert it to a string
    }
  }
  return results;
};
