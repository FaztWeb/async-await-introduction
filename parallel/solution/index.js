const { taskOne, taskTwo } = require('./tasks');

// EXECUTING TWO TASKS IN PARALLEL
async function main() {

  try {
    console.time('tasks time');

    const data = await Promise.all([taskOne(), taskTwo()]);

    console.log('Task One returned: ', data[0]);
    console.log('Task Two returned: ', data[1]);

    console.timeEnd('tasks time');
  }
  catch (e) {
    console.log(e);
  }

}

main();
