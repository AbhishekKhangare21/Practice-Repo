// How can you uppercase the first character in a string array?

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const newArr = [];
for (let day of days) {
  let newDay = day.charAt(0).toUpperCase() + day.substring(1);
  newArr.push(newDay);
}
console.log(newArr);
