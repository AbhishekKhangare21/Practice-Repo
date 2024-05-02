//How can you add an element to an Object?

const originalObj = {
  street: "1 Bangalore Ave",
  city: "Bangalore",
  state: "KA",
  zip: 56100,
};

const modifiedObj = {
  ...originalObj,
  country: "India",
};

console.log(originalObj);
