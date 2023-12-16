let count = 0;
let keepRunning = true;

function startCounter() {
  if (!keepRunning) return;
  count++;
  console.log(count);
  setTimeout(startCounter, 1000);
}

function stopCounter() {
  keepRunning = false;
}

startCounter();

setTimeout(stopCounter, 5000);
