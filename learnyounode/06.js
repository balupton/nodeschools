var path = process.argv[2], extension = '.' + process.argv[3]
require('./06-filter')(path, extension, function (err, files) {
	if ( err )  throw err
	files.forEach(function (file) {
		console.log(file)
	})
})
