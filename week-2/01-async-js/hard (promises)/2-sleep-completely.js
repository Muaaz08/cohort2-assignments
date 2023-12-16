/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve, reject) => {
    // console.log("Sleep beginning....");
    let startTime = new Date();

    let givenSeconds = milliseconds * 1000;
    let isRunning = true;

    while (isRunning) {
      let nowTime = new Date();
      let diffTime = parseInt(
        Math.abs(startTime.getTime() - nowTime.getTime())
      );
      // console.log({ diffTime });

      if (diffTime > givenSeconds) {
        isRunning = false;
        break;
      }
    }
    resolve();
  });
}

console.log("starting ");
sleep(10).then(() => {
  console.log("sleep done...!");
});

module.exports = sleep;
