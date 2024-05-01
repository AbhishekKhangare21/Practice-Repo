// How to find the average of the numbers in the numbered array?

const studentsIds = [59, 53, 23, 1, 67, 84, 10];

// Using reduce method

const totalCount = studentsIds.reduce((a, b) => a + b, 0);

const arrLength = studentsIds.length;

console.log(totalCount / arrLength);

// Using for loop

const averageFinder = (arr) => {
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    average = average + arr[i];
  }
  return average / arr.length;
};

console.log(averageFinder(studentsIds));
