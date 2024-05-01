// Explain the difference between Object.freeze() vs const
// "use strict";
// const month = "July";

// month = "Feb";

// console.log(month);

var person = {
  name: "Abhishek",
};

Object.freeze(person); // it will not give error (in use strict it will give) but it will not assign value as well

person.name = "Pranit";

console.log(person);
