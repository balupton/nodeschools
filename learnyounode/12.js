/*
// reading then writing
require('http').createServer(function (req, res) {
	req.on('data', function (data) {
		res.write(data.toString().toUpperCase())
	})
	req.on('end', function () {
		res.end()
	})
}).listen(process.argv[2])
*/

// using piping
'use strict'
class UC extends require('stream').Transform {
	_transform (data, encoding, next) {
		next(null, data.toString().toUpperCase())
	}
}
require('http').createServer(function (req, res) {
	req.pipe(new UC()).pipe(res)
}).listen(process.argv[2])
