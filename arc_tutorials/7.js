const unsortedArr = [10, 4, 29, 34, 63, 3, 87, 72];

const sortedArr = unsortedArr.sort((a, b) => {
  return a - b;
});

console.log(sortedArr);
