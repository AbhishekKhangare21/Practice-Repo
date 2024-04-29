// Question: Remove duplicates from an Array // can you do this using filter
const arr = [2, 3, 5, 3, 6, 8, 9, 2, 11, 5];
//Expected Output: [2, 3, 5, 6, 8, 9, 11];

const resultArr = [...new Set(arr)];
console.log(resultArr);

const strArr = ["Mike", "John", "Nancy", "Thomas", "Nancy", "Peter", "Mike"];
// Expected Output: ["Mike", "John", "Nancy", "Thomas", "Peter"]

const resultStrArr = [...new Set(strArr)];
console.log(resultStrArr);
