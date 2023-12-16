// const counter = require("../easy/1-counter");

let intervalId;

intervalId = setInterval(() => {
  let now = new Date();

  //   let formattedTime = now.toTimeString();
  let formattedTime = now.toTimeString().slice(0, 8);
  console.log({ formattedTime });

  let formattedHoursTime = now.toLocaleTimeString([], { hour12: true });
  console.log({ formattedHoursTime });
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
