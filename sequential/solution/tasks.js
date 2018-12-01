const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {

  async taskOne () {
    try {
      throw Error('SOME PROBLEM');
      await sleep(4000);
      return 'ONE VALUE';
    }
    catch (e) {
      console.log(e);
    }
  },

  async taskTwo () {
    try {
      await sleep(2000);
      return 'TWO VALUE';
    }
    catch (e) {
      console.log(e);
    }
  }

};
