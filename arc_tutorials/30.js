// How can we delete a specific elemnt in an Array?

const original = [1, 22, 3, 4, 5];

const toDelete = 22;

const newArr = original.filter((item) => item !== toDelete);

console.log(newArr);
