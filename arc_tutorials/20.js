// Given an array of strings, reverse each word in the sentence?

const str = "Welcome back Abhishek Khangare";

var reverseStr = reverseStrBySeperator(str, "");

function reverseStrBySeperator(sampleInput, seperator) {
  return sampleInput.split(seperator).reverse().join(seperator);
}

console.log(reverseStr);
