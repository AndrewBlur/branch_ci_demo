const add = require("./index");
const multiply = require("./index");

if (add(2, 3) === 5) {
  console.log("Test passed successfully");
} else {
  throw new Error("Test failed");
}


if (multiply(4, 5) === 20) {
  console.log("Pull request validation test passed");
} else {
  throw new Error("Pull request validation test failed");
}
