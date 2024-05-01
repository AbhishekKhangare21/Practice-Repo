// How can you extract a few fields from the given JSON object and form a new array?

const input = {
  students: [
    { name: "Aniket Gaharole", id: 10, email: "email@aniket.com" },
    { name: "Abhishek Khangare", id: 12, email: "email@aniket.com" },
    { name: "Pranit Patil", id: 18, email: "email@aniket.com" },
  ],
};

const op = input.students.map(function (item) {
  let studObj = {
    name: item.name,
    email: item.email,
  };
  return studObj;
});

console.log(op);
