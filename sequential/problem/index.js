const { taskOne, taskTwo } = require('./tasks');

// Secuentially Processes
async function main() {
  try {
    console.time('Measuring time');

    const valueOne = await taskOne(); // The Error finish the entire program 
    const valueTwo = await taskTwo(); // without continue with this task

    console.log('Task One returned: ', valueOne);
    console.log('Task Two returned: ', valueTwo);
    
    console.timeEnd('Measuring time'); // never executes this line
  }
  catch (e) {
    console.log(e); // throws the entire application
  }
}

main();
