require('fs').readFile(process.argv[2], function (err, buffer) {
    if ( err )  throw err
    console.log(buffer.toString().split('\n').length - 1)
})
