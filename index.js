// made fs a const
const fs = require('fs');
// added 'colors'
const colors = require('colors');


// Melony commented out this code and made const above

// fs = require('fs');

exports.debug = (title, obj, status, date) => {
  // date variable for timestamp
  const time = '\n' + new Date().toLocaleString();
  // formatting variables
  const lineBreak = '\n\n';
  const divider = '\n******************************\n';
  const dividerTwo = '++++++++++++++++++++++++++++++\n';
  const output = lineBreak + divider + title + divider;
  const format = obj + '\n' + dividerTwo;

  // Melony commented out this code and replaced it using the 'colors' package
  // https://www.npmjs.com/package/colors

  // // color variables
  // const red = '\x1B[31m';
  // const blue = '\x1B[34m';

  // Melony commented out this code and replaced it with the code following below

  // set console color base on status return
  if (status !== 'success!') {
    status = 'Error!';
    const data = red + [output, format, status, time];
  } else if {
    status = 'Warning!';
    data = blue + [output, format, status, time];
  } else {
    status
    data =
  }

// End of code commented out by Melony

// code added by Melony

// 'if' statement to utilize 'console.error', 'console.warn' and 'console.log'
if (process.env.DEBUG === 'true') {
  // if status is equal to error...
  if (status = 'Error!') {
    // ...then display error info in red
    console.error(colors.red('Error!' + output + format + status + time))
    // if status is equal to warn...
  } else if  (status = 'Warning!') {
    // ...then display warn info in yellow
    console.warn(colors.yellow('Warning!' + output + format + status + time))
    // if status is not equal to error or warn...
  } else {
    // ...then display info in yellow
    console.log(colors.green('Alert!' + output + format + status + time))
  };
}

// end of code added by Melony

  if (process.env.DEBUG === 'true') {
    // create log file
    fs.appendFile ('./logs/debug.log', data, (err) => {
      if (err) {
        return console.log(err);
      }
    });
    console.log(data);
  }
};
