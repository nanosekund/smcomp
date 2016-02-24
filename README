# smcomp

This module should work on win/linux to, i've only tested it on mac so far though.

#### Installation
    npm install smcomp --save

#### Usage

    var smcomp = require('smcomp');
    var options = {
        '-v' : 2,
        '-E' : null
    };

    //The options parameter is optional.
    //see the "Options" description in this readme
    smcomp.compile('inputfile.sp', 'outputfile.smx', options,
    function(err, stdout){
        if(err) { return console.error(stdout); }
        //Success
    });

#### Options

     -A<num>  alignment in bytes of the data segment and the stack
     -a       output assembler code
     -c<name> codepage name or number; e.g. 1252 for Windows Latin-1
     -e<name> set name of error file (quiet compile)
     -h       show included file paths
     -i<name> path for include files (default= smcomp/comp/include)
     -l       create list file (preprocess only)
     -o<name> set base name of (P-code) output file
     -O<num>  optimization level (default=-O2)
         0    no optimization
         2    full optimizations
     -p<name> set name of "prefix" file
     -r[name] write cross reference report to console or to specified file
     -S<num>  stack/heap size in cells (default=4096)
     -s<num>  skip lines from the input file
     -t<num>  TAB indent size (in character positions, default=8)
     -v<num>  verbosity level; 0=quiet, 1=normal, 2=verbose (default=2)
     -w<num>  disable a specific warning by its number
     -E       treat warnings as errors
     -X<num>  abstract machine size limit in bytes
     -XD<num> abstract machine data/stack size limit in bytes
     -\       use '\' for escape characters
     -^       use '^' for escape characters
     -;[+/-]  require a semicolon to end each statement (default=-)
     sym=val  define constant "sym" with value "val"
     sym=     define constant "sym" with value 0

#### Options example

Options without values should be defined as null

    var options = {
        '-v' : 2,
        '-E' : null  <--- set to null
    };
