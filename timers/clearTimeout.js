// clearTimeout() method is used to stop a timer that was previously created with setTimeout() method.

// setTimeout() method returns a Timer object.
var t = setTimeout(function () {
  console.log("Completed Task");
}, 10000);

console.log(t);

setTimeout(function () {
  // The clearTimeout() method is used to stop a timer that was previously created with setTimeout() method.
  console.log("Clearing the timer")
  clearTimeout(t);
}, 2000);
