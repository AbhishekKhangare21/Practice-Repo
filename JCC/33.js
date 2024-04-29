//Find below code output

var a = "test";
class Test {
  a = "any";
  prop() {
    console.log(this.a);
    return a;
  }
  static get prop() {
    console.log(a);
    return a;
  }
}

const test = new Test();
Test.prop = "bar";

test.prop();
Test.prop;
