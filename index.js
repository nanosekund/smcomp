var exec = require('child_process').exec;
var os = require('os').platform();
var events = require('events');
var platform = {
  'darwin' : 'mac',
  'win32' : 'win',
  'linux' : 'linux',
  'sunos' : 'linux',
  'freebsd' : 'linux'
};

var comp = {
  mac : '/comp/mac/spcomp',
  win : '/comp/win/spcomp.exe',
  linux : '/comp/linux/spcomp'
};

var defOptions = {
  '-i' : __dirname + '/comp/include'
};

exports.compile = function (sourceFile, compiledFile, options,cb){

  if(typeof cb === 'undefined') {
    cb = options;
    options = defOptions;
  }

  var command = __dirname + comp[platform[os]] + ' '
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
    if(err)
    {
      cb(true, stdout);
    }
    else
    {
        cb(null, stdout);
    }
  });
};
