var x = "test";
var y = function fun() {
  console.log("func");
};

if (y) {
  x += typeof y;
}

console.log(x);
