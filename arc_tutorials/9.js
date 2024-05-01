// How to find unique values in an array

const Ids = [10, 4, 5, 65, 34, 23, 85, 10, 4, 5];

console.log(
  Ids.filter((elem, i, arr) => arr.indexOf(elem) == arr.lastIndexOf(elem))
);
