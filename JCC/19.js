//Question: Choose the on Object Is Method that returns false

Object.is(NaN, NaN);

Object.is("Test", "Test");

Object.is({ a: 1 }, { a: 1 });

const res = Object.is(undefined, undefined);

console.log(res);
