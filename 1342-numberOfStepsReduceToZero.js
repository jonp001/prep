// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12
 

// Constraints:

// 0 <= num <= 106

// use a while loop here since you want to start from num and work your way down to 0 using the conditions set

// /**
//  * @param {number} num
//  * @return {number}
//  */

var numberOfSteps = function(num) {
    let totalSteps=0;

while ( num > 0 ){ // while bc u want to go from num to 0 and stop
    if ( num % 2 === 0) {
        num = Math.floor(num/2); // if num is divisible by 2 then divide num by 2.  *Math.floor rounds to lowest digits* 
    } else {
        num -= 1; // if above conditions arent meant subtract num by 1
    }
    totalSteps++; // count total steps 
}
return totalSteps;
}