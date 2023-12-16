let count = 0;
let intervalId;

function startCounter() {
  count++;
  console.log(count);
  intervalId = setInterval(function () {
    count++;
    console.log(count);
  }, 1000);
}

function stopCounter() {
  clearInterval(intervalId);
}

startCounter();

setTimeout(stopCounter, 5000);

module.exports = {
  startCounter,
  stopCounter,
};
