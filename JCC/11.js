const num1 = [[1], [2]];
const num2 = [3, [4]];
const num3 = 5;

const concatArr = num1[0].push(num3);

console.log(num1);
console.log(num2);

const result = num1.concat(num2);

console.log(result);
