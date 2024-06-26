/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {}

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

// console.log("2");
// wait(1000).then(() => console.log("1"));
// console.log("3");

module.exports = wait;
