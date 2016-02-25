var exec = require('child_process').exec;
var os = require('os').platform();
var events = require('events');

var comp = {
  darwin : '/comp/' + os + '/spcomp',
  win32 : '/comp/' + os + '/spcomp.exe',
  linux : '/comp/' + os + '/spcomp'
};

var defOptions = {
  '-i' : __dirname + '/comp/include',
  '-v' : '2'
};

exports.compile = function (sourceFile, compiledFile, options,cb) {

  if(typeof cb === 'undefined') {
    cb = options;
    options = defOptions;
  }

  var command = __dirname
    + comp[os]
    + ' '
    + sourceFile
    + ' -o' + compiledFile;

  for(var defKey in defOptions) {
    if(!options[defKey]) {
      options[defKey] = defOptions[defKey];
    }
  }

  for(var key in options) {
    var flag = key + options[key];

    if(options[key] === null) {
      flag = key;
    }

    command += ' ' + flag;
  }

  exec(command, function (err, stdout, stderr) {
    if(err) {
      cb(true, err);
    }
    else {
      cb(null, stdout);
    }
  });
};
