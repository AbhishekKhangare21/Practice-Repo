// My way
// const checkNumber = (num) => {
//   if (num === 0) {
//     console.log("number is 0");
//   } else if (num.toString().split("")[0] == "-") {
//     console.log("number is negative");
//   } else {
//     console.log("number is positive");
//   }
// };

// checkNumber(0);

function check() {
  var value = document.getElementById("data").value;
  var res = Math.sign(value);
  document.getElementById("res").innerText = res;
}
