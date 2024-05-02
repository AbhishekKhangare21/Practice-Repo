// How to add an elemnt at the beginning of Array?

const employees = [5, 4, 34, 45, 34, 45];
const ele = 2;

// Using Spread Operator
const newEmployees = [ele, ...employees];
console.log(newEmployees);

// Using Array unshift method -> Do not recommend
employees.unshift(ele);
console.log(employees);
