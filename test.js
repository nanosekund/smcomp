var smcomp = require('./index.js');

var inputfile = '/Applications/MAMP/htdocs/gulpSM/source/main.sp';
var outputfile = '/Applications/MAMP/htdocs/gulpSM/release/test.smx';
var options = {
  '-v' : 2,
  '-E' : null
};

smcomp.compile(inputfile, outputfile, options, function(err, stdout){
    if(err) { return console.error(stdout); }
    //Success
    console.log(stdout);
});
