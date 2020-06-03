const { boolean } = require('boolean');
const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const default_false = boolean(core.getInput('test-boolean-default-false'));
    const default_true = boolean(core.getInput('test-boolean-default-true'));
    console.log(`default_false is ${default_false}`);
    console.log(`default_true is ${default_true}`);
    if(default_true)
    {
      console.log('default_true evaluates to true');
    }
    if(default_false)
    {
      console.log('default_false evaluates to true');
    }
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
