const arr = [1, 2, 3, 4, 5, 3, 2];
const result = arr.filter(function (elem) {
  return arr.indexOf(elem) == arr.lastIndexOf(elem);
});

console.log(result);
