// How to remove an element at the end of Array?

let employees = [1, 5, 56, 23, 56, 73, 23];

// Way #1 to remove element at end of the array
employees.pop();
console.log(employees);

// Way #2 - Array splice
employees.splice(-1);
console.log(employees);

// Way #3 -> Array slice
const newEmp = employees.slice(0, -1);
console.log(newEmp);
