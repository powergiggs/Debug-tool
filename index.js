const chalk = require('chalk');

// util bumpit code
function bumpIt(currentVersion, incrementType) {
  const versionArray = currentVersion.split('.');
  // loop through index in array
  for (const versionIndex in versionArray) {
    versionArray[versionIndex] = parseInt(versionArray[versionIndex], 10);
  }
        // match incrementType type with case type
switch (incrementType.toLowerCase()) {
  case 'patch':
    versionArray[2] += 1; // patch
    break;

  case 'minor':
    versionArray[1] += 1;// minor
    versionArray[2] = 0; // patch
    break;

  case 'major':
    versionArray[0] += 1;// major
    versionArray[1] = 0;// minor
    versionArray[2] = 0;// patch
    break;
}
  // return result as string
  return versionArray.join('.');
}


// util debug code

function debug(title, object, status) {
  if (process.env.DEBUG === 'true') {
    const sep = '\n==============DEBUGGING=============\n';
    const out = sep + title + sep;
    const date = new Date().toLocaleString();
  // color variables
    const success = chalk.green;
    const error = chalk.red;
    const blueb = chalk.bold.blue;

  // store the message content
    const messageTitle = out;
    const messageBody = object;
    const messageStatus = status.toLowerCase();

    if (!messageTitle) {
     messageTitle = 'No msg title enter'
    }

    if (!messageBody) {
     messageTitle = 'No msg body'
  }

    const messageFormat = `${out} MSG: "${messageBody}" \n\nTIME: ${date}`;


  switch(messageStatus) {
    case 'error!':
    case 'error':
    case 'err':

     console.error(error('\n' + messageStatus + ' ' + messageFormat + '\n'));
      break;
    case 'success!':
    case 'success':
    // messageStatus = 'success';
     console.log(success('\n' + messageStatus + ' ' + messageFormat + '\n'));
      break;

    case 'warn':
    case 'warning!':
    case 'warning':
    // messageStatus = 'warning';
     console.warn(blueb('\n' + messageStatus + ' ' + messageFormat + '\n'));
      break;


  }
    return messageStatus;
  }

}


exports.bumpIt = bumpIt;
exports.debug = debug;
