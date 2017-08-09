var gzippo = require('gzippo');
var express = require('express');
var app = express();
var morgan = require('morgan');
var logger = morgan('combined');
var fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + "/dist" });
});

app.listen(process.env.PORT || 5000);
