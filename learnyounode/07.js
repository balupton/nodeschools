require('http').request(process.argv[2], function (response) {
    // response is an IncomingMessage which is a ReadableStream
    // response.pipe(process.stdout)
    response.on('data', function (data) {
        // process.stdout.write(data)
        console.log(data.toString())
    })
}).end()  // not needed when doing .get instead of .request
