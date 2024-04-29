const strFrom = Array.from("testfrom");
console.log(strFrom);

const arrFrom = Array.from([1, 2, 3], (x) => x + x);
console.log(arrFrom);

const result = Array.from({ length: 10 }, (v, i) => i);
console.log(result);
