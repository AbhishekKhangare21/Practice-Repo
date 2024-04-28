const obj = Object.create(
  { subject: "javascript" },
  { lesson: { value: "Object Assign" } }
);

console.log(obj);

const copy = Object.assign({}, obj);
console.log(copy);
