// How can you combine two Arrays into a third Array using spread operator?

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [10, 20, 30, 40, 50];

const thirdArr = [...firstArr, ...secondArr];
console.log(thirdArr);
