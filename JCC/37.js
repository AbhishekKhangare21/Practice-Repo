var x = new Promise(function (resolve, reject) {
  resolve("resolve");
  reject("reject");
});

const res = x
  .then((x) => console.log("fulfilled" + " " + x))
  .catch((x) => console.log("error" + " " + x));

console.log(res);
