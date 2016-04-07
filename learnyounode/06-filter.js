module.exports = function (path, extension, next) {
    require('fs').readdir(path, function (err, files) {
        if ( err )  return next(err)
        next(null, files.filter((file) => file.substr(extension.length * -1) === extension))
    })
}
