// How to find unique values from an Array in sorted order?

const Ids = [23, 45, 64, 67, 23, 45, 98, 75, 69];

console.log(
  Ids.filter((elem, i, arr) => arr.indexOf(elem) === arr.lastIndexOf(elem))
);
