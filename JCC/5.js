// Question: Find Boolen Output of Below Code (with reason)

const falsy = new Boolean(false);

if (falsy) {
  if ([]) console.log("Array [] is empty");
  if ([] == false) console.log("Empty [] is compared with false");
}
