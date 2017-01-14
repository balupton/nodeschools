/*
// using objects
var get = require('http').get
var completed = 0
var results = process.argv.slice(2).map(function (url) {
	var entry = {url, data: ''}
	get(url, function (response) {
		response.on('data', function (data) {
			entry.data += data.toString()
		})
		response.on('end', function () {
			++completed
			if ( results.length === completed ) {
				results.forEach(function (result) {
					console.log(result.data)
				})
			}
		})
	})
	return entry
})
*/

// using promises
var get = require('http').get
Promise.all(process.argv.slice(2).map(function (url) {
	return new Promise(function (resolve, reject) {
		get(url, function (response) {
			var result = ''
			response.on('data', function (data) {
				result += data.toString()
			})
			response.on('end', function () {
				resolve(result)
			})
			response.on('error', reject)
		})
	})
})).then(function (results) {
	results.forEach(function (result) {
		console.log(result.toString())
	})
})


/* using taskgroup
/ npm install -s taskgroup
var urls = process.argv.slice(2)
var get = require('http').get
var tasks = require('taskgroup').create().done(function (error, result) {
	if ( error )  throw error
	results.forEach(function (result) {
		console.log(result.toString())
	})
})
urls.forEach(function (url) {
	tasks.addTask(function (done) {
		get(url, function (response) {
			var result = ''
			response.on('data', function (data) {
				result += data.toString()
			})
			response.on('end', function () {
				done(null, result)
			})
			response.on('error', done)
		})
	})
})
tasks.run()
*/

/* using chainy
/ npm install -s chainy
var urls = process.argv.slice(2)
var chain = require('chainy').require('map request')
chain(urls).map((url, next) => chain(url).request()).forEach((result) => console.log(result.toString()))
*/
