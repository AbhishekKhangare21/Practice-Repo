//How can we delete an element at a specific index in an Array?

const studentIds = [10, 454, 45, 767, 232, 54];
const deleteAt = 2;

const newStudentIds = [
  ...studentIds.slice(0, deleteAt),
  ...studentIds.slice(deleteAt + 1),
];

console.log(newStudentIds);
