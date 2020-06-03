const core = require('@actions/core');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const default_false = core.getInput('test-boolean-default-false');
    const default_true = core.getInput('test-boolean-default-true');
    console.log(`default_false is ${default_false}`);
    console.log(`default_true is ${default_true}`);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
