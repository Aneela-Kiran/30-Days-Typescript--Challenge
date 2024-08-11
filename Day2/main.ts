// Question 3: First and Last Element Instructions: Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.

// Requirements:

// If the array has only one element, the function should return an array with that element duplicated. Ensure the function handles arrays with a single element correctly.

// --

function NewArray(arr:number[]): number[]{

if(arr.length === 0)
{
  return [];
}

else if(arr.length === 1)
{
  return [arr[0],arr[0]];
}

  else 

return [arr[0],arr[array.length-1]]


}
 
const array:number[]=[3,6,7,8];
const array1:number[]=[4];
const array2:number[]=[];


console.log(NewArray(array));
console.log(NewArray(array1));
console.log(NewArray(array2));


// Question 4 : Find the Largest Number Instructions: Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.

// Requirements:

// The function should handle arrays with positive and negative numbers. If the array contains only one number, return that number. Ensure the function handles an empty array gracefully (you might decide to return undefined or throw an error based on your needs). Note: This solution avoids using built-in methods like Math.max and demonstrates basic iteration and comparison logic.

function largestNumber(num:number[]):number{

  if(num.length === 0){
    throw new Error("Array is empty")
  }

    let k:number=num[0];
    for(let i=1 ; i<num.length ;i++ ){

      if( num[i] > k ){

        k = num[i];

      }
    }
      return k
}
//arrays
const arry1:[]=[];
const arry:number[]=[4,7,9,-9,34,-4,];


console.log(largestNumber(arry));//output 34

try {
  console.log(largestNumber(arry1));  // output caught an error
} 
catch (error)
 {
  console.error("Caught an error:");  
}


