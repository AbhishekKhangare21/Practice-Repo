let arr = [8, 2, 3, 4, 5, 6];

let avg =
  arr.reduce((acc, curr) => {
    return acc + curr;
  }) / arr.length;

console.log(avg);
