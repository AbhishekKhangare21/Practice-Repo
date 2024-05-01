// Given  two strings, how can you check if the strings are anagram fro each other?

const str1 = "Army";
const str2 = "Mary";

function checkAnagram(string1, string2) {
  var a = string1.toLowerCase();
  var b = string2.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(checkAnagram(str1, str2));
