var greeting = "Understanding this keword";

const obj = {
  greeting: "Hello India!",

  getGreeting(greeting) {
    var greeting = "Hello India!";
    return this.greeting;
  },
};

console.log(obj.getGreeting("Welcome to Javascript!"));
