require('http').get(process.argv[2], function (response) {
	var result = ''
	response.on('data', function (data) {
		result += data.toString()
	})
	response.on('end', function () {
		console.log(result.length)
		console.log(result)
	})
})
