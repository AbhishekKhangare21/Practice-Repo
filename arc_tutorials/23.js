// What is IIFEs
// or Can you talk about functions expressions in javascript
// or Can you create a function and invoked in immediately

// Ans : It's an Immediately-Invoked Function, or IIFE for short. It executes immediately after it's created

function getData() {
  console.log("Hi, I am from getData ");
}
getData();

(function getData() {
  console.log("Hi, I am from getData ");
})();
