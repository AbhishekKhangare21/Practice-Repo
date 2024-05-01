const studentIds = [1, 2, 34, 5, 6, 7, 8];

const passedIds = [1, 2, 3];

let result = studentIds.some((ele) => passedIds.includes(ele));
console.log(result);
