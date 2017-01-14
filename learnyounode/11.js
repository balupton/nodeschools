var file = require('fs').createReadStream(process.argv[3])
require('http').createServer(function (req, res) {
	file.pipe(res)
}).listen(process.argv[2])
