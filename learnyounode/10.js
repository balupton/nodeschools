function pad (number, size) {
	if ( size == null )  size = 2
	number = String(number)
	while ( number.length < size ) {
		number = '0' + number
	}
	return number
}
require('net').createServer(function (socket) {
	var now = new Date()
	var year = pad(now.getFullYear(), 4), month = pad(now.getMonth() + 1), date = pad(now.getDate()), hours = pad(now.getHours()), minutes = pad(now.getMinutes())
	socket.write(`${year}-${month}-${date} ${hours}:${minutes}\n`)
	socket.end()
}).listen(process.argv[2])
