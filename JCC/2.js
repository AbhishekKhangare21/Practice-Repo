let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const flattendArr = arr.reduce(
  (prevValue, currValue) => prevValue.concat(currValue),
  []
);

console.log(flattendArr);
