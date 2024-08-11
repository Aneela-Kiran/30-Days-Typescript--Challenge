"use strict";
// Question 3: First and Last Element Instructions: Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.
// Requirements:
// If the array has only one element, the function should return an array with that element duplicated. Ensure the function handles arrays with a single element correctly.
// --
function NewArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    else if (arr.length === 1) {
        return [arr[0], arr[0]];
    }
    else
        return [arr[0], arr[array.length - 1]];
}
const array = [3, 6, 7, 8];
const array1 = [4];
const array2 = [];
console.log(NewArray(array));
console.log(NewArray(array1));
console.log(NewArray(array2));
// Question 4 : Find the Largest Number Instructions: Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.
// Requirements:
// The function should handle arrays with positive and negative numbers. If the array contains only one number, return that number. Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs). Note: This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic.
function largestNumber(num) {
    if (num.length === 0) {
        throw new Error("Array is empty");
    }
    let k = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > k) {
            k = num[i];
        }
    }
    return k;
}
const arry1 = [];
const arry = [-2, -7, -3, -9, -4, 9];
try {
    console.log(largestNumber(arry1));
}
catch (error) {
    console.error("Caught an error:");
}
console.log(largestNumber(arry));
// console.log(largestNumber(arry1));
