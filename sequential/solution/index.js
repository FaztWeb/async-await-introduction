const { taskOne, taskTwo } = require('./tasks');

// Secuentially Processes
async function main() {
  try {
    console.time('Measuring time');

    const valueOne = await taskOne(); // task 4 seconds to finish
    const valueTwo = await taskTwo(); // wait the last task to finish

    console.log('Task One returned: ', valueOne);
    console.log('Task Two returned: ', valueTwo);
    
    console.timeEnd('Measuring time'); // the total is 6 seconds to finish
  }
  catch (e) {
    console.log(e);
  }
}

main();
