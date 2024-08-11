"use strict";
// ### Question 1: Sum of an Array
// *Instructions:*
// 1. Write a function named sumArray that takes an array of numbers as input.
// 2. The function should return the sum of all numbers in the array.
// 3. Ensure your function works correctly by testing it with different inputs.
// *Example:*
// - Input: [1, 2, 3, 4, 5]
// - Output: 15
const arr = [2, 5, 8, 0, 3];
const sumArray = (num) => {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
};
// console.log(`sum of  array  is ${sumArray(arr)}`)
// Question 3: Reverse a String
// Instructions:
// Write a function named reverseString that takes a string as input.
// The function should return the reversed version of the input string.
// Ensure your function works correctly by testing it with different inputs.
// Example:
// Input: "hello"
// Output: "olleh"
const reverseString = (str) => {
    let reversed = str.split('').reverse().join('');
    return reversed;
};
const reversedString = reverseString('school');
console.log(reversedString);
