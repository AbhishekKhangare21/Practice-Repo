console.time("codeStart");

let num = 4;

for (var fact = 1; num > 1; num--) {
  fact = fact * num;
}
console.log(fact);
console.timeEnd("codeStart");
