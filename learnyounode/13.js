function parse (url) {
    var query = require('querystring').parse(require('url').parse(url).query)
    return new Date(query.iso)
}

require('http').createServer(function (req, res) {
    if ( req.method === 'GET' ) {
        try {
            if ( req.url.indexOf('/api/parsetime') === 0 ) {
                var date = parse(req.url)
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.write(JSON.stringify({
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                }))
            }
            else if ( req.url.indexOf('/api/unixtime') === 0 ) {
                var date = parse(req.url)
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.write(JSON.stringify({
                    unixtime: date.getTime()
                }))
            }
            else {
                throw new Error('404')
            }
        }
        catch (err) {
            res.write(err.message)
        }
        res.end()
    }
}).listen(process.argv[2])
