var path = process.argv[2], extension = '.' + process.argv[3]
require('fs').readdir(path, function (err, files) {
	if ( err )  throw err
	files.filter((file) => file.substr(extension.length * -1) === extension).forEach(function (file) {
		console.log(file)
	})
})
