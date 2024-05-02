//How can we clone an Object?

const employees = {
  id: 10,
  naem: "Ram",
  dept: "Computer Science",
};

// Way #1
// const newEmployeeObj = Object.assign({}, employees);

// Way #2 - recommended
const newEmployeeObj = { ...employees };
console.log(newEmployeeObj);

console.log(newEmployeeObj);
