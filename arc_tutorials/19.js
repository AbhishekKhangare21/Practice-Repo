//Filter a given object based on certain conditions and return the coresponding object?

const input = {
  students: [
    { studentId: 1, firstName: "Abhishek", lastName: "Khangare" },
    { studentId: 2, firstName: "Pranit", lastName: "Patil" },
    { studentId: 23, firstName: "Aniket", lastName: "Gaharole" },
  ],
};

var op = input.students.filter(function (item) {
  if (item.studentId > 5) {
    return item.studentId > 5 ? item : "";
  }
});

console.log(op);
