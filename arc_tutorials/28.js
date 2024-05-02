// How can we replace an element at a specific index in an Array?

const studentIds = [10, 20, 30, 50, 324, 544, 545];

const replaceAt = 1;
const ele = 15;

const newStudentsIds = [
  ...studentIds.slice(0, replaceAt),
  ele,
  ...studentIds.slice(replaceAt + 1),
];

console.log(newStudentsIds);
